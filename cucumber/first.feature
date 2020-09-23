Feature: Application launch

   this is just to launch the web Application
   Scenario: Step 1
    When I navigate to calcular url
    Then it should be navigated successfully
    When i enter first value
    And second value
    And click on button
    Then calculation should be happened
