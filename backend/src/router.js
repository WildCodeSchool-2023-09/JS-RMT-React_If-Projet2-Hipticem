const express = require("express");
const client = require("../database/client");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import itemControllers module for handling item-related operations
// const itemControllers = require("./controllers/itemControllers");

// Route to get a list of items
// router.get("/items", itemControllers.browse);

// Route to get a specific item by ID
// router.get("/items/:id", itemControllers.read);

// Route to add a new item
// router.post("/items", itemControllers.add);

router.get("/articles", (req, res) => {
  let query = "SELECT * FROM article";
  const values = [];
  if (req.query.author) {
    query += " WHERE author = ?";
    values.push(req.query.author);
  }

  if (req.query.archive) {
    query += ` ${query.includes("WHERE") ? "AND" : "WHERE"} publishedAt = ?`;
    values.push(req.query.archive);
  }
  query += " LIMIT 6";

  client
    .query(query, values)
    .then((result) => {
      res.status(200).json(result[0]);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
});

router.get("/article/:id", (req, res) => {
  const articleId = +req.params.id;
  client
    .query("SELECT * FROM article where id = ?", [articleId])
    .then((result) => {
      if (result[0].length === 0) {
        res.status(404).send("Article not found");
      } else {
        res.status(200).json(result[0][0]);
      }
    })
    .catch((error) => {
      console.error(error);
      res.sendStatus(500);
    });
});
router.get("/authors", (req, res) => {
  client
    .query("SELECT distinct(author) from article")
    .then((result) => {
      res.status(200).json(result[0]);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
});

router.get("/archives", (req, res) => {
  client
    .query("SELECT distinct(publishedAt) from article")
    .then((result) => {
      res.status(200).json(result[0]);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
});

/* ************************************************************************* */

module.exports = router;
