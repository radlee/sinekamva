const express = require('express');
const projects = express.Router()
const cors = require('cors');

const Project = require("../models/Project");
projects.use(cors());

projects.post('/create', (req, res) => {
    const today = new Date();
    const projectData = {
        username: req.body.username,
        projectname: req.body.projectname,
        description: req.body.description,
        donation: req.body.donation,
        created_at: today,
    }

    console.log("Projects :: Routes :: ", projectData)

    Project.findOne({
        where: {
            projectname: req.body.projectname
        }
    })
    .then(project => {
        if(!project) {
           
            Project.create(projectData)
            .then(project => {
                res.json({status: `${project.projectname} has just been Created!`})
            })
            .catch(err => {
                res.send('error: ' + err)
            })
        
        } else {
            res.json({ error: "Project already exist." })
        }
    })
    .catch(err => {
        res.send('error: ' + err)
    })
})

module.exports = projects;