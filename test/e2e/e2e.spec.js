const chai = require("chai");
chai.use(require("chai-generator"));
const expect = chai.expect;

var testConnect = require("./connectEngine.test.js");
var testGlobal = require("./global.test.js");
const testDoc = require("./doc.test.js");
const testGenericObject = require("./genericObject.test.js");

describe("Engine E2E test", function() {

    testConnect();
    testGlobal();
    testDoc();
    testGenericObject();
    
});