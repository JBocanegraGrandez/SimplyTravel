const mongoose = require('mongoose');
const express = require("express");
const app = express();
const port = process.env.Port || 5000;
const users = require("./routes/api/users")
const events = require("./routes/api/events")
const bodyParser = require('body-parser');
const db = require('./config/keys').mongoURI;
const passport = require('passport');
require('./config/passport')(passport);


app.use(passport.initialize());

app.get("/", (req, res) => res.send('Hello World'));
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());


app.use("/api/users", users);
app.use("/api/events", events);


mongoose
    .connect(db)
    .then(() => console.log("Connected to MongoDB successfully"))
    .catch(err => console.log(err));

app.listen(port, () => console.log(`Server is running on port ${port}`));