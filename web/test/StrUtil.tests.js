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