const express = require("express");
const asyncHandler = require("express-async-handler");
const app = express();

const logger = require("@sustainers/logger");
const errorMiddleware = require("@sustainers/error-middleware");
const expressMiddleware = require("@sustainers/express-middleware");

expressMiddleware(app);

app.use((req, _, next) => {
  logger.info("Request: ", {
    params: req.params,
    body: req.body,
    query: req.query,
    headers: req.headers
  });
  next();
});

app.get(
  "/",
  asyncHandler(async (req, res) => {
    res.send([
      {
        title: "Roof",
        requestTitle: req.query.title,
        people: ["Joao", "Tyler"],
        sideButtons: [{ title: "Do this" }, { title: "Do that" }]
      }
    ]);
  })
);

app.use(errorMiddleware);
module.exports = app;
