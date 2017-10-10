// Combination of all the utilities in one file
var version = "1.0.0.0",
    JsUtil = function () {
        return new JsUtil.init();
    };
JsUtil = JsUtil.prototype = {
    Version: version,
    Constructor: JsUtil,
    Clone: function (obj) {
        var retObj = arguments.callee;
        if (arguments.length === 1) {
            retObj.prototype = obj;
            return new retObj;
        }
    },
    CreateAspWcfDate: function (dt) {
        var d = new Date(dt);
        if (isNaN(d)) {
            return dt;
        }
        return ('\/Date(' + d.getTime() + '-0000)\/');
    },
    // Creates a css link to the specified path
    CreateCssLink: function (path) {
        var ctrl = ele.createElement("link");
        ctrl.type = "text/css";
        ctrl.rel = "stylesheet";
        ctrl.href = path;
        return ctrl;
    },
    // Creates a css link to the specified path
    CreateCssHeaderLink: function (path, index) {
        window.document.getElementsByTagName("head")[index].appendChild(JsUtil.CreateCssLink(path));
    },
    // Creates a date based on a time entry, such as 08:30
    CreateDateFromTime: function (time) {
        if (JsUtil.IsNullOrEmpty(time)) {
            return JsUtil.EmptyString;
        }
        var timeSplit = time.split(":");
        if (JsUtil.IsNullOrEmpty(timeSplit)) {
            return JsUtil.EmptyString;
        }
        var t1 = timeSplit[0];
        var t2 = timeSplit[1];
        var d = new Date();
        d.setHours(t1);
        d.setMinutes(t2);
        d.setSeconds(00);
        return d;
    },
    // Creates a new date and sets the hours to 00:00
    CreateDateNoTime: function () {
        var d = new Date();
        d.setDate(d.getDate());
        d.setHours(0, 0);
        return d;
    },
    // Returns a timestamp based on the current date as "_month_day_year" (example: "_02_13_2017")
    CreateDateTimestamp: function () {
        var date = new Date();
        return ("_" + (date.getMonth() + 1) + "_" + date.getDate() + "_" + date.getFullYear());
    },
    // Creates a script link to the specified path
    CreateJavaScriptHeaderLink: function (path) {
        var ctrl = ele.createElement("script");
        ctrl.type = "text/javascript";
        ctrl.language = "javascript";
        ctrl.src = path;
        return ctr;
    },
    // Creates a script link to the specified path
    CreateJavaScriptHeaderLink: function (path, index) {
        window.document.getElementsByTagName("head")[index].appendChild(JsUtil.CreateJavaScriptHeaderLink(path));
    },
    // Appends the url to the window protocol, hostname, and port
    CreateLocationHref: function (url) {
        return (window.location.protocol + "//" + window.location.hostname + ":" + window.location.port + "/" + url);
    },
    CreateSslLocationHref: function (url) {
        return ("https://" + window.location.hostname + ":" + window.location.port + "/" + url);
    },
    DecodeUrl: function (url) {
        url = url.replace(/%20/g, " ");
        url = url.replace(/%26/g, "&");
        url = url.replace(/%3d/g, "=");
        url = url.replace(/%2b/g, "+");
        url = url.replace(/%2f/g, "/");
        url = url.replace(/%21/g, "!");
        url = url.replace(/%2a/g, "*");
        url = url.replace(/%28/g, "(");
        url = url.replace(/%29/g, ")");
        url = url.replace(/%2d/g, "-");
        url = url.replace(/%2e/g, ".");
        url = url.replace(/%5f/g, "_");
        url = url.replace(/%5c/g, "\\");
        url = url.replace(/%27/g, JsUtil.EmptyString);
        return url;
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
    EncodeUrl: function (url) {
        url = url.replace(/ /g, "%20");
        url = url.replace(/&/g, "%26");
        url = url.replace(/=/g, "%3d");
        url = url.replace("+", "%2b");
        url = url.replace("/", "%2f");
        url = url.replace(/!/g, "%21");
        url = url.replace("*", "%2a");
        url = url.replace("(", "%28");
        url = url.replace(")", "%29");
        url = url.replace(/-/g, "%2d");
        url = url.replace(".", "%2e");
        url = url.replace(/_/g, "%5f");
        url = url.replace("\\", "%5c");
        return url;
    },
    // Gets the object type as a string
    GetType: function (value) {
        return Object.prototype.toString.apply(value);
    },
    // Determines the quarter (Q1, Q2, Q3, Q4) base on the current date
    GetQuarterStr: function (date, includeYear) {
        var dt = new Date(date);
        var month = dt.getMonth();
        var qtr = '';
        if ((month >= 4) && (month <= 6)) {
            qtr = 'Q2';
        }
        else if ((month >= 7) && (month <= 9)) {
            qtr = 'Q3';
        }
        else if ((month >= 10) && (month <= 12)) {
            qtr = 'Q4';
        }
        else {
            qtr = 'Q1';
        }
        if (includeYear) {
            qtr += (" " + dt.getFullYear());
        }
        return qtr;
    },
    // Returns the value of a specified url parameter
    GetUrlParam: function (param) {
        var results;
        try {
            results = new RegExp('[\\?&]' + param + '=([^&#]*)').exec(window.location.href);
        }
        catch (ex) {
            results = JsUtil.EmptyString;
        }
        if (JsUtil.IsNullOrEmpty(results))
            return JsUtil.EmptyString;
        else
            return (results[1] || 0);
    },
    // Inserts a string at the start of the index
    InsertString: function (value, index, insertedValue) {
        if (index > 0) {
            return (value.substring(0, index) + insertedValue + value.substring(index, value.length));
        }
        return (insertedValue + value);
    },
    // Checks if the current date is a date object
    IsDate: function (date) {
        return (Object.prototype.toString.apply(date) === "[object Date]");
    },
    // Determines if the object is a string
    IsString: function (value) {
        return (JsUtil.GetType('String', value) === "[object String]");
    },
    // Checks if the string is null or empty
    IsNullOrEmpty: function (txt) {
        return ((JsUtil.IsNull(txt)) || (txt === JsUtil.EmptyString));
    },
    // Checks if the string is not null or empty
    IsNotNullOrEmpty: function (txt) {
        return !(JsUtil.IsNullOrEmpty(txt));
    },
    // Checks if the string is undefined, null, or has a zero length
    IsNull: function (obj) {
        return ((obj === undefined) || (obj === null) || (obj.length <= 0));
    },
    // Checks if the string is not undefined, null, or a length greather than zero
    IsNotNull: function (obj) {
        return !((obj === undefined) || (obj === null) || (obj.length <= 0));
    },
    // Determines if the current date is valid
    IsValidDate: function (date) {
        if (Object.prototype.toString.call(date) === "[object Date]") {
            if (isNaN(date.getTime())) {
                return false;
            }
            else {
                return true;
            }
        }
        else {
            return false;
        }
    },
    // Returns the characters to the left of the length
    Left: function (value, length) {
        if (length <= 0) {
            return JsUtil.EmptyString;
        }
        else if (length > String(value).length) {
            return value;
        }
        else {
            return String(value).substring(0, length);
        }
    },
    // Offsets the current UTC date to the local timezone
    OffsetUtcDateToLocalDate: function (date) {
        var newDate = new Date(date.getTime() + date.getTimezoneOffset() * 60 * 1000);
        var offset = (date.getTimezoneOffset() / 60);
        var hours = date.getHours();
        newDate.setHours(hours - offset);
        return newDate;
    },
    // Parses a float to the specified precision and removes trailing zeros
    ParseFloatNoZeros: function (value, precision) {
        if (isNaN(value)) {
            return value;
        }
        var nVal = parseFloat(value);
        var fVal = nVal.toFixed(precision);
        var tVal = fVal.replace(/^0+|0+$/g, JsUtil.EmptyString);
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
        parts[0] = parts[0].replace(/,/g, JsUtil.EmptyString);
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        return parts.join(".");
    },
    ParseFloatWithoutCommas: function (value) {
        var parts = value.toString().split(".");
        parts[0] = parts[0].replace(/,/g, JsUtil.EmptyString);
        return parts.join(".");
    },
    // Reloads the currrent window
    RefreshPage: function () {
        window.location.reload(true);
    },
    // Replaces all of the occurences with the replacement
    ReplaceAll: function (target, value, replacement) {
        return target.replace(new RegExp(value, 'g'), replacement);
    },
    // Returns the characters to the right of the length
    Right: function (value, length) {
        if (length <= 0) {
            return JsUtil.EmptyString;
        }
        else if (length > String(value).length) {
            return value;
        }
        else {
            var len = String(value).length;
            return String(value).substring(len, Math.abs(len - length));
        }
    },
    ScrollTo: function (x, y) {
        window.scroll(x, y);
    },
    ScrollToTopOfPage: function () {
        window.scroll(0, 0);
    },
    Ticks: function (dateTime) {
        var ticks = 0;
        var date = new Date(dateTime);
        ticks = ((date.getTime() * 10000) + 621355968000000000);
        return ticks;
    },
    WebMethodDelete: "DELETE",
    WebMethodGet: "GET",
    WebMethodHead: "HEAD",
    WebMethodPost: "POST",
    WebMethodPut: "PUT",
    WindowPopupCenter: function (url, width, height) {
        var left = ((screen.width / 2) - (width / 2));
        var top = ((screen.height / 2) - (height / 2));
        var targetWin = window.open(url, "_blank", ('toolbar=0,location=0,directories=0,status=0,menubar=0,scrollbars=1,' +
            'resizable=1,width=' + width + ',height=' + height + ',top=' + top + ',left=' + left));
        return targetWin;
    },
    WindowPopupCenterDualScreen: function (url, title, w, h) {
        // Fixes dual-screen position 
        var dualScreenLeft = window.screenLeft != undefined ? window.screenLeft : screen.left;
        var dualScreenTop = window.screenTop != undefined ? window.screenTop : screen.top;
        var width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width;
        var height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;
        var left = ((width / 2) - (w / 2)) + dualScreenLeft;
        var top = ((height / 2) - (h / 2)) + dualScreenTop;
        var newWindow = window.open(url, title, 'toolbar=0,location=0,directories=0,status=0,menubar=0,scrollbars=1,' +
            'resizable=1, width=' + w + ', height=' + h + ', top=' + top + ', left=' + left);
        // Puts focus on the newWindow
        if (window.focus) {
            newWindow.focus();
        }
    }
};