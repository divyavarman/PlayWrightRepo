// var vs let vs const

const browserVersionGlobal = 'Chrome' //Global Variable

function getBrowserVersion(browserVersionArg) {
    let browserVersion = 17.1
    if (browserVersionArg == 'Chrome') {
        var blockVariable = "Inside if block"
        console.log("Accessing the functiona variable inside block: " + browserVersion, browserVersionGlobal)
    }
    else {
        console.log("Trying to access the if block variable in else block: " + blockVariable) // Reference error (on using let/const) & undefined on using var
        console.log("Trying to access the if function variable in else block: " + browserVersion) //Able to access
        console.log("Trying to access the if global variable in else block: " + browserVersionGlobal) //Able to access
    }
}
getBrowserVersion(browserVersionGlobal)