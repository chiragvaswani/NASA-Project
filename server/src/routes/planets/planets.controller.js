const planets = require("../../models/planets.models");

function getAllPlanets(req, res) {
  res.status(200).json(planets);
}

module.exports = {
  getAllPlanets,
};
