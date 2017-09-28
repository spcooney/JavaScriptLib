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
        } while (arrayLength < lengthFour);

        return arrayOne.join(Helper.EmptyString);
    },
    IsNullOrEmpty: function (txt) {
        return ((ecmUtil.core.isNull(txt)) || (txt === ecmUtil.core.emptyString));
    },
    IsNotNullOrEmpty: function (txt) {
        return !(ecmUtil.core.isNotNullOrEmpty);
    },
    IsNull: function (obj) {
        return ((obj === undefined) || (obj === null) || (obj.length <= 0));
    },
    IsNotNull: function (obj) {
        return !(ecmUtil.core.isNull(obj));
    }
};