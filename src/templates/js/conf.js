const reporters = require("@testx/reporters-jasmine");

exports.config = {
  directConnect: true,
  specs: ["spec/*"],
  capabilities: {
    browserName: "chrome",
    chromeOptions: {
      args: ["--headless", "--disable-gpu", "--window-size=1024,800"]
    }
  },
  framework: "jasmine2",
  jasmineNodeOpts: {
    silent: true,
    defaultTimeoutInterval: 300000,
    includeStackTrace: false
  },
  baseUrl: "http://google.com",
  onPrepare: () => {
    require("testx");
    testx.objects.add(require("./objects"));
    reporters();
    beforeEach(() => (browser.ignoreSynchronization = true));
  }
};
