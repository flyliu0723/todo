var express = require('express');
var router = express.Router();
var db = require('./db')

/** 
 * @description 获取待办列表
*/
router.get('/list', (req, res) => {
    let sql = 'select * from todo'
    sql += req.query.status === '-1' ? '' : ` where status = ${req.query.status}`
    db.query(sql).then(d => {
        res.send({
            code: 1100,
            msg: '',
            data: d
        })
    })
})
/** 
 * @description 添加todo
*/
router.post('/add', (req, res) => {
    const query = req.body
    console.log(query)
    let sql = `insert into todo (todo, status, endDate, tag, priority) values("${query.content}", "0", "${query.date.toString()}", "${query.tags.join('_')}", "${query.priority}")`
    console.log(sql)
    db.query(sql).then(d => {
        res.send({
            code: 1100,
            msg: '添加成功',
            data: ''
        })
    })
})


module.exports = router;