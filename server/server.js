const express = require('express');
const bodyParser = require('body-parser') // parse http request/response body
const path = require('path'); // 方便使用路径
const app = express();


app.use(express.static(path.join(__dirname, 'build')));

var jsonParser = bodyParser.json()


app.get('/api/user', function (req, res) {
 return res.send({userName:'charlie',password:'123'});
});

app.post('/api/user',jsonParser, function (req, res, next) {

    if(req.body.userName=='charlie'&& req.body.password=='123'){
        return res.send('success');
    } 

    return res.send('falure');
});

app.listen(process.env.PORT || 8080);