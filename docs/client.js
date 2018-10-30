//client for Cesar Armada Cabify Bootcamp.
const axios = require('axios')

//messageapp users shouldn't be able to have names that contain so many special characters
axios.post('http://localhost:9001/message', {
    "destination": ".l,.'/'[*()!@#$%^&()_]",
    "body": "console.log('sdfsdf')"
})

//Client side error but more than 3 fields shouldn't be allowed
axios.post('http://localhost:9001/message', {
    "destination": ".l,.'/'[*()!@#$%^&()_]",
    "body": "console.log('sdfsdf')",
    "body": "console.log('im not a log')"
})

//There should be a spam protection for this endpoint
setInterval(() => {
    axios.post('http://localhost:9001/message', {
        "destination": ".l,.'/'[*()!@#$%^&()_]",
        "body": "console.log('sdfsdf')",
        "body": "console.log('im not a log')"
    })}, 1);

    
//cliente de cesar
//empty strings <--- Breaks here
axios.post('http://localhost:9001/message', { destination:"", body:"" })

//undefined <--- code Breaks but not message send to messageapp
 axios.post('http://localhost:9001/message', { destination:undefined, body:undefined })

//object inside <--- Breaks here,s hould be string only
 axios.post('http://localhost:9001/message', { destination:{destination:"hola",body:"holahola"}, body:"asfsf" })

//null <--- code Breaks but not message send to messageapp
 axios.post('http://localhost:9001/message', { destination:null, body:null })

//numbers <--- Breaks here, should be string only
 axios.post('http://localhost:9001/message', { destination:1234, body:1234 })
