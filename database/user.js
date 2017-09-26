var db = require('./SQLDB');

//创建users表的SQL语句
let usersTableSql = 'create table if not exists users(' +
    'id INT NOT NULL AUTO_INCREMENT,' +
    'name VARCHAR(100) NOT NULL,' +
    'pass VARCHAR(100) NOT NULL,'+
    'PRIMARY KEY (id)'+
    ')';

//如果不存在users表，创建一个
db.createTable(usersTableSql).catch(function (err) {
    console.log('create users table failed!!:'+err);
});

//添加用户
let addUser = async (user) => {

    findUserByName(user.name).then(function (result) {
        throw  '已经存在同名用户，请你更新用户名！'
        console.log('find result: ' + Object.getOwnPropertyNames(result));
    }).catch(function (error) {
        console.log('不存在同名用户，可以添加')
    });

    let sql = 'insert into users(name,pass) values(?,?)';
    return db.query(sql,[user.name,user.password]);
}

//根据用户名查找用户
let findUserByName = async (name) => {
    let sql = `
    SELECT * from users
      where name="${name}"`;
    let users =  await db.query(sql);

    if(users.length > 0){
        return users[0];
    } else {
        throw 'no found user';
    }
}

//根据id查找用户
let findUserById = async (id) => {
    let sql = `
    SELECT * from users
      where id="${id}"`;
    let users =  await db.query(sql);

    if(users.length > 0){
        return users[0];
    } else {
        throw 'no found user';
    }
}

//根据id删除用户
let deleteUser = async (id) => {
    let sql = `delete from users where id="{id}"`;
    let result = await db.query(sql);
    return result;
}

//更新用户信息
let updateUser = async (user) => {
    let _sql= `update posts set  title=?,content=? where id=?`
    let sql = `update users set name=?,pass=? where id=?`;
    return db.query(sql,[user.name,user.password,user.id]);
}


module.exports = {addUser,findUserByName,findUserById,deleteUser,updateUser};