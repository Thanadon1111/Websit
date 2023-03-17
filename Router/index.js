const express = require('Movie');
const router = express.Router();
const path = require('path');
const mydata = require('./showdata/view');
router.get("/",(req,res)=>{
    res.send(mydata);
})
module.exports = router;