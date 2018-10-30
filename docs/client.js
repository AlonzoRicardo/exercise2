//client for Cesar Armada Cabify Bootcamp.
const axios = require('axios')

//messageapp users shouldn't be able to have names that contain so many special characters
axios.post('http://localhost:9001/message', {
    "destination": ".l,.'/'[*()!@#$%^&()_]",
    "body": "console.log('sdfsdf')"
})
    .then((res) => {
        console.log(res.data);
    })

//Client side error but more than 3 fields shouldn't be allowed
axios.post('http://localhost:9001/message', {
    "destination": ".l,.'/'[*()!@#$%^&()_]",
    "body": "console.log('sdfsdf')",
    "body": "console.log('im not a log')"
})
    .then((res) => {
        console.log(res.data);
    })

//There should be a spam protection for this endpoint
setInterval(() => {
    axios.post('http://localhost:9001/message', {
        "destination": ".l,.'/'[*()!@#$%^&()_]",
        "body": "console.log('sdfsdf')",
        "body": "console.log('im not a log')"
    })
        .then((res) => {
            console.log(res.data);
        })
}, 1);