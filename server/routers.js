var express = require('express');
var router = express.Router();
var db = require('./db')

router.get('/', (req, res) => {
    db.query('select * from account')
        .then(d => {
            console.log(d)
        })
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
    db.query(`select * from account where name = "${req.body.account}"`)
        .then(data => {
            res.send({
                code: data && data[0].password === req.body.password ? 1100 : 1101,
                msg: data && data[0].password === req.body.password ? '' : '用户名或密码错误',
                data: data && data[0].password === req.body.password ? '登陆成功' : '',
            })
        })
})
/**
 * @description 注册
 */
router.post('/user/regist', (req, res) => {
    db.query(`select * from account where name = "${req.body.account}"`)
        .then(d => {
            if(d.length > 0){
                res.send({
                    code: 1102,
                    msg: '用户名已注册',
                    data: ''
                })
            }else{
                db.query(`insert into account (name, password) values("${req.body.account}", "${req.body.password}")`)
                    .then(d => {
                        if(d.affectedRows === 1) {
                            res.send({
                                code: 1100,
                                msg: '',
                                data: '注册成功'
                            })
                        }
                    })
            }
        })
})

module.exports = router;