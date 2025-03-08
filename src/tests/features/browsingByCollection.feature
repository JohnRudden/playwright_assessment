Feature: Browsing by Collection

  As a user I want ot be able to browser a collection using the Name A-Z content block

  Scenario Outline: Browse by Collection Name
    Given the user is on the "homepage" page of the Quartex Published Site
    When the user selects the menu option "<Menu>" using a "<inputDevice>"
    Examples:
      |Menu                     | inputDevice |
      |Explore the Collections  | keyboard    |
      |Explore the Collections  | mouse       |