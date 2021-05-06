// Require Libraries
const express = require('express');

// App Setup
const app = express();

// Middleware

// Routes

// Start Server



app.use(express.static('public'));
  // app.js
  // Require Libraries

  app.get('/', (req, res) => {
    // Handle the home page when we haven't queried yet
    term = ""
    if (req.query.term) {
        term = req.query.term
    }
    // Tenor.search.Query("SEARCH KEYWORD HERE", "LIMIT HERE")
    // Tenor.Search.Query(term, "10")
    //     .then(response => {
    //         // store the gifs we get back from the search
    //         const gifs = response;
    //         // pass the gifs as an object into the home page
    //         res.render('home', { gifs })
    //     }).catch(console.error)
  })

  app.listen(3000, () => {
    console.log('Gif Search listening on port localhost:3000!');
  });