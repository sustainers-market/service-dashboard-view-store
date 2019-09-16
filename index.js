const lambda = require("@sustainers/lambda");

module.exports = lambda().get(async (req, res) => {
  res.send([
    {
      title: "Roof",
      requestTitle: req.query.title,
      people: ["Joao"],
      sideButtons: [{ title: "Do that" }, { title: "Do this" }]
    }
  ]);
});
