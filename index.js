const express = require('express');
const port = 8081;
const app = express();

app.set('view engine', "ejs");

app.use(express.static('public'));

app.get('/', (req, res) => {
    return res.render('index');
})

app.listen(port, (err) => {
    if (!err) {
        console.log("Server Started on http://localhost:" + port);
    }
})