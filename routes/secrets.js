const router = require('koa-router')()
const Secret = require('../model/Secret');
const SecretDB = require('../database/SecretDB');
const TimeUtil = require('../Utils/time');

router.prefix('/secrets')

router.get('/', async function (ctx, next) {

    ctx.body = await SecretDB.findLatestSecretsWithCount(100);

})

router.get('/bar', function (ctx, next) {
  ctx.body = 'this is a secrets/bar response'
})

router.get('/test2', function (ctx, next) {

    ctx.body = 'this is a secrets/test response'
})


/*****************************POST************************************/
router.post('/', async function (ctx, next) {
    console.log('post........');
    console.log(ctx.request.body);
    let info = ctx.request.body;
    let content = info.content;

    let ownerId = -1;
    if(info.ownerId != undefined){
        ownerId = info.ownerId;
    }
    var secret = new Secret(ownerId,content,TimeUtil.getCurrentTimestamp());
    SecretDB.addSecret(secret);

    ctx.body = 'post successful!!'

})


module.exports = router
