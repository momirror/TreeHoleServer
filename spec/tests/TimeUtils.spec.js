const TimeUtil = require('../../Utils/time');

describe("Time Utils Spec", function(){
    // 测试用例
    it("getCurrentTimestamp", function(){
        let timestamp = TimeUtil.getCurrentTimestamp();
        expect(timestamp).toBeGreaterThan(10000000000);
    });

    it("dateFromTimestamp", function(){
        let date = TimeUtil.dateFromTimestamp(1506407763407);
        expect(date).toEqual('2017-9-26');
    });
});