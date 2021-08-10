var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({
    "bdate": "2539-11-04",   
    "cid": "1100702418991",   
    "cid_address": "4511-4515",   
    "cid_district": "เขตบางนา",   
    "cid_province": "กรุงเทพมหานคร",   
    "cid_road": "ถนนสุขุมวิท",   
    "cid_sub_district": "แขวงบางนา",   
    "f_name": "วศิน",   "f_name_en": "Wasin",   
    "name_title": "นาย",   
    "name_title_en": "Mr.",   
    "nation": "ไทย",   
    "s_name": "แฝงฤทธิ์",   
    "s_name_en": "Faengrit",   
    "sex": "ชาย",   
    "status": true })
});

module.exports = router;