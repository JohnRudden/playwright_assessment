Feature: Navigate to a specific link from a Timeline Content Block

  As a user I want to be able to navigate to a specific link from a Timeline Content Block using either a keyboard or mouse

  Scenario Outline: Navigate to a specific timeline block using the <inputDevice>
    Given the user is on the "homepage" page of the Quartex Published Site
    When the user has navigated to "<Menu>" using a "<inputDevice>"
    And the user opens menu item "<Menu>" using a "<inputDevice>"
    And the user selects the link "<Menu Option>" using a "<inputDevice>"
 #   When the user navigates to a <timeline item> using a <inputDevice>
 #   And the user selects the link <link> using a <inputDevice>
 #   Then the correct <web page> is launched in a new tab
      Examples:
      |Menu          |Menu Option                   |inputDevice|Timeline Item|Link                             |Web Page is Launched                                                                                                      |
      |Discovery Aids|The Brownings: A Brief History|keyboard   |1845         |view one of the fist love letters|https://demo.quartexcollections.com/Documents/Detail/10-january-1845.-browning-robert-to-browning-elizabeth-barrett./36113|
      |Discovery Aids|The Brownings: A Brief History|mouse      |1845         |view one of the fist love letters|https://demo.quartexcollections.com/Documents/Detail/10-january-1845.-browning-robert-to-browning-elizabeth-barrett./36113|




