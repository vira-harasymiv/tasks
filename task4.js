const team1 = {
  name: "Carolina Hurricanes",
  hometown: "Raleigh",
  stanleyCupQuantity: 1,
  headCoach: "John Doe",
};

const team1Coaches = {
  headCoach: "Rod Brind Amour",
  assistantCoaches: ["Jeff Daniels", "Tim Gleason"],
  goalTendingCoach: "Paul Schonfelder",
  videoCoach: "Chris Huffine",
  videoCoordinator: "John Stanier",
};

Object.assign(team1, team1Coaches);
console.log(team1.headCoach);
