var express = require('express');
var router = express.Router();
var db = require('./db')

/**
* @description 登陆
**/
router.post('/login', (req, res) => {
    db.query(`select * from account where name = "${req.body.account}"`)
        .then(data => {
            res.send({
                code: data && data[0].password === req.body.password ? 1100 : 1101,
                msg: data && data[0].password === req.body.password ? '' : '用户名或密码错误',
                data:''
            })
        })
})
/**
 * @description 注册
 */
router.post('/regist', (req, res) => {
    db.query(`select * from account where name = "${req.body.account}"`)
        .then(d => {
            if(d && d.length > 0){
                res.send({
                    code: 1103,
                    msg: '该账号已注册',
                    data: ''
                })
            }else {
                db.query(`insert into account (name, password) values ("${req.body.account}", "${req.body.password}")`)
                    .then(data => {
                        res.send({
                            code: 1100,
                            msg: '注册成功',
                            data:''
                        })
                    })
            }
        })
    
})
module.exports = router;