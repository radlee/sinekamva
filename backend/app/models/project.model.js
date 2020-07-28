module.exports = (sequelize, Sequelize) => {
    const Project = sequelize.define("project", {
        username: {
            type : Sequelize.STRING
        },
        projectname: {
            type: Sequelize.STRING
        },
        description: {
            type: Sequelize.STRING
        },
        donation: {
            type: Sequelize.STRING
        },
        published: {
            type: Sequelize.BOOLEAN
        }
    });

    return Project;
}

