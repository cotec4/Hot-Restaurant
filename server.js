// Dependencies
// =============================================================
const express = require("express");
const path = require("path");

// Sets up the Express App
// =============================================================
const app = express();
const PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Data


// Routes
// api routes
require("./routes/htmlRoutes")(app);

app.listen(PORT, () => {
  console.log("App listening on http://localhost:"+ PORT)
  console.log(__dirname)
})

// Basic route that sends the user first to the AJAX Page
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/public/home.html"));
  });
  
  app.get("/tables", (req, res) => {
    res.sendFile(path.join(__dirname, "/public/tables.html"));
  });
  
  app.get("/reserve", (req, res) => {
    res.sendFile(path.join(__dirname, "/public/reserve.html"));
  });