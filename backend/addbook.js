// Create a mock server with mock data, similar to index.js
// mock for me a creation of book which will help me to create the actual data structre in mongoDB

// it will help us to create some data to help us trigger the creation of actual database

import mongoose from "mongoose";
import BookSchema from "./Models/bookModel.js" //Ensure the path is correct

// Create a mongoose model from the schema
const Book = mongoose.model("Book",BookSchema);

//connect to mongoDB
mongoose.connect("mongodb://127.0.0.1:27017/bookclubdb",{
    useNewUrlParser: true,
    useUnifiedTopology: true, // Recommended for Mongoose connections
}).then( ()=>{
    console.log("Connected to MongoDB!");
}).catch((error)=>{
    console.log("Error connecting to MongoDB: ",error.message);
});

// Add a sample book

const addSampleBook = async () => {
    try {
        const book = new Book({
            title: "The Alchemist",
            author: "Paulo Coelho",
            genre: "Drama, Quest, Fiction",
            publishedYear: 1988
        });
        const savedBook = await book.save();
        console.log("Sample book added: ", savedBook);
    }
    catch(error) {
        console.log("Error adding book: ",error.message);
    }
    finally{
        mongoose.connection.close();
    }
};

addSampleBook();