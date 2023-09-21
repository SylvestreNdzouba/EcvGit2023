const ScoreboardComputer = require('./lib/ScoreboardComputer');
const sc = new ScoreboardComputer();
sc.loadSeason("2020" ,  "./seasons");
sc.computeScores();
console.table(sc.getTeamByRank(6));


