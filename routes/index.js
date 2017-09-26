const router = require('koa-router')()
const userdb = require('../database/user')
const User = require('../model/User');

router.get('/', async (ctx, next) => {

    // var user = new User('ting2','000000');
    // user.id = '111';
    // userdb.addUser(user);

    // userdb.findUserById('22').then(function (user) {
    //     console.log('user: '+user.name);
    // }).catch(function (error) {
    //     console.log(error);
    // });

    // userdb.deleteUser('5').then(function (result){
    //         console.log('delete :'+result);
    //     }
    // )

    // userdb.updateUser(user);


  //   database.selectAllData().then(function (results) {
  //     for (i = 0; i < results.length; i++) {
  //         var item = results[i];
  //         console.log('id: ' + item.id + ' last_name: ' + item.last_name + ' gender: ' + item.gender + ' email:' +                        item.email);
  //     }
  //     }
  // ).catch(function (err) {
  //     console.log('err: '+err);
  // });
  await ctx.render('index', {
    title: 'Hello Koa 2!'
  })
})

router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})

module.exports = router
