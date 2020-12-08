Feature: Login

  I want to login to the ParaBank
  
  Scenario: To ParaBank
    Given I open ParaBank
    When I enter UserName and Password
    And I click on Submit
   # Then I should see my Dashboard

  Scenario: Get User Details via API
    When I request User Details
    Then I should receive them 