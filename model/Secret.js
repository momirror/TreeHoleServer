class Secret{
    constructor(ownerId,content,timestamp){
        this.ownerId = ownerId;
        this.content = content;
        this.timestamp = timestamp;
    }
}

module.exports = Secret;
