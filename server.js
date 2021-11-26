const express = require('express');
const imager = require('./imager/imager.js');

async function imgResponder(req,res){
    const width = req.params.width;
    const height = req.params.height;
    const square = req.query.square;
    const text = req.query.text;

    try {
        height = parseInt(height);
        width = parseInt(width);
        square = parseInt(square);
        text = toString(text);
    } catch (error) {
        res.status(400);
    }

    console.log(`${width} x ${height}; square: ${square}, text: ${text}`);
    if (res.status != 400){
        imager.sendImage(res,width,height,square,text);
    }
    res.end();
}

const app = express();

app.use(express.static('public'));
app.get('/img/:width/:height',imgResponder);
// app.get('/stats');

app.listen(8080);
