var fs = require('fs');

var readFile = function (fileName) {
    return new Promise(function (resolve, reject) {
        fs.readFile(fileName, function (error, data) {
            if (error) reject(error);
            resolve(data);
        });
    });
};

var gen = function* () {
    var f1 = yield readFile('/users/jerry/git/jsES6-test/fstab');
    var f2 = yield readFile('/users/jerry/git/jsES6-test/shells');
    console.log(f1.toString());
    console.log(f2.toString());
}

// var g = gen();

// g.next();
var fetch = require('node-fetch');
async function getTitle(url) {
  let response = await fetch(url);
  let html = await response.text();
  return html.match(/<title>([\s\S]+)<\/title>/i)[1];
}
getTitle('https://tc39.github.io/ecma262/').then(console.log)