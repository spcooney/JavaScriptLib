// CalcPercentChangeFrom
describe("NumUtil.Core.CalcPercentChangeFrom", function () {
    it("should equal", function () {
        var result1 = NumUtil.Core.CalcPercentChangeFrom(1, 2, 0);
        var result2 = NumUtil.Core.CalcPercentChangeFrom(2, 4, 0);
        var result3 = NumUtil.Core.CalcPercentChangeFrom(4, 2, 0);
        expect(result1).toBe("100");
        expect(result2).toBe("100");
        expect(result3).toBe("-50");
    });
});
// NumberWithCommas
describe("NumUtil.Core.NumberWithCommas", function () {
    it("should equal", function () {
        var f1 = 4302334;
        var f2 = 453204400;
        var f3 = 892387438.3984;
        var result1 = NumUtil.Core.NumberWithCommas(f1);
        var result2 = NumUtil.Core.NumberWithCommas(f2);
        var result3 = NumUtil.Core.NumberWithCommas(f3);
        expect(result1).toBe("4,302,334");
        expect(result2).toBe("453,204,400");
        expect(result3).toBe("892,387,438.3984");
    });
});
// NumberWithoutCommas
describe("NumUtil.Core.NumberWithoutCommas", function () {
    it("should equal", function () {
        var f1 = "4,302,334";
        var f2 = "453,204,400";
        var f3 = "892,387,438.3984";
        var result1 = NumUtil.Core.NumberWithoutCommas(f1);
        var result2 = NumUtil.Core.NumberWithoutCommas(f2);
        var result3 = NumUtil.Core.NumberWithoutCommas(f3);
        expect(result1).toBe("4302334");
        expect(result2).toBe("453204400");
        expect(result3).toBe("892387438.3984");
    });
});
// ParseFloatNoZeros
describe("NumUtil.Core.ParseFloatNoZeros", function () {
    it("should equal", function () {
        var f1 = 43.02334;
        var f2 = 4532.04400;
        var f3 = "0034.219583";
        var result1 = NumUtil.Core.ParseFloatNoZeros(f1, 2);
        var result2 = NumUtil.Core.ParseFloatNoZeros(f1, 4);
        var result3 = NumUtil.Core.ParseFloatNoZeros(f2, 4);
        var result4 = NumUtil.Core.ParseFloatNoZeros(f3, 4);
        expect(result1).toBe("43.02");
        expect(result2).toBe("43.0233");
        expect(result3).toBe("4532.044");
        // Rounding causes the 5 to become a 6
        expect(result4).toBe("34.2196");
    });
});
// ParseFloatWithCommas
describe("NumUtil.Core.ParseFloatWithCommas", function () {
    it("should equal", function () {
        var f1 = 43.02334;
        var f2 = 4532.04400;
        var f3 = 87590234.3293;
        var result1 = NumUtil.Core.ParseFloatWithCommas(f1);
        var result2 = NumUtil.Core.ParseFloatWithCommas(f2);
        var result3 = NumUtil.Core.ParseFloatWithCommas(f3);
        expect(result1).toBe("43.02334");
        expect(result2).toBe("4,532.044");
        expect(result3).toBe("87,590,234.3293");
    });
});
// ParseFloatWithoutCommas
describe("NumUtil.Core.ParseFloatWithoutCommas", function () {
    it("should equal", function () {
        var f1 = 43.02334;
        var f2 = 4532.04400;
        var f3 = 87590234.3293;
        var f4 = "9,234,828.9324";
        var result1 = NumUtil.Core.ParseFloatWithoutCommas(f1);
        var result2 = NumUtil.Core.ParseFloatWithoutCommas(f2);
        var result3 = NumUtil.Core.ParseFloatWithoutCommas(f3);
        var result4 = NumUtil.Core.ParseFloatWithoutCommas(f4);
        expect(result1).toBe("43.02334");
        expect(result2).toBe("4532.044");
        expect(result3).toBe("87590234.3293");
        expect(result4).toBe("9234828.9324");
    });
});