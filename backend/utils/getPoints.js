const getPoints = (cat, sub) => {
  let points = 0;
  if (cat == "Technical") {
    switch (sub) {
      case "Event Participation":
        points = 100;
        break;
      case "NPTEL":
        points = 50;
        break;
      case "Hackathon":
        points = 50;
        break;
      case "Workshop/Seminar":
        points = 30;
        break;
      case "Other":
        points = 20;
        break;
      default:
        points = 20;
    }
  } else if (cat == "Non Technical") {
    switch (sub) {
      case "Sports":
        points = 50;
        break;
      case "Art/Dance/Music":
        points = 50;
        break;
      case "Language":
        points = 50;
        break;
      case "Other":
        points = 50;
        break;
      default:
        points = 50;
    }
  }
  return points;
};
module.exports = getPoints;
