const team = {
    _players: [{ firstName: 'Pablo',
                 lastName: 'Sanchez',
                 age: 24},
                 {
                 firstName: 'Jonathan',
                 lastName: 'Moreno',
                 age: 27
                 },
                 {
                 firstName: 'Francisco',
                 lastName: 'Esquivias',
                 age: 26
                 }],
    _games: [{opponent: 'Broncos',
              teamPoints: 42,
              opponentPoints: 27},
             {opponent: 'Tigres',
             teamPoints: 82,
             opponentPoints: 71},
             {opponent: 'Chivas',
             teamPoints: 26,
             opponentPoints: 59}],
    get players () {
        return this._players;
    },
    get games () {
        return this._games;
    },
    addPlayer (firstName,lastName,age) {
        const player ={
            firstName,
            lastName,
            age
        };
        this._players.push(player);
    },
    addGame (opponent,teamPoints,opponentPoints) {
        const game = {
            opponent,
            teamPoints,
            opponentPoints
        };
        this._games.push(game);
    }
};

team.addPlayer('Steph','Curry',28);
team.addPlayer('Lisa','Leslie',44);
team.addPlayer('Bugs','Bunny',76);
console.log(team.players);
team.addGame('America',49,31);
team.addGame('Puebla',62,51);
team.addGame('Santos',36,41);
console.log(team.games);