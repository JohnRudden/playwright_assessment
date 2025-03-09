Feature: Browsing by Collection

  As a user I want ot be able to browser a collection using the Name A-Z content block

  Scenario Outline: Browse by Collection Name
    Given the user is on the "homepage" page of the Quartex Published Site
    When the user selects the menu option "<Menu>" using a "<inputDevice>"
    And the user selects a letter "<Letter>" to browse using a "<inputDevice>"
    Then the page is scrolled to display all collections with the chosen "<Letter>"
    And the expect "<Collection>" is displayed
    Examples:
      |Menu                     | inputDevice   | Letter  | Collection   |
      |Explore the Collections  | keyboard      | W       |War & Conflict|
      |Explore the Collections  | mouse         | W       |War & Conflict|