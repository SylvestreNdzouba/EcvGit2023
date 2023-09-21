Feature: Getting scoreboard based on season games

  Scenario: The leader
    Given I load scores from season 2020
    When I request who's the leader
    Then the team name should be "Lille"

  Scenario: The last team
    Given I load scores from season 2020
    When I request who's the last team
    Then the team name should be "Dijon"

  Scenario: Getting one team's rank
    Given I load scores from season 2020
    When I request who's at rank 6
    Then the team name should be "Marseille"



