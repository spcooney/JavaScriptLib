var version = "1.0.0.0",
    DateUtil = function () {
        return new DateUtil.Core.init();
    };
DateUtil.Core = DateUtil.prototype = {
    Version: version,
    Constructor: DateUtil,
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
    // Creates a date based on a time entry, such as 08:30
    CreateDateFromTime: function (time) {
        if ((time === undefined) || (time === null) || (time.length <= 0)) {
            return "";
        }
        var timeSplit = time.split(":");
        if ((timeSplit === undefined) || (time === null) || (timeSplit.length < 2)) {
            return "";
        }
        var t1 = timeSplit[0];
        var t2 = timeSplit[1];
        var d = new Date();
        d.setHours(t1);
        d.setMinutes(t2);
        d.setSeconds(0);
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
    // Checks if the current date is a date object
    IsDate: function (date) {
        return (Object.prototype.toString.apply(date) === "[object Date]");
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
    // Offsets the current UTC date to the local timezone
    OffsetUtcDateToLocalDate: function (date) {
        var newDate = new Date(date.getTime() + date.getTimezoneOffset() * 60 * 1000);
        var offset = (date.getTimezoneOffset() / 60);
        var hours = date.getHours();
        newDate.setHours(hours - offset);
        return newDate;
    },
    ParseHour: function (hrStr) {
        if ((hrStr === undefined) || (hrStr === null) || (hrStr.length <= 0)) {
            return "";
        }
        if (hrStr === "0") {
            return "00";
        }
        try {
            var hrs = parseInt(hrStr.substring(0, hrStr.length), 10);
            if (isNaN(hrs)) {
                hrs = "00";
            }
            else if (hrs < 10) {
                hrs = "0" + hrs;
            }
            return hrStr;
        }
        catch (e) {
            console.log(e);
        }
    },
    // Attempts to fix someone's time entry and format as the following: HH:MM
    ParseHoursAndMins: function (timeStr) {
        // If null or empty, don't bother going any further
        if ((timeStr === undefined) || (timeStr === null) || (timeStr.length <= 0)) {
            return "";
        }
        // If only 0 entered, make the entire time 00:00
        if (timeStr === "0") {
            return "00:00";
        }
        // User entered a time without a colon, so add one to the middle of the string
        if (timeStr.length === 4 && timeStr.indexOf(":") <= 0 && !isNaN(Number(timeStr))) {        
            return timeStr.substring(0, 2) + ":" + timeStr.substring(2, 4);
        }
        // User entered a time without the first 0 and no colon, so add them
        if (timeStr.length === 3 && timeStr.indexOf(":") <= 0 && !isNaN(Number(timeStr))) {
            return ("0" + timeStr.substring(0, 1) + ":" + timeStr.substring(1, 3));
        }
        // User only enetered the hour, build the string based on that
        if (timeStr.length === 1 && !isNaN(Number(timeStr))) {
            return ("0" + timeStr + ":00");
        }
        // User only entered the hour, but the hour is double digits
        if (timeStr.length === 2 && !isNaN(Number(timeStr))) {
            return (timeStr + ":00");
        }
        if (timeStr.indexOf(":") <= 0) {
            return "";
        }
        try {
            var hrs = parseInt(timeStr.substring(0, timeStr.indexOf(":")), 10);
            if (isNaN(hrs)) {
                hrs = "00";
            }
            else if (hrs < 10) {
                hrs = "0" + hrs;
            }
            var mins;
            if (timeStr.indexOf(":") < timeStr.length) {
                mins = parseInt(timeStr.substring(timeStr.indexOf(":") + 1, timeStr.length), 10);
                if (isNaN(mins)) {
                    mins = "00";
                }
                else if (mins < 10) {
                    mins = "0" + mins;
                }
            }
            return (hrs + ":" + mins);
        }
        catch (e) {
            console.log(e);
        }
    },
    Ticks: function (dateTime) {
        var ticks = 0;
        var date = new Date(dateTime);
        ticks = ((date.getTime() * 10000) + 621355968000000000);
        return ticks;
    }
};