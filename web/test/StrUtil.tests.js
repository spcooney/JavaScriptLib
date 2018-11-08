// CharCount
describe("StrUtil.Core.CharCount", function () {
    it("should equal", function () {
        var rs1 = StrUtil.Core.CharCount("This is not null", "i");
        var rs2 = StrUtil.Core.CharCount("This", "i");
        var rs3 = StrUtil.Core.CharCount("", "i");
        expect(rs1).toBe(2);
        expect(rs2).toBe(1);
        expect(rs3).toBe(0);
    });
});
// IsString
describe("StrUtil.Core.IsString", function () {
    it("should equal", function () {
        var result = StrUtil.Core.IsString("This is not null");
        expect(result).toBe(true);
    });
});
// IsNull
describe("StrUtil.Core.IsNull", function () {
    it("should equal", function () {
        var undVar = undefined;
        var nullVar = null;
        var undResult = StrUtil.Core.IsNull(undVar);
        var nullResult = StrUtil.Core.IsNull(nullVar);
        var notNullResult = StrUtil.Core.IsNull("This is not null");
        expect(undResult).toBe(true);
        expect(nullResult).toBe(true);
        expect(notNullResult).toBe(false);
    });
});
// IsNotNull
describe("StrUtil.Core.IsNotNull", function () {
    it("should equal", function () {
        var undVar = undefined;
        var nullVar = null;
        var undResult = StrUtil.Core.IsNotNull(undVar);
        var nullResult = StrUtil.Core.IsNotNull(nullVar);
        var notNullResult = StrUtil.Core.IsNotNull("This is not null");
        expect(undResult).toBe(false);
        expect(nullResult).toBe(false);
        expect(notNullResult).toBe(true);
    });
});
// IsNullOrEmpty
describe("StrUtil.Core.IsNullOrEmpty", function () {
    it("should equal", function () {
        var undVar = undefined;
        var nullVar = null;
        var undResult = StrUtil.Core.IsNullOrEmpty(undVar);
        var nullResult = StrUtil.Core.IsNullOrEmpty(nullVar);
        var notNullResult = StrUtil.Core.IsNullOrEmpty("This is not null");
        expect(undResult).toBe(true);
        expect(nullResult).toBe(true);
        expect(notNullResult).toBe(false);
    });
});
// IsNotNullOrEmpty
describe("StrUtil.Core.IsNotNullOrEmpty", function () {
    it("should equal", function () {
        var undVar = undefined;
        var nullVar = null;
        var undResult = StrUtil.Core.IsNotNullOrEmpty(undVar);
        var nullResult = StrUtil.Core.IsNotNullOrEmpty(nullVar);
        var notNullResult = StrUtil.Core.IsNotNullOrEmpty("This is not null");
        expect(undResult).toBe(false);
        expect(nullResult).toBe(false);
        expect(notNullResult).toBe(true);
    });
});
// Left
describe("StrUtil.Core.Left", function () {
    it("should equal", function () {
        var result = StrUtil.Core.Left("123456789", 3);       
        expect(result).toBe("123");
    });
});
// Right
describe("StrUtil.Core.Right", function () {
    it("should equal", function () {
        var result = StrUtil.Core.Right("123456789", 3);
        expect(result).toBe("789");
    });
});
// ReplaceAll
describe("StrUtil.Core.ReplaceAll", function () {
    it("should equal", function () {
        var result = StrUtil.Core.ReplaceAll("12345678912341", "1", "");
        var secResult = StrUtil.Core.ReplaceAll("a test of a string", "a", "");
        var noItems = StrUtil.Core.ReplaceAll("12345678912341", "0", "");
        expect(result).toBe("23456789234");
        expect(secResult).toBe(" test of  string");
        expect(noItems).toBe("12345678912341");
    });
});
// RemoveSingleQuotes
describe("StrUtil.Core.RemoveSingleQuotes", function () {
    it("should equal", function () {
        var result1 = StrUtil.Core.RemoveSingleQuotes("'12345678912341'");
        var result2 = StrUtil.Core.RemoveSingleQuotes("'1234912341'");
        expect(result1).toBe("12345678912341");
        expect(result2).toBe("1234912341");
    });
});