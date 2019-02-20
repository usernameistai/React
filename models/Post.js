const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create SChema
const PostSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users' // reference to the users collection
    },
    text: {
        type: String,
        required: true
    },
    name: {
        type: String
    },
    avatar: {
        type: String,  
    },
    likes: [ // link each like to the user, not just tally
        {    // if like the post, user id will be added to an array
            user: {
                type: Schema.Types.ObjectId,
                ref: 'users'
            }
        }
    ],
    comments: [ // comments will be added to an array
        {    
            user: {
                type: Schema.Types.ObjectId,
                ref: 'users'
            },
            text: {
                type: String,
                required: true
            },
            name: {
                type: String
            },
            avatar: {
                type: String
            },
            date: {
                type: Date,
                default: Date.now
            }
        }  
    ],
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Post = mongoose.model('post', PostSchema);