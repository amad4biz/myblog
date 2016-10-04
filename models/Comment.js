var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var CommentSchema = new Schema ({
    
    body:String,
    author: String,
    Likes: {type: Number, default:0},
    
    post: [{type: Schema.Types.ObjectId, ref: 'Post'}]
    
});


module.exports = mongoose.model('Comment', CommentSchema);