const express = require('express');

// server creation 
const app = express();

let port = '3000';
app.listen(port, function(){
    console.log(`server is listening on port ${port}`);
});

app.get('/about', (req, res) => {
    res.send('about page')
});

app.get('/contact', (req, res) => {
    res.send('contact page')
})

let obj = {
    'name' : "Sudhanshu",
    "age" : 22,
    "enroll" : 08313203118
}

app.get('/user', (req, res) => {
    res.send(obj);
})

app.get('/home', (req, res) => {
    console.log(req.hostname);
    console.log(req.path);
    console.log(req.method);
    res.send('hello');
    res.end();
})

// method to send multiple respose or a file in one go
app.get('/views', (req, res) => {
    res.sendFile('./views/index.html', {root: __dirname});
});