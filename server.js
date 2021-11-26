const express = require('express');
<<<<<<< HEAD
const app = express();

app.get('/', function (req, res) {
    res.send('Hello World');
})

module.exports.app = app.listen(8080);
=======
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
>>>>>>> e4896ad30006fd782ccd55e1a51b7bb968983c3a
