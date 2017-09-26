const router = require('koa-router')()

router.prefix('/secrets')

router.get('/', function (ctx, next) {
  ctx.body = 'this is a secrets response!'
})

router.get('/bar', function (ctx, next) {
  ctx.body = 'this is a secrets/bar response'
})

router.get('/test2', function (ctx, next) {
    ctx.body = 'this is a secrets/test response'
})
module.exports = router
