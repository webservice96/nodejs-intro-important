const path = require('path');
module.exports = (app) => {

    app.get("/", (req, res) => {
        res.sendFile(path.resolve(__dirname, "./public/index.html"));
    });

    app.get("/dashboard", (req, res) => {
        res.sendFile(path.resolve(__dirname, "./public/dashboard.html"));
    });

    app.get("/api", (req, res) => {
        res.json({
            title: "Hello World"
        });
    });
}