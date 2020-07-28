import axios from 'axios';

export const create = newProject => {
    return axios
    .post('projects/create', {
        username: newProject.username,
        projectname: newProject.projectname,
        description: newProject.description,
        donation: newProject.donation,
        published: newProject.published ? newProject.published : false
    })
    .then(res => {
        console.log("Created!")
    })
    .catch(err => {
        console.log(err)
    })
}
