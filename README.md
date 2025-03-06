# playwright_assessment

## Tools

**Playwright-BDD** - https://vitalets.github.io/playwright-bdd/#/ <br>
**Playwright Test** - https://github.com/microsoft/playwright <br>

## Initial assumptions -

1. Will be using Imperative style BDD
2. Will use localling running browsers - chromium, firefox and webkit
3. Config will be required for both desktop and mobile simulated devices (time permitting)
4. Will use page objects as part of fixtures
5. Test steps will be as generic as possible if appropiate to aid maintainaility and reuse
6. It would be possible to use 'decorators' for the 'Given, When, Then' steps in the page object but to simplify and aid readability will use separates steps file instead
7. Will try to leave more of the assertions within the 'Then' steps but some basic checks may be done in 'Given' setup state steps
8. Will screen shot on failure and retain video
9. Will set retires to 1 for this initial pack (no flakey tests are the optimum desired result so will use the -x and --repeat-each options when running and testing the pack)
10. Will follow best practices such as

    - testing user visible behaviour (using playwrights getBy locators where possible)
    - isolated tests
    - Using web first assertions which will autowait

11. There will be cases where I will have two simlar steps - such as the search box in the header or main page but will try and refine this down to options in one step (time permitting)
12. An assumtion has been made, for the naviation check success assertion that most of the pages will have a H1 heading for the partiular topic (except for Home page)
13. Assuming Prettier and linting are out of scope due to time
