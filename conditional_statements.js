
function launchBrowser(browserName) {
    if (browserName == 'chrome') {
        console.log("The browser which you are using is : " + browserName)
    }
    else if (browserName == 'firefox') {
        console.log("The browser which you are using is : " + browserName)
    }
    else if (browserName == 'safari') {
        console.log("The browser which you are using is : " + browserName)
    }
    else {
        console.log(browserName + " - Unsupported browser!!!")
    }

}
function runTests(testType) {
    switch (testType) {
        case 'regression':
            {
                console.log("The testing which you are performing is : " + testType)
                break
            }
        case 'smoke':
            {
                console.log("The testing which you are performing is : " + testType)
                break
            }
        case 'sanity':
            {
                console.log("The testing which you are performing is : " + testType)
                break
            }
        case 'integration':
            {
                console.log("The testing which you are performing is : " + testType)
                break
            }
        default:
            {
                console.log("You are performing the default testing : " + testType)
            }
    }
}
let test = 'smoke'
runTests(test)
let browser = 'chrome'
launchBrowser(browser)