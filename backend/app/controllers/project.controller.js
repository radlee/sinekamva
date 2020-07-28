const db = require("../models");
const Project = db.projects;
const Op = db.Sequelize.Op;

//Create and save a new Project
exports.create = (req, res) => {
    //Validate request
    if(!req.body.username) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    //Create a Project
    const project = {
        username: req.body.username,
        projectname: req.body.projectname,
        description: req.body.description,
        donation: req.body.donation,
        published: req.body.published ? req.body.published : false
    };

    //Save the Project in the Database
    Project.create(project)
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message:
            err.message || "Some Error occured while creating the Project."
        });
    });

    //Get all the Projects from the Database
    exports.findAll = (req, res) => {
        const projectname = req.query.projectname;
        var condition = projectname ? { projectname: { [Op.like]:  `%${projectname}` } } : null;

        Project.findAll({ where: condition })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: 
                err.message || "Some Error occured while getting Projects."
            })
        })

    }

    //Find a Project by id
    exports.findOne = (req, res) => {
        const id = req.params.id;

        Project.findByPK(id)
        .the(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error getting Project with id : " + id
            });
        })
    };

    //Update a Project by id
    exports.update = (req, res) => {
        const id = req.params.id;

        Project.update(req.body, {
            where: { id: id }
        })
        .then(num => {
            if(num == 1) {
                res.send({
                    message: "Project was Updated!"
                });
            } else {
                res.send({
                    message: `Cannot update Project with id=${id}, maybe Project was not found or req.body is empty`
                })
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Project with id : " + id
            });
        });
    };

    //Delete a Project with a specified id in the request
    exports.delete = (req, res) => {
        const id = req.params.id;

        Project.destroy({
            where: { id: id }
        })
        .then(num => {
            if(num == 1) {
                res.send({
                    message: "Project was sucessfully deleted!"
                });
            } else {
                res.send({
                    message: `Cannot delete Project with id=${id}. Maybe Project was not found.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Project with id : " + id
            });
        });
    };

    //Delete All Projects
    exports.deleteAll = (req, res) => {
        Project.destroy({
            where: {},
            truncate: false
        })
        .then(num => {
            res.send({ message: `${num} Projects were deleted successfully`})
        })
        .catch(err => {
            res.status(500).send({
                message: 
                err.message || "Some Error occured while removing all Projects"
            });
        });
    };

    //Get All Published Projects
    exports.findAllPublished = (req, res) => {
        Project.findAll({
            where: { published: true }
        })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: 
                err.message || `Some Error occured while getting published Projects.`
            });
        });
    };
};