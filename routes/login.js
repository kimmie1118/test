var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/loginpage', function(req, res, next) {
  console.info("恭喜你进入loginpage页面");
  var id=req.query.id;
  if(id==1){
      res.render('province', {});
  }else{
      res.render('error', {});
  }
});
router.post('/province',function(req, res, next){
  console.info("恭喜你进入ajax二级联动");
  var id=req.body.id;
  if(id==1){
      res.json([{name:"哈尔滨",id:"hei1"},{name:"齐齐哈尔",id:"hei2"}]);
  }else if(id==2){
      res.json([{name:"朝阳",id:"bei1"},{name:"海淀",id:"bei2"}]);
  }
});
module.exports = router;
