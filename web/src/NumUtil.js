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
    CalcPercentChangeFrom: function (startVal, endVal, precision) {
        if (isNaN(startVal) || isNaN(endVal)) {
            return 0;
        }
        if ((startVal === 0) || (endVal === 0)) {
            return 0;
        }
        var subt = (((endVal * 10) - (startVal * 10)) / 10);
        if ((precision === null) || (precision <= 0)) {
            precision = 2;
        }
        return NumUtil.Core.ParseFloatNoZerosWithCommas(((subt.toPrecision(precision) / Math.abs(startVal.toPrecision(precision))) * 100), precision);
    },
    NumberWithCommas: function (value) {
        var parts = value.toString().split(".");
        parts[0] = parts[0].replace(/,/g, "");
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        return parts.join(".");
    },
    NumberWithoutCommas: function (value) {
        var parts = value.toString().split(".");
        parts[0] = parts[0].replace(/,/g, "");
        return parts.join(".");
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
    // Parses a float to the specified precision and removes trailing zeros
    ParseFloatNoZerosWithoutCommas: function (value, precision) {
        if (StrUtil.Core.IsNullOrEmpty(value)) {
            return value;
        }
        // Only replace commas if they exist
        if (value.indexOf(',') >= 0) {
            value = value.replace(/,/g, StrUtil.Core.EmptyString);
        }
        if (isNaN(value)) {
            return value;
        }
        var nVal = parseFloat(value);
        var fVal = nVal.toFixed(precision);
        var tVal = fVal.replace(/^0+|0+$/g, StrUtil.Core.EmptyString);
        if (isNaN(tVal) || StrUtil.Core.IsNullOrEmpty(tVal)) {
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
    // Parses a float to the specified precision, comma separates the thousand places, and removes trailing zeros
    ParseFloatNoZerosWithCommas: function (value, precision) {
        return NumUtil.Core.NumberWithCommas(NumUtil.Core.ParseFloatNoZeros(value, precision));
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
    },
    // Attempts to parse an integer.  If it fails, it will use the default value
    ParseIntWithDefault: function (value, defaultVal) {
        var num = parseInt(value);
        if (isNaN(num)) {
            var defNum = parseInt(defaultVal);
            if (isNaN(defNum)) {
                return defaultVal;
            }
            return defNum;
        }
    }
};