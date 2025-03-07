Feature: Basic Search

  As a user I want to be able to perform a basic search within the Quartex published site and have the correct results returned

  Scenario Outline: Perform a basic search and verify the returned results
    Given the user is on the "homepage" page of the Quartex Published Site
    When the user enters the text "<Search Term>" in the basic input search box in the header
    And the search button is pressed
    Then the user is navigated to the "Browse All" page
    And the "1st" page of search results is displayed
    And the "<Asset Listed>" meets the search criteria
      Examples:
      |Search Term  |Asset Listed                                     |
      |Brown        |1 April 1875. Browning, Robert to Pollock, Lady. |
      |War          |Memoirs of a Prisoner of War                     |
      |North America|Wassaja, Feb 1918                                |