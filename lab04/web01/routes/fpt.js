const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('fpt/fpt');
})

router.get('/cloud', (req,res) =>{
  res.render('fpt/1644');
})

module.exports = router;