
//获取当前时间戳
getCurrentTimestamp = () => {
    let timestamp = new Date().getTime();
    return timestamp;
}

//把时间戳转换为‘年-月-日’格式
dateFromTimestamp = (timestamp) => {
    var date =  new Date(timestamp);
    var year = 1900+date.getYear();
    var month = date.getMonth()+1;
    var day = date.getDate();
    return year+"-"+month+"-"+day;
}

module.exports = {getCurrentTimestamp,dateFromTimestamp}