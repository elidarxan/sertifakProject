const mongoose = require('mongoose')
const Schema = mongoose.Schema

const dbProduct  = new Schema ( {
    title: {
        type : String,
        required : true
    },
    price : {
        type : Number,
        required : true,
    },
    sale : Number,
    category : {
        type : String
    },
    comment : {
        type : String
    },
    img : {
        type : String, 
    },
    dataTime : {
        type : Date,
        default : Date.now
    },
    user : {
        type: Schema.Types.ObjectId ,
        ref : 'userDb'
    }
    
})

module.exports = mongoose.model('mahsulot' , dbProduct)