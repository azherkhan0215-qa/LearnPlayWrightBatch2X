using Microsoft.Playwright;

namespace PlaywrightTests;

[TestClass]
public class ExampleDotnetTests
{
    private IPage _page;

    [SetUp]
    public async Task Setup()
    {
        var playwright = await Playwright.CreateAsync();
        _page = await playwright.Chromium.LaunchAsync(new BrowserLaunchOptions { Headless = true })
            .ThenAsync(browser => browser.NewPageAsync());
    }

    [TearDown]
    public async Task TearDown()
    {
        await _page.CloseAsync();
    }

    [TestMethod]
    public async Task VerifyTitleWillBeTTACart()
    {
        await _page.GotoAsync("https://app.thetestingacademy.com/playwright/ttcart/");
        await _page.WaitForTimeoutAsync(5000);
    }
}