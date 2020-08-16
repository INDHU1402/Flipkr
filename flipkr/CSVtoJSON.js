/* Converts given csv file to json file*/

const createReadStream = require('fs').createReadStream;
const createWriteStream = require('fs').createWriteStream;
const csvjson = require('csvjson');
const toObject = csvjson.stream.toObject();
const stringify = csvjson.stream.stringify();
createReadStream('src/assets/TATASTEEL.NS.csv', 'utf-8')
        .pipe(toObject)
        .pipe(stringify)
        .pipe(createWriteStream('src/assets/TATASTEEL.NS.json'));