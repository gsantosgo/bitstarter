var sys = require('util'), cheerio = require('cheerio');
    rest = require('./restler');


var cheerioHtmlURL = function(url) {
  rest.get(url).on('complete', function(result) {
    if (result instanceof Error) {
      console.log('Error: ' + result.message);
      this.retry(5000); // try again after 5 sec
    } else {
      return cheerio.load(result); // Body html 
    }
  })
};

var aaa = cheerioHtmlURL("http://thawing-basin-3404.herokuapp.com/");
console.log(aaa);
