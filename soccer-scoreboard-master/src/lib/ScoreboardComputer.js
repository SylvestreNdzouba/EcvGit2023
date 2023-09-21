var fs = require('fs');

const ScoreboardComputer = class {

    loadSeason(year, dataDir) {
        let rawdata = fs.readFileSync(dataDir + '/' + year + '.json');
        this.games = JSON.parse(rawdata);
        //console.log(this.games);
        this.scoreboard = [];
        this.computeScores();
    }

    getScoreboard(){
        return this.scoreboard;
    }

    getLeader() {
        return this.scoreboard[0];
    }

    getLastTeam() {
        //@todo return last team
        return this.scoreboard[this.scoreboard.length - 1];

    }

    getTeamByRank(rank) {
        //@todo return rank for a given team
        return this.scoreboard[rank - 1];

    }

    computeScores() {
        //@todo process all games and sort scoreboard
        this.games.forEach(game => {
            this.processGame(game);
        }
        );

        this.scoreboard.sort();
    }

    processGame(game) {
        //@todo get and assign points for a given game
        this.scoreboard.push(game);
    }


};

module.exports = ScoreboardComputer;
