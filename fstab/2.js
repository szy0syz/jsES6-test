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
    var f1 = yield readFile('/etc/fstab');
    var f2 = yield readFile('/etc/shells');
    console.log(f1.toString());
    console.log(f2.toString());
}

var g = gen();

g.next();