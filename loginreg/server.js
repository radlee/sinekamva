const express = require('express');
const cors = require('cors');

const app = express();

const corsOptions = {
    origin: "http://localhost:8082/"
};

app.use(cors(corsOptions));

//parse reqs of content-type -  application/json
app.use(express.json());

//parse reqs of content-type -  application/x-www-form-urlencoded
app.use(express.urlencoded({ extened:  false }));

let Users = require('./routes/Users');
let Projects = require('./routes/Projects');

app.use('/users', Users);
app.use('/projects', Projects);

const port = process.env.PORT || 5007;

app.listen(port, () => {
    console.log(`Server is running on PORT: ${port}`);
})