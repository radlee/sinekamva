module.exports = app => {
    
    const projects = require("../controllers/project.controller.js");

    var router = require("express").Router();

    //Create a new Project
    router.post("/", projects.create);

    //Get all Projects
    router.get("/", projects.fetchAll);

    //Get all Published/On Projects
    router.get("/published", projects.findAllPublished);

    //Get Project By id
    router.get("/:id", projects.findOne);

    //Update a Project by id
    router.put("/:id", projects.update);

    //Delete a Project by id
    router.delete("/:id", projects.delete);

    //Delete all Projects
    router.delete("/", projects.deleteAll);

    app.use('/api/projects', router);
};