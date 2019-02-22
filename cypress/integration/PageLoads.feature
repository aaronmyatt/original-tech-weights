Feature: The page loads

  I want to sanity check that this test even runs

  @focus
  Scenario: Loads home page
    Given I open the home page
    Then I see 'Tech Weights' in the title