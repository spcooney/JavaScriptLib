describe("StrUtil.Core.IsNull", function () {
    it("should equal", function () {
        var result = StrUtil.Core.IsNull(null);
        expect(result).toBe(true);
    });
});