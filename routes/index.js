var express = require('express');
var router = express.Router();
var request = require('request');

/* GET home page. */
router.get('/', function(req, res, next) {

    var apiKey = "AIzaSyCfcFfHlfdZrN16WdFcfayVC37yi-FVMo8";
    var searchEngineId = "006378823057241998602:z4tzem8bwja";
    var queryString = "2nd Great Awakening"
    var restString = `https://www.googleapis.com/customsearch/v1?key=${apiKey}&cx=${searchEngineId}&q=${queryString}`

    var stringy = "https://en.wikipedia.org/wiki/Second_Great_Awakening";
    request(stringy, function(err, gRes, body) {
        res.render('index', { title: 'Express', results: body });
    });

    /*request(restString, function(err, gRes, body) {
        if(!err && gRes.statusCode == 200) {
            var parsedBody = JSON.parse(body);
            console.dir(parsedBody);
            var firstLink = parsedBody['items'][0]['link'];
            console.log(firstLink);

            request(firstLink, function(err, fRes, body) {
                if(!err && fRes.statusCode == 200) {
                    console.log(body);
                }
            });
            // console.log(body);
            // res.render('index', { title: 'Express', results: body });

        } else {
            console.error(err);
            console.render('error', { error: err });
        }
    });*/
});

module.exports = router;
