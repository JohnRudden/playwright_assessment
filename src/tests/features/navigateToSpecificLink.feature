Feature: Navigate to a specific link from a Timeline Content Block

  As a user I want to be able to navigate to a specific link from a Timeline Content Block using either a keyboard or mouse

  Scenario Outline: Navigate to a specific timeline block using the <inputDevice>
    Given the user is on the "homepage" page of the Quartex Published Site
    When the user selects the "top" level menu option "<Menu>" using a "<inputDevice>"
    And the user selects the "sub" level menu option "<Menu Option>" using a "<inputDevice>"
    When the user scrolls to a "<Timeline Item>" using a "<inputDevice>"
    And the user selects the link "<Link>" using a "<inputDevice>"
    Then the correct web page "<Web Page is Launched>" is launched in a new tab
      Examples:
      |Menu          |Menu Option                   |inputDevice|Timeline Item|Link                           |Web Page is Launched                                                                                                      |
      |Discovery Aids|The Brownings: A Brief History|keyboard   |1845         |one of their first love letters|https://demo.quartexcollections.com/Documents/Detail/10-january-1845.-browning-robert-to-browning-elizabeth-barrett./36113|
 #     |Discovery Aids|The Brownings: A Brief History|mouse      |1845         |one of their first love letters|https://demo.quartexcollections.com/Documents/Detail/10-january-1845.-browning-robert-to-browning-elizabeth-barrett./36113|




