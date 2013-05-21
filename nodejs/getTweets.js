var twitter = require('ntwitter');
var fs = require('fs');

var twit = new twitter({
  consumer_key: '05iXWPDYAWVlFGHeYRwtA',
  consumer_secret: 'alcd7nesaL1L1HxwcrYvCdK3CK5YH8fJjm1nQOjU',
  access_token_key: '18974419-FBAapWG8GBl7jDsScrc7QETX3id1aqlLSt2BKyvAz',
  access_token_secret: 'gZNpAdl2d4RbnqwxhXoEBRwjSclq2uOEP2cYhI13MKI'
});

var jsonObject = {};


twit.search('birds2013 OR #birds2013 OR #birds2012 OR birds2012', {}, function(err, data) {

            for (var i=0; i<data.results.length; i++) {

                console.log(data.results[i].id);
                jsonObj.push({data.results[i].id: 'i'});

            }
  
            fs.writeFile('./data.json', data, function(error){
                if (error) { console.log(error) }
                else { console.log('The file was saved') }
            });


});






