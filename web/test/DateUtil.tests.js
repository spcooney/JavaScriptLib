// GetQuarterStr
describe("DateUtil.Core.GetQuarterStr", function () {
    it("should equal", function () {
        var dtQ1 = new Date(2017, 02, 10, 0, 0, 0, 0);
        var dtQ2 = new Date(2017, 05, 10, 0, 0, 0, 0);
        var dtQ3 = new Date(2017, 09, 10, 0, 0, 0, 0);
        var dtQ4 = new Date(2017, 11, 10, 0, 0, 0, 0);
        var resultQ1 = DateUtil.Core.GetQuarterStr(dtQ1, false);
        var resultQ2 = DateUtil.Core.GetQuarterStr(dtQ2, false);
        var resultQ3 = DateUtil.Core.GetQuarterStr(dtQ3, false);
        var resultQ4 = DateUtil.Core.GetQuarterStr(dtQ4, false);
        expect(resultQ1).toBe("Q1");
        expect(resultQ2).toBe("Q2");
        expect(resultQ3).toBe("Q3");
        expect(resultQ4).toBe("Q4");
    });
});
// ParseHoursAndMins
describe("DateUtil.Core.ParseHoursAndMins", function () {
    it("should equal", function () {
        var dtQ1 = "01";
        var dtQ2 = "0102";
        var dtQ3 = "0";
        var dtQ4 = "123";
        var resultQ1 = DateUtil.Core.ParseHoursAndMins(dtQ1);
        var resultQ2 = DateUtil.Core.ParseHoursAndMins(dtQ2);
        var resultQ3 = DateUtil.Core.ParseHoursAndMins(dtQ3);
        var resultQ4 = DateUtil.Core.ParseHoursAndMins(dtQ4);
        expect(resultQ1).toBe("01:00");
        expect(resultQ2).toBe("01:02");
        expect(resultQ3).toBe("00:00");
        expect(resultQ4).toBe("01:23");
    });
});
// ParseHour
describe("DateUtil.Core.ParseHour", function () {
    it("should equal", function () {
        var dtQ1 = null;
        var dtQ2 = "05";
        var dtQ3 = "0";
        var resultQ1 = DateUtil.Core.ParseHour(dtQ1);
        var resultQ2 = DateUtil.Core.ParseHour(dtQ2);
        var resultQ3 = DateUtil.Core.ParseHour(dtQ3);
        expect(resultQ1).toBe("");
        expect(resultQ2).toBe("05");
        expect(resultQ3).toBe("00");
    });
});