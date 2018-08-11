var path = require("path");

module.exports = function (app) {

    app.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname, "./public/survey.html"));
    });
    app.get("/style", function (req, res) {
        res.sendFile(path.join(__dirname, "./public/style.css"));
        console.log("css called");
    });
    app.get("/public/background.jpg", function (req, res) {
        res.sendFile(path.join(__dirname, "./public/background.jpg"));
        console.log("background called");
    });
    // If no matching route is found default to home
    app.get("*", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });

};
