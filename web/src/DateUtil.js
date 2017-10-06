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
    }
};