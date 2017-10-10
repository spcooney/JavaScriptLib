// GetQuarterStr
describe("JsUtil.GetQuarterStr", function () {
    it("should equal", function () {
        var dtQ1 = new Date(2017, 02, 10, 0, 0, 0, 0);
        var dtQ2 = new Date(2017, 05, 10, 0, 0, 0, 0);
        var dtQ3 = new Date(2017, 09, 10, 0, 0, 0, 0);
        var dtQ4 = new Date(2017, 11, 10, 0, 0, 0, 0);
        var resultQ1 = JsUtil.GetQuarterStr(dtQ1, false);
        var resultQ2 = JsUtil.GetQuarterStr(dtQ2, false);
        var resultQ3 = JsUtil.GetQuarterStr(dtQ3, false);
        var resultQ4 = JsUtil.GetQuarterStr(dtQ4, false);
        expect(resultQ1).toBe("Q1");
        expect(resultQ2).toBe("Q2");
        expect(resultQ3).toBe("Q3");
        expect(resultQ4).toBe("Q4");
    });
});