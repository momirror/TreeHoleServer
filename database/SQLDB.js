const mysql = require('mysql');
const config = require('../config/config');

//创建数据库连接池
const pool = mysql.createPool({
    host: config.host,
    port: config.port,
    user: config.user,
    password: config.password,
    database: config.database,
});

//封装一个sql执行函数，只要把sql语句和参数值(values）传递进来，就可以执行增、删、查、改
query =  (sql,values) => {
    return new Promise((resolve, reject) => {
        pool.getConnection(function (err, connection) {
            console.log('connection...'+connection);
            if (err) {
                reject(err);
            }

            console.log('sql: '+sql + ' values: '+ values);
            connection.query(sql,values, (error, results) => {
                console.log('querying...')

                if (error) {
                    reject(error);
                } else {
                    resolve(results);
                }
                connection.release();
            });
        });
    });
}

createTable = (sql) => {
    return query(sql,[]);
}


module.exports = {query,createTable};














