var config = require('./config')
var mysql = require('mysql')
var pool = mysql.createPool(config.option)


exports.query = (sql, data) => {
    return new Promise((resolve, reject) => {
        pool.getConnection((err, connection) => {
            if(err) {
                reject(err)
            }else {
                connection.query(sql, (error, results, fields) => {
                    connection.release()
                    if (error) {
                        reject(error)
                    }else {
                        resolve(results)
                    }
                })
            }
        })
        
    })
}


