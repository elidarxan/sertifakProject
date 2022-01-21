const express = require('express');
const dbProduct = require('../model/Product')
const User = require('../model/User')
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  
  dbProduct.find({} , (err , data) => {
    try {
      res.render('card', { 
        title: 'Bosh sahifa',
        db : data ,
        log: false,
        login : req.isAuthenticated()

      });
    } catch (err) {
        console.log(err);
    }
  })
 
});
router.get('/category/pr', function(req, res, next) {
  
  dbProduct.find( { user: req.user._id } , (err , data) => {
    console.log(data);
    try {
      res.render('card', { 
        title: 'profile',
        db : data ,
        log : true ,
        login : req.isAuthenticated()

      });
    } catch (err) {
        console.log(err);
    }
  })
 
});


router.get('/category', function(req, res, next) {
  dbProduct.aggregate([{ '$match' : {category:"chevrolet" }}] , (err , data) => {
    try {
      res.render('category' , { 
        title: 'kategoriyalar',
        db : data ,
        login : req.isAuthenticated()

      });
    } catch (err) {
        console.log(err);
    }
  })
 
});
router.get('/category/chev', function(req, res, next) {
  dbProduct.aggregate([{ '$match' : {category:"chevrolet" }}] , (err , data) => {
    try {
      res.render('card' , { 
        title: 'chevrolet kategoriyasi',
        db : data,
        login : req.isAuthenticated()


      });
    } catch (err) {
        console.log(err);
    }
  })
 
});
router.get('/category/bmw', function(req, res, next) {
  dbProduct.aggregate([{ '$match' : {category:"bmw" }}] , (err , data) => {
    try {
      res.render('card' , { 
        title: 'bmw kategoriyasi',
        db : data ,
        login : req.isAuthenticated()


      });
    } catch (err) {
        console.log(err);
    }
  })
 
});
router.get('/category/mers', function(req, res, next) {
  dbProduct.aggregate([{ '$match' : {category:"mercedes" }}] , (err , data) => {
    try {
      res.render('card' , { 
        title: 'mercades kategoriyasi',
        db : data ,
        login : req.isAuthenticated()


      });
    } catch (err) {
        console.log(err);
    }
  })
 
});

router.get('/category/lada', function(req, res, next) {
  dbProduct.aggregate([{ '$match' : {category:"lada" }}] , (err , data) => {
    try {
      res.render('card' , { 
        title: 'lada kategoriyasi',
        db : data ,
        login : req.isAuthenticated()


      });
    } catch (err) {
        console.log(err);
    }
  })
 
});


module.exports = router;
