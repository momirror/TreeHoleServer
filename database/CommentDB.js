var db = require('./SQLDB');

//创建comments表的SQL语句
let commentsTableSql = 'create table if not exists comments(' +
    'id INT NOT NULL AUTO_INCREMENT,' +
    'owner_id INT NOT NULL,' +
    'secret_id INT NOT NULL,' +
    'content VARCHAR(1000) NOT NULL,' +
    'timestamp BIGINT NOT NULL,'+
    'PRIMARY KEY (id)'+
    ')';

//如果不存在comments表，创建一个
db.createTable(commentsTableSql).catch(function (err) {
    console.log('create comments table failed!!:'+err);
});

//添加Comment
let addComment = async (comment) => {
    console.log('addComment');
    let sql = 'insert into  comments(owner_id,secret_id,content,timestamp) values(?,?,?,?)';
    return db.query(sql,[comment.ownerId,comment.secretId,comment.content,comment.timestamp]);
}

//根据id查找Comment
let findCommentById = async (id) => {
    let sql = `
    SELECT * from comments
      where id="${id}"`;
    let comments =  await db.query(sql);

    if(comments.length > 0){
        return comments[0];
    } else {
        throw 'no found comment';
    }
}

//根据id删除Comment
let deleteComment = async (id) => {
    let sql = `delete from comments where id="${id}"`;
    let result = await db.query(sql);
    return result;
}


module.exports = {addComment,findCommentById,deleteComment};