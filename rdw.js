var express = require('express');
var app = express();
var PORT = 3000;

// Without middleware
app.get('/', (req, res) => {
    res.redirect('https://www.tranquility.tech/');
});

app.listen(PORT, (err) => {
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});
