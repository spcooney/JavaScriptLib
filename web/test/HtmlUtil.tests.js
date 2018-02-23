// IsString
describe("HtmlUtil.Core.DecodeUrl", function () {
    it("should equal", function () {
        var result = HtmlUtil.Core.DecodeUrl("https://www.google.com?p=S%26P");
        expect(result).toBe("https://www.google.com?p=S&P");
    });
});
describe("HtmlUtil.Core.GetPageName", function () {
    it("should equal", function () {
        var result = HtmlUtil.Core.GetPageName("https://www.google.com/testsite.aspx", true);
        expect(result).toBe("testsite.aspx");
    });
});