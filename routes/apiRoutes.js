const path = require("path");

module.exports = app => {
    app.get("/api/tables", (req, res) => {
        res.sendFile(path.join(__dirname, "../data/table.js"));
    });  

    app.get("/api/waitlist", (req, res) => {
        res.sendFile(path.join(__dirname, "../data/WaiteListData.js"));
    });  

}