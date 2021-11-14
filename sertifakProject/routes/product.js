const express = require('express');
const dbProduct = require('../model/Product')
const dbUser = reuire("../model/User.js")
// console.log(upload);
const router = express.Router();



router.get('add/product/:id' ,  (req  , res) => {
  dbProduct.findById(req.params.id , (err ,data) => {
    try {
      res.render("product" , {
        title: "Mahsulot haqida",
        data ,
        login : req.isAuthenticated()
      })
    } catch (error) {
      console.log(error);
    }
  }) 

})

  



module.exports = router;
