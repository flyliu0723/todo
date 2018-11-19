var express = require('express');
var router = express.Router();
var db = require('./db')

router.get('/', (req, res) => {
    // console.log(req.query)
    // db.findOne('account', {}, function (err, res) {
    //     console.log(res);
    // });
    res.send({
        code: 1100,
        msg: '',
        data:{way: 'get'}
    })
});
router.post('/post', (req, res) => {
    // console.log(req.body)
    res.send({
        code: 1100,
        msg: '',
        data:{way: 'post'}
    })
})

/**
* @description 登陆
**/
router.post('/user/login', (req, res) => {
    db.findOne('account', {name: req.body.account}, function (err, data) {
        res.send({
            code: data && data.password === req.body.password ? 1100 : 1101,
            msg: data && data.password === req.body.password ? '' : '用户名或密码错误',
            data:''
        })

    });
})
module.exports = router;