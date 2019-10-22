
Feature:  ANTS report Stub API for DVLA

  Scenario: AC1.1 Fetch vehicle plating weight details
    Given I am an API Consumer
    And I provide a startDate and an endDate as query parameters
    When I send a GET request to AWS_CVS_DOMAIN/dvla-ants
    Then the the system returns array of vehiclePlatingWeightInfos stub data
    And the system returns an HTTP status code 200 OK