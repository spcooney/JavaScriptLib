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
    // An empty string ""
    EmptyString: "",
    // Encodes a string to Base64
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
        } while (arrayLength < lengthFour);

        return arrayOne.join(Helper.EmptyString);
    },
    // Gets the object type as a string
    GetType: function (value) {
        return Object.prototype.toString.apply(value);
    },
    // Inserts a string at the start of the index
    InsertString: function (value, index, insertedValue) {
        if (index > 0) {
            return (value.substring(0, index) + insertedValue + value.substring(index, value.length));
        }
        return (insertedValue + value);
    },
    // Determines if the object is a string
    IsString: function (value) {
        return (StrUtil.Core.GetType('String', value) === "[object String]");
    },
    // Checks if the string is null or empty
    IsNullOrEmpty: function (txt) {
        return ((StrUtil.Core.IsNull(txt)) || (txt === StrUtil.Core.EmptyString));
    },
    // Checks if the string is not null or empty
    IsNotNullOrEmpty: function (txt) {
        return !(StrUtil.Core.IsNullOrEmpty(txt));
    },
    // Checks if the string is undefined, null, or has a zero length
    IsNull: function (obj) {
        return ((obj === undefined) || (obj === null) || (obj.length <= 0));
    },
    // Checks if the string is not undefined, null, or a length greather than zero
    IsNotNull: function (obj) {
        return !((obj === undefined) || (obj === null) || (obj.length <= 0));
    },
    // Returns the characters to the left of the length
    Left: function (value, length) {
        if (length <= 0) {
            return StrUtil.Core.EmptyString;
        }
        else if (length > String(value).length) {
            return value;
        }
        else {
            return String(value).substring(0, length);
        }
    },
    // Replaces all of the occurences with the replacement
    ReplaceAll: function (target, value, replacement) {
        return target.replace(new RegExp(value, 'g'), replacement);
    },
    // Returns the characters to the right of the length
    Right: function (value, length) {
        if (length <= 0) {
            return StrUtil.Core.EmptyString;
        }
        else if (length > String(value).length) {
            return value;
        }
        else {
            var len = String(value).length;
            return String(value).substring(len, Math.abs(len - length));
        }
    }
};