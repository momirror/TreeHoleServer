const CommentDB = require('../../database/CommentDB');
const Comment = require('../../model/Comment');

describe("CommentDB Spec", function(){
    // 测试用例
    it("CommentDB test", function(){

        // console.log('comment db');
        var comment = new Comment(2,2,'这是我的第一个评论',1506407763407);
        console.log('con: '+ comment.content);

        CommentDB.addComment(comment).then(function () {
            expect(2).toBeGreaterThan(1);
        }).catch(function () {
            expect(2).toBeGreaterThan(3);
        });

        CommentDB.findCommentById(1).then(function (comment) {

            if(comment != null){
                console.log('commentById: '+ comment.id);
                console.log('find comment: ' + Object.getOwnPropertyNames(comment));
            }

        }).catch(function (err) {
            console.log('err:--------------------------------'+err);
            expect(2).toBeGreaterThan(3);
        });

        CommentDB.findCommentByOwnerId(2).then(function (comments) {
            console.log('comments: '+ comments);
        }).catch(function () {
            expect(2).toBeGreaterThan(3);
        });

        CommentDB.findCommentBySecretId(2).then(function (comments) {
            console.log('comments by secretId: '+ comments);
        }).catch(function (err) {
            console.log('err:--------------------------------'+err);
            expect(2).toBeGreaterThan(3);
        });

        CommentDB.deleteComment(1).then(function (comment) {
            expect(22).toBeGreaterThan(3);
        }).catch(function () {
            expect(2).toBeGreaterThan(3);
        });





    });
});
