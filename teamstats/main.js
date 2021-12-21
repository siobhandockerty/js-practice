const team = {
  _players: [
    {
  firstName: 'Pablo',
  lastName: 'Sanchez',
  age: 19
},
    {
  firstName: 'Bruno',
  lastName: 'Fernandes',
  age: 29
},
    {
  firstName: 'Cristiano',
  lastName: 'Ronaldo',
  age: 37
}
  ],
  _games: [
    {
      opponent: 'Chelsea',
      teamPoints: 42,
      opponentPoints: 27,
    },
    {
      opponent: 'Tottenham',
      teamPoints: 23,
      opponentPoints: 12,
    },
    {
      opponent: 'Arsenal',
      teamPoints: 8,
      opponentPoints: 36,
    }
  ],
  
  //Getters
  get players() { 
      return this._players},
  get games() { 
      return this._games},
  
  //Methods
  addPlayer(firstName, lastName, age) {
    let player = {
      firstName: firstName,
      lastName: lastName,
      age: age,
    };
    this._players.push(player);
  },
    addGame(opponentName, teamPoints, opponentPoints){
      const game = {
        opponent: opponentName,
        teamPoints: teamPoints,
        opponentPoints: opponentPoints,
      }
      this._games.push(game);
    }
  
};

team.addPlayer('Steph', 'Curry', 28);
team.addPlayer('Lisa', 'Leslie', 44);
team.addPlayer('Bugs', 'Bunny', 76);

console.log(team.players);

team.addGame('Watford', 50, 22)
console.log(team.games);
