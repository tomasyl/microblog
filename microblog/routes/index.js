var express = require('express');
var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res) {
//   res.render('index', { title: 'Express' });
// });

// router.get('/', function(req, res) {
//   res.render('index', { title: 'Express' });
// });


router.index = function(req, res) {
	res.render('index', { title: 'Express' });
};

router.user = function(req, res) {
	res.send("user: " + req.params.user);
};
router.post = function(req, res) {};
router.reg = function(req, res) {};
router.doReg = function(req, res) {};
router.login = function(req, res) {};
router.doLogin = function(req, res) {};
router.logout = function(req, res) {};

router.get('/', router.index);
router.get('/u/:user', router.user);
router.post('/post', router.post);
router.get('/reg', router.reg);
router.post('/reg', router.doReg);
router.get('/login', router.login);
router.post('/login', router.doLogin);
router.get('/logout', router.logout);

module.exports = router;
