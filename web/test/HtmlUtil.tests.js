// IsString
describe("HtmlUtil.Core.DecodeUrl", function () {
    it("should equal", function () {
        var result = HtmlUtil.Core.DecodeUrl("https://www.google.com?p=S%26P");
        expect(result).toBe("https://www.google.com?p=S&P");
    });
});