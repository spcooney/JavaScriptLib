var version = "1.0.0.0",
    HtmlUtil = function () {
        return new HtmlUtil.Core.init();
    };
HtmlUtil.Core = HtmlUtil.prototype = {
    Version: version,
    Constructor: HtmlUtil,
    Clone: function (obj) {
        var retObj = arguments.callee;
        if (arguments.length === 1) {
            retObj.prototype = obj;
            return new retObj;
        }
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
        window.document.getElementsByTagName("head")[index].appendChild(HtmlUtil.Core.CreateCssLink(path));
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
        window.document.getElementsByTagName("head")[index].appendChild(HtmlUtil.Core.CreateJavaScriptHeaderLink(path));
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
        url = url.replace(/%27/g, "");
        return url;
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
    // Returns the value of a specified url parameter
    GetUrlParam: function (param) {
        var results;
        try {
            results = new RegExp('[\\?&]' + param + '=([^&#]*)').exec(window.location.href);
        }
        catch (ex) {
            results = "";
        }
        if (((results === undefined) || (results === null) || (results.length <= 0) || (results === "")))
            return "";
        else
            return (results[1] || 0);
    },
    // Reloads the currrent window
    RefreshPage: function () {
        window.location.reload(true);
    },
    ScrollTo: function (x, y) {
        window.scroll(x, y);
    },
    ScrollToTopOfPage: function () {
        window.scroll(0, 0);
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