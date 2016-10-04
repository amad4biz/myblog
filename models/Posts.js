 var express = require('express');
var router = express.Router();

var mongoose = require('mongoose')
var Schema = mongoose.Schema;


var PostSchema = new Schema({
    
    title: String,
    link : String,
    Body: String,
    Likes: {type:Number, default:0},
    
    comments:[{type: Schema.Types.ObjectId, ref:'Comment'}]
    
});

module.exports= mongoose.model('Post', PostSchema);