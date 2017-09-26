var db = require('./SQLDB');

//创建secrets表的SQL语句
let secretsTableSql = 'create table if not exists secrets(' +
    'id INT NOT NULL AUTO_INCREMENT,' +
    'owner_id INT NOT NULL,' +
    'content VARCHAR(1000) NOT NULL,' +
    'timestamp BIGINT NOT NULL,'+
    'PRIMARY KEY (id)'+
    ')';

//如果不存在secrets表，创建一个
db.createTable(secretsTableSql).catch(function (err) {
    console.log('create secretsTableSql table failed!!:'+err);
});

//添加Secret
let addSecret = async (secret) => {
    let sql = 'insert into secrets(owner_id,content,timestamp) values(?,?,?)';
    return db.query(sql,[secret.ownerId,secret.content,secret.timestamp]);
}


//根据id查找用户
let findSecretById = async (id) => {
    let sql = `
    SELECT * from secrets
      where id="${id}"`;
    let secrets =  await db.query(sql);

    if(secrets.length > 0){
        return secrets[0];
    } else {
        throw 'no found secret';
    }
}

//根据id删除Secret
let deleteSecret = async (id) => {
    let sql = `delete from secrets where id="${id}"`;
    let result = await db.query(sql);
    return result;
}

//查询最新的count个数据
let findLatestSecretsWithCount = async (count)=> {
    let sql = `select * from comments order by id desc limit ?`;
    let results = await db.query(sql,count);

    //因为上面查出来的数据是逆序的，这里再逆一下，转回正序
    if(results.length > 0){
        results = results.reverse();
    }

    return results;
}


module.exports = {addSecret,findSecretById,findLatestSecretsWithCount,deleteSecret};