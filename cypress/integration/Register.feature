Feature:  Registration

    Scenario: Register to Parabank
      Given I open Registration Link
      When I fill in registration details
      And I click on Register Button
      #Then I should see Welcome message