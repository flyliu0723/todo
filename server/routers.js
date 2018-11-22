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
/**
 * @description 获取todo列表
 */
router.get('/todo/list', (req, res) => {
    let sql = `select * from todo`
    sql += req.query.tag === ''
            ? '' : ` where tag = ${req.query.tag}`
    sql += req.query.sort === '' ? ` order by startDate desc` : `order by ${req.query.sort} desc`
    
    db.query(sql)
        .then(d => {
            res.send({
                code: 1100,
                msg: '成功',
                data: d
            })
            
        })
})
/**
 * @description 添加todo列
 */
router.get('/todo/addlist', (req, res) => {
    let sql = `insert into todo (todo, startDate, endDate, tag, priority) values("${req.query.todo}", "${req.query.startDate}", "${req.query.endDate}", "${req.query.tag}", "${req.query.priority}")`
    db.query(sql)
        .then(d => {
            res.send({
                code: d.affectedRows === 1 ? 1100 : 1200,
                msg: '',
                data: d.affectedRows === 1 ? '添加成功' : '添加失败，稍后重试'
            })
        })
})

module.exports = router;