const NhlHockeyTeam = {
  name: "Name",
  hometown: "Town",
  stanleyCupQuantity: 0,
  anyProperty: 1,
  playTheGame(contender, isHomeGame) {
    return isHomeGame
      ? `${this.name} (${this.stanleyCupQuantity}) will play with ${contender.name} (${contender.stanleyCupQuantity})`
      : `${this.name} (${this.stanleyCupQuantity}) will play with ${contender.name} (${contender.stanleyCupQuantity})`;
  },
};

const team1 = {
  name: "Carolina Hurricanes",
  hometown: "Raleigh",
  stanleyCupQuantity: 1,
};

const team2 = {
  name: "Golden Knights",
  hometown: "Las Vegas",
  stanleyCupQuantity: 1,
};

Object.setPrototypeOf(team1, NhlHockeyTeam);
console.log(team2.playTheGame(team1, true));
