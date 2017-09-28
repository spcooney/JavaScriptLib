var version = "1.0.0.0",
    StrUtil = function () {
        return new StrUtil.Core.init();
    };
StrUtil.Core = StrUtil.prototype = {
    Version: version,
    Constructor: StrUtil,
    Clone: function (obj) {
        var retObj = arguments.callee;
        if (arguments.length === 1) {
            retObj.prototype = obj;
            return new retObj;
        }
    },
    EmptyString: "",
    EncodeBase64: function (val) {
        var baseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
        var arrayOne = [];
        var arrayTwo = [];
        var arrayLength = 0;
        var lengthOne, lengthTwo, lengthThree, lengthFour = val.length;
        do {
            lengthOne = val[arrayLength++];
            lengthTwo = val[arrayLength++];
            lengthThree = val[arrayLength++];
            arrayTwo[0] = lengthOne >> 2;
            arrayTwo[1] = (lengthOne & 3) << 4 | lengthTwo >> 4;
            arrayTwo[2] = (lengthTwo & 15) << 2 | lengthThree >> 6;
            arrayTwo[3] = lengthThree & 63;
            if (isNaN(lengthTwo)) {
                arrayTwo[2] = arrayTwo[3] = 64;
            }
            else if (isNaN(lengthThree)) {
                arrayTwo[3] = 64;
            }
            for (var i = 0; i < 4; i++) {
                arrayOne.push(baseChars.charAt(arrayTwo[i]));
            }
        }
        while (arrayLength < lengthFour);
        return arrayOne.join(Helper.EmptyString);
    },
    InsertString: function (origValue, index, value) {
        if (index > 0) {
            return (origValue.substring(0, index) + value + origValue.substring(index, origValue.length));
        }
        else {
            return (value + origValue);
        }
    },
    IsNullOrEmpty: function (txt) {
        return ((StrUtil.Core.isNull(txt)) || (txt === StrUtil.Core.EmptyString));
    },
    IsNotNullOrEmpty: function (txt) {
        return !(StrUtil.Core.IsNotNullOrEmpty);
    },
    IsNull: function (obj) {
        return ((obj === undefined) || (obj === null) || (obj.length <= 0));
    },
    IsNotNull: function (obj) {
        return !(StrUtil.Core.IsNull(obj));
    },
    ReplaceAll: function (value, replacement) {
        return value.replace(new RegExp(value, 'g'), replacement);
    },
    StrLeft: function (value, n) {
        if (n <= 0) {
            return Helper.EmptyString;
        }
        else if (n > String(value).length) {
            return value;
        }
        else {
            return String(value).substring(0, n);
        }
    },
    StrRight: function (value, n) {
        if (n <= 0) {
            return Helper.EmptyString;
        }
        else if (n > String(value).length) {
            return value;
        }
        else {
            var len = String(value).length;
            return String(value).substring(len, Math.abs(len - n));
        }
    }
};