const router = require('koa-router')()

router.prefix('/users')

router.get('/', function (ctx, next) {
  ctx.body = 'this is a users response!'
})

router.get('/info', function (ctx, next) {
  ctx.body = 'this is a users/info response'
})

router.get('/name', function (ctx, next) {
    ctx.body = 'this is a users/name response'
})

module.exports = router
