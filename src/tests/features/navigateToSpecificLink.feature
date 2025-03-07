Feature: Navigate to a specific link from a Timeline Content Block

  As a user I want to be able to navigate to a specific link from a Timeline Content Block using either a keyboard or mouse

  Scenario Outline: Navigate to a specific timeline block using the keyboard
    Given the user is on the "homepage" of the Quartex Published Site
    And the user has navigated to the menu option <Timeline content block> using a <inputDevice>
    When the user navigates to a <timeline item> using a <inputDevice>
    And the user selects the link <link> using a <inputDevice>
    Then the correct <web page> is launched in a new tab



