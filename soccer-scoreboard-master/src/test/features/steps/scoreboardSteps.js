const { Given , When, Then } = require('@cucumber/cucumber');
const assert = require('assert');
const ScoreboardComputer = require('../../../lib/ScoreboardComputer');

let scoreboardComputer = new ScoreboardComputer();
let team = null;
let dataDir = './seasons';

//@todo add missing test step(s)

        //Scenario 1 : The leader

         /*Given('I load scores from season {int}', function (int) {
            return scoreboardComputer.loadSeason(int, dataDir);
         // Given('I load scores from season {float}', function (float) {
           // Write code here that turns the phrase above into concrete actions
         });

         When('I request who\'s the leader', function () {
           // Write code here that turns the phrase above into concrete actions
              team = scoreboardComputer.getLeader();
           return team;
         });

         Then('the team name should be {string}', function (string) {
           // Write code here that turns the phrase above into concrete actions
           return assert.equal(team.name, string);
         });*/




         //Scenario 2 : The last team 
  
           /*Given('I load scores from season {int}', function (int) {
           // Given('I load scores from season {float}', function (float) {
             // Write code here that turns the phrase above into concrete actions
                return scoreboardComputer.loadSeason(int, dataDir);
           });
  
           When('I request who\'s the last team', function () {
             // Write code here that turns the phrase above into concrete actions
                team = scoreboardComputer.getLastTeam();
                return team;
           });
  
           Then('the team name should be {string}', function (string) {
             // Write code here that turns the phrase above into concrete actions
                return assert.equal(team.name, string);
           });*/
           
           

        //Scenario 3 : Getting one team's rank

         Given('I load scores from season {int}', function (int) {
         // Given('I load scores from season {float}', function (float) {
           // Write code here that turns the phrase above into concrete actions
           return scoreboardComputer.loadSeason(int, dataDir);
         });

         When('I request who\'s at rank {int}', function (int) {
         // When('I request who\'s at rank {float}', function (float) {
           // Write code here that turns the phrase above into concrete actions
            team = scoreboardComputer.getTeamByRank(int);
            return team;
         });

         Then('the team name should be {string}', function (string) {
           // Write code here that turns the phrase above into concrete actions
            return assert.equal(team.name, string);
         });


