const express = require('express');
const cors = require('cors');

const app = express();

const corsOptions = {
    origin: "http://localhost:5000/api"
};

app.use(cors(corsOptions));

//parse reqs of content-type -  application/json
app.use(express.json());

//parse reqs of content-type -  application/x-www-form-urlencoded
app.use(express.urlencoded({ extened:  true }));

const db = require('./app/models');

db.sequelize.sync();

app.get("/", (req, res) => {
    res.json({message: "Welcome"});
});

var projects = require('./app/routes/project.routes')
// var users = require('./app/routes/user.routes');

app.use('/projects', projects);
// app.use('/users', users)

const port = process.env.PORT || 5007;
app.listen(port, () => {
    console.log(`Server is running on PORT: ${port}`);
})