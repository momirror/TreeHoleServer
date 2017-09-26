const SecretDB = require('../../database/SecretDB');
const Secret = require('../../model/Secret');

describe("SecretDB Spec", function(){
    // 测试用例
    it("SecretDB test", function(){

        var secret = new Secret(2,'这是我的第一个秘密',1506407763407);
        SecretDB.findSecretById(1).then(function (secr) {
            console.log('secretById: '+ secr.id);
            console.log('find secr: ' + Object.getOwnPropertyNames(secr));
        }).catch(function () {
            expect(2).toBeGreaterThan(3);
        });


        SecretDB.findLatestSecretsWithCount(300).then(function (secrets) {
            console.log('find secrets====================== ');
            for(var i = 0;i < secrets.length;i++){
                console.log('id: '+secrets[i].id);
            }
        }).catch(function (err) {
            console.log('err:'+err);
            expect(2).toBeGreaterThan(3);
        });


        SecretDB.deleteSecret(11).then(function (secr) {
            expect(22).toBeGreaterThan(3);
        }).catch(function () {
            expect(2).toBeGreaterThan(3);
        });

        SecretDB.addSecret(secret).then(function () {
            expect(2).toBeGreaterThan(1);
        }).catch(function () {
            expect(2).toBeGreaterThan(3);
        });


    });
});