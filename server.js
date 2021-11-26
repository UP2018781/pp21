const express = require('express');
const imager = require('./imager/imager.js');
const imageLocation = 'resources';

async function imgResponder(req,res){
    const width = req.params.width;
    const height = req.params.height;
    const square = req.query.square;
    const text = req.query.text;
    console.log(`${width} x ${height}; square: ${square}, text: ${text}`);
    // imager.sendImage(res,width,height,square,text);
    res.end();

}

const app = express();

app.use(express.static('public'));
app.get('/img/:width/:height',imgResponder);
app.get('/stats');

app.listen(8080);