var express = require('express'),
    bodyParser = require('body-parser'),
    multer = require('multer'),
    s3 = require('multer-s3');

var app = express();

app.use(bodyParser.json());

var upload = multer({
    storage: s3({
        dirname: '',
        bucket: 'myfirstbkt2016',
        secretAccessKey: 'Fr3eI/7oD7hzgPMFEdYJdVkGHM1M93XrZNVAW/qx',
        accessKeyId: 'AKIAJRRYJC42EEZ3ZZKA',
        region: 'us-east-1',
        filename: function (req, file, cb) {
            cb(null, file.originalname); //use Date.now() for unique file keys
        }
    })
});

//open in browser to see upload form
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

//use by upload form
app.post('/upload', upload.single('upl'), function (req, res, next) {
    res.send("Uploaded!");
});

app.listen(9090, function () {
    console.log('Example app listening on port 9090!');
});