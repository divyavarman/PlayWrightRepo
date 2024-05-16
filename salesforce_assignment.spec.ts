//Required imports
import {chromium,test } from "@playwright/test";

//Creating a test function
test("Test to print the title and url of the web page using Playwright", async() =>
{
    //Creating browser instance
    const browser = await chromium.launch({headless:false}); 

    //Creating browser context for the above browser instance
    const browserContext = await browser.newContext(); 

    //Creating a page for the above browser context
    const page = await browserContext.newPage();
    
    //Navigating to the Salesforce URL
    await page.goto("https://login.salesforce.com/")

    //Identify the Username element and Enter username - divyam@testleaf.com
    await page.locator('#username').fill("divyam@testleaf.com")

    //Identify the Password element and Enter password - Divya@22
    await page.locator('#password').fill("Divya@22")

    //Identify the Login element and click it
    await page.locator('#Login').click();

    //Wait for 10 seconds
    await page.waitForTimeout(10000)

    //Get the page title
    let page_title = await page.title()

    //Get the current url
    let url=page.url()

    //Print the Page title and current url
    console.log(`The page title is ${page_title} and the current url is ${url}`)

    //Close the browser
    await page.close();

})