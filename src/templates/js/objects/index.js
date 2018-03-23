const { css, id, xpath } = require("@testx/objects-standard");

module.exports = {
  searchBox: id("lst-ib"),
  googleSearchForm: css("form.tsf"),
  resultLink: title =>
    xpath(`(//h3[contains(@class, 'r')]//a[contains(., '${title}')])[1]`)
};
