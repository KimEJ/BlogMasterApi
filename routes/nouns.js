var express = require('express');
var router = express.Router();
var mecab = require('mecab-ya');
var tfidf = require('../utils/simple-tf-idf-test');

// router.post('/', function(req, res, next) {
//     mecab.nouns(req.body.text, function (err, result) {
//         console.log(result);
//         res.json(result);
//     });
// });

router.post('/', function(req, res, next) {
    const { docs, title } = req.body
    let test = tfidf.similarity_test([title, ...docs])

    console.log(test)
    res.json(test);
});

module.exports = router;
