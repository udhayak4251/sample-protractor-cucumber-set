/*
Basic configuration to run your cucumber
feature files and step definitions with protractor.
**/
exports.config = {

    //seleniumAddress: 'http://localhost:4444/wd/hub',

    //baseUrl: 'https://angularjs.org/',
    directConnect: true,
    capabilities: {
        browserName: 'chrome'
    },

    framework: 'custom',  // set to "custom" instead of cucumber.

    frameworkPath: require.resolve('protractor-cucumber-framework'),  // path relative to the current config file
    allScriptsTimeout: 150000,
    getPageTimeout: 150000,
    specs: [
        './cucumber/*.feature'     // Specs here are the cucumber feature files
    ],

    // cucumber command line options
    cucumberOpts: {
        require: ['./cucumber/*.js'],  // require step definition files before executing features
        tags: [],                      // <string[]> (expression) only execute the features or scenarios with tags matching the expression
        strict: true,                  // <boolean> fail if there are any undefined or pending steps
        format: [],            // <string[]> (type[:path]) specify the output format, optionally supply PATH to redirect formatter output (repeatable)
        'dry-run': false,              // <boolean> invoke formatters without executing steps
        compiler: []                   // <string[]> ("extension:module") require files with the given EXTENSION after requiring MODULE (repeatable)
    },

    onPrepare:async function () {
        browser.manage().window().maximize(); // maximize the browser before executing the feature files
        browser.get("https://juliemr.github.io/protractor-demo/");
        await browser.sleep(5000);
    
    }
};