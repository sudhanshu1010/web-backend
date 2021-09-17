const express = require('express');
const app = express();

let port = '5000';
app.listen(port, function(){
    console.log(`server listening at ${port}`);
})

let user = {};

// client gets from server is get request
app.get('/', (req, res) => {
    res.send('Home page')
})

app.get('/user', (req, res) => {
    res.send(user)
})

app.get('/user', (req, res) => {
    res.json(user)
})

app.use(express.json());

// -------- post request -----------
// client post into server is post request 
app.post('/user', (req, res) => {
    user = req.body;
    console.log(req.body);
    res.send('Data has been added successfully');
})


// -------- patch request -----------
app.patch('/user', (req, res) => {
    let obj = req.body;
    for(let key in obj){
        user[key] = obj[key];
    }
    res.json(user);
})

// -------- delete request -----------
app.delete('/user', (req, res) => {
    user = {};
    res.json(user);
})

 