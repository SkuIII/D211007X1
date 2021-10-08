exports.index = (req, res) => {
    res.sendfile('./public/html/index.html');
};

exports.edit = (req, res) => {
    res.sendfile('./public/html/edit.html');
};

exports.editUpdate = (req, res) => {
    
    const fs = require('fs');

    const headline = req.body.tBoxName1;
    const intro = req.body.tBoxName2;
    const articleImage = 'data/duck.jpg';

    const textCombined = { headline, intro, articleImage };

    const jsonConvert = JSON.stringify(textCombined);

    fs.writeFile('./public/data/exercise1.json', jsonConvert, (err) => {
        if (err) throw err;
    });

    res.sendfile('./public/html/index.html');
};