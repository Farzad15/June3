$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("mct_myacccount.feature");
formatter.feature({
  "line": 1,
  "name": "My Account",
  "description": "",
  "id": "my-account",
  "keyword": "Feature"
});
formatter.background({
  "line": 4,
  "name": "Langing on MCT Page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I open browser chrome",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I land on multicart landing page",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I complete login with James valid credentails",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I navigate to my account page",
  "keyword": "And "
});
formatter.match({
  "location": "mct_login_steps.i_open_browser_chrome()"
});
formatter.result({
  "duration": 3995073910,
  "status": "passed"
});
formatter.match({
  "location": "mct_login_steps.i_land_on_multicart_landing_page()"
});
formatter.result({
  "duration": 2276015637,
  "status": "passed"
});
formatter.match({
  "location": "mct_login_steps.i_complete_login_with_James_valid_credentails()"
});
formatter.result({
  "duration": 3297955433,
  "status": "passed"
});
formatter.match({
  "location": "mct_login_steps.I_navigate_to_my_account_page()"
});
formatter.result({
  "duration": 1751352699,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Can be navigate to all options pages",
  "description": "",
  "id": "my-account;can-be-navigate-to-all-options-pages",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 22,
      "name": "@WIP"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "I expect all options links are working",
  "keyword": "Then "
});
formatter.match({
  "location": "mct_login_steps.I_expect_all_options_links_are_working()"
});
formatter.result({
  "duration": 10038856921,
  "status": "passed"
});
formatter.after({
  "duration": 262899610,
  "status": "passed"
});
});