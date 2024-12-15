import mongoose from "mongoose";
// create a mongoose schema 

const Schema = mongoose.Schema;

// define the book schema
export const BookSchema = new Schema({
    title:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true
    },
    genre:{
        type:String
    },
    publishedYear:{
        type:Number
    },
    isAvailable:{
        type:Boolean,
        default:true,
    },
    ratings:{
        type: [Number],
        default: [],
    },
    createdAt:{
        type:Date,
        default: Date.now
    }
});

export const Book = mongoose.model('Book', BookSchema);

export default BookSchema;