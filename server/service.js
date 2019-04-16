
let Express = require('express');
let bodyParser = require('body-parser');
let app = Express();
let http = require('http');

let routers = require('./routers')
let todo = require('./todo')

app.use(bodyParser.json())

app.all("*",function(req,res,next){
    //设置允许跨域的域名，*代表允许任意域名跨域
    res.header("Access-Control-Allow-Origin","*");
    //允许的header类型
    res.header("Access-Control-Allow-Headers","content-type");
    //跨域允许的请求方式 
    res.header("Access-Control-Allow-Methods","DELETE,PUT,POST,GET,OPTIONS");
    if (req.method.toLowerCase() === 'options'){
        res.send(200)
    }else{
        next()
    }
        
})

app.use('/user', routers)
app.use('/todo', todo)
app.use((req, res, next) => {
    res.status(404).send('error')
    next()
})
app.listen(4567);
