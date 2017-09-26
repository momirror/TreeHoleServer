const router = require('koa-router')()
const Secret = require('../model/Secret');
const SecretDB = require('../database/SecretDB');

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
module.exports = router
