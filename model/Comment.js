class Comment{
    constructor(ownerId,secretId,content,timestamp){
        this.ownerId = ownerId;
        this.secretId = secretId;
        this.content = content;
        this.timestamp = timestamp;
    }
}

module.exports = Comment;
