var express = require('express');
var router = express.Router();
var db = require('./db')

/** 
 * @description 获取待办列表
*/
router.get('/list', (req, res) => {
    let sql = 'select * from todo'
    sql += req.query.status === '-1' ? '' : ` where status = ${req.query.status}`
    console.log(sql)
    db.query(sql).then(d => {
        res.send({
            code: 1100,
            msg: '',
            data: d
        })
    })
})


module.exports = router;