class HockeyTeam {
  constructor(name, hometown, country, league) {
    this.name = name;
    this.hometown = hometown;
    this.country = country;
    this.league = league;
  }

  playTheGame(contender) {
    return `${this.name} plays with ${contender.name}`;
  }
}

class NhlHockeyTeam extends HockeyTeam {
  constructor(name, hometown, country, stanleyCupQuantity) {
    super(name, hometown, country, "NHL");
    this.stanleyCupQuantity = stanleyCupQuantity;
    this.youngPlayers = [];
  }

  playTheGame(contender, isHomeGame) {
    return isHomeGame
      ? `${this.name} (${this.stanleyCupQuantity}) will play with ${contender.name} (${contender.stanleyCupQuantity})`
      : `${this.name} (${this.stanleyCupQuantity}) will play with ${contender.name} (${contender.stanleyCupQuantity})`;
  }

  draftPlayer(youngPlayerName) {
    this.youngPlayers.push(youngPlayerName);
    console.log(this.youngPlayers.join(", "));
  }
}

const team1 = new NhlHockeyTeam("Colorado Avalanche", "Denver", "USA", 3);
const team2 = new NhlHockeyTeam("Golden Knights", "Las Vegas", "USA", 1);
console.log(team1.playTheGame(team2, true));
