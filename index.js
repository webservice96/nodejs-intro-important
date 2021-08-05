const express = require('express');
const app = express();
const routes = require('./routes');
// create a folder for public
app.use(express.static('public'));

// fixed dummy token
const dummyToken = "mytoken123";

// midlewere
app.use("/api", (req, res, next) => {
    let token = req.header('token');
    if (!token) {
        return res.json({
            message: "User not authorized."
        }).status(401);
    } else {
        if (dummyToken === token) {
            return next();
        } else {
            return res.json({
                message: "Your given token mismath."
            }).status(401);
        }
    }
});

routes(app);
app.listen(4040);