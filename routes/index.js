const Express = require('express');

let router = Express.Router();

router.get('/faq', async function (req, res) {
	res.render('faq');
});

router.get('/request', async function(req, res){
	res.render('request');
});

router.get('/*', async function(req, res){
	res.render('index');
});

module.exports = router;