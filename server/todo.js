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
    let sql = `insert into todo (todo, status, endDate, tag, priority) values("${query.content}", "0", "${query.date.toString()}", "${query.tags.join('_')}", "${query.priority}")`
    db.query(sql).then(d => {
        res.send({
            code: 1100,
            msg: '添加成功',
            data: ''
        })
    })
})
/** 
 * @description 更新todo
*/
router.post('/update', (req, res) => {
    const query = req.body
    let sql = `update todo set todo = "${query.content}", endDate = "${query.date.toString()}", tag = "${query.tags.join('_')}", priority = "${query.priority}" where id = ${query.id}`
    db.query(sql).then(d => {
        res.send({
            code: 1100,
            msg: '修改成功',
            data: ''
        })
    })
})
router.get('/delete', (req, res) => {
    let sql = `delete from todo where id = ${req.query.id}`
    db.query(sql).then(d => {
        res.send({
            code: 1100,
            msg: '删除成功',
            data: ''
        })
    })
})
/** 
 * @description 获取todo详细内容
*/
router.get('/getTodoContent', (req, res) => {
    let sql = `select * from todo where id = ${req.query.id}`
    db.query(sql).then(d => {
        if(d && d.length > 0){
            res.send({
                code: 1100,
                msg: '',
                data: d
            })
        }else {
            res.send({
                code: 1201,
                msg: '查不到对应todo',
                data: ''
            })
        }
    })
})


module.exports = router;