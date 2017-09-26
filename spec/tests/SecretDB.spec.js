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