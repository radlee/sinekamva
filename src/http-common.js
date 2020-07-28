import axios from 'axios';

export default axios.create({
    baseUrl: "http://localhost:5007/api",
    headers: {
        "Content-type": "application/json"
    }
});