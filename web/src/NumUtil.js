// Requires StrUtil.js
var version = "1.0.0.0",
    NumUtil = function () {
        return new NumUtil.Core.init();
    };
NumUtil.Core = NumUtil.prototype = {
    Version: version,
    Constructor: NumUtil,
    Clone: function (obj) {
        var retObj = arguments.callee;
        if (arguments.length === 1) {
            retObj.prototype = obj;
            return new retObj;
        }
    },
    // Parses a float to the specified precision and removes trailing zeros
    ParseFloatNoZeros: function (value, precision) {
        if (isNaN(value)) {
            return value;
        }
        var nVal = parseFloat(value);
        var fVal = nVal.toFixed(precision);
        var tVal = fVal.replace(/^0+|0+$/g, StrUtil.Core.EmptyString);
        if (isNaN(tVal) || (tVal === undefined) || (tVal === null) || (tVal.length <= 0)) {
            return value;
        }
        var subVal = tVal;
        if (tVal.charAt(tVal.length - 1) === '.') {
            subVal = tVal.substring(0, (tVal.length - 1));
        }
        if (subVal.charAt(0) === '.') {
            return ('0' + subVal);
        }
        return subVal;
    },
    ParseFloatWithCommas: function (value) {
        var parts = value.toString().split(".");
        parts[0] = parts[0].replace(/,/g, StrUtil.Core.EmptyString);
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        return parts.join(".");
    },
    ParseFloatWithoutCommas: function (value) {
        var parts = value.toString().split(".");
        parts[0] = parts[0].replace(/,/g, StrUtil.Core.EmptyString);
        return parts.join(".");
    }
};