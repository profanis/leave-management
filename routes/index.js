var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Express'
  });
});

router.post('/', function (req, res) {
  
  if (req.body.login == 'user1' && req.body.password == 'p1') {
    req.session.user = {
      login: req.body.login,
      password: req.body.password
    };
    res.redirect('dashboard');
    return;
  }

  res.render('index',{
    status:false,
    message:"wrong credentials"
  })
});

module.exports = router;