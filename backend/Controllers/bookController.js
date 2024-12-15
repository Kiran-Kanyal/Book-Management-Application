import { Book } from "../Models/bookModel.js";

export const addNewBook = async (req, res) => {
  try {
    //create book using the req body
    const newBook = new Book(req.body);
    //save to database
    const savedBook = await newBook.save();
    //send a response with the saved book
    res.status(201).json(savedBook);
  } catch (error) {
    res.status(400).json({ error: error.message }); // send an error message
  }
};

export const getAllBooks = async (req, res) => {
  try {
    //find all books in the database
    const books = await Book.find();
    //send the list of the books as the response
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ error: error.message }); // handle any errors
  }
};

export const getBookById = async (req, res) => {
  try {
    // find the book by its ID
    const book = await Book.findById(req.params.bookId);
    if (book) {
      // send the book as response
      res.status(200).json(book);
    } else {
      // handle book not found
      res.status(404).json({ message: "Book not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateBook = async (req, res) => {
  try {
    // find book by ID and update its data
    const updatedBook = await Book.findByIdAndUpdate(
      req.params.bookId,
      req.body,
      { new: true }
    );
    if (updatedBook) {
      res.status(200).json(updatedBook); // Respond with the updated book
    } else {
      res.status(404).json({ message: "Book not found." }); // Handle case if book doesn't exist
    }
  } catch (error) {
    res.status(500).json({ error: error.message }); // Handle errors
  }
};

export const deleteBook = async (req,res)=>{
    try{
        // extract the book id from the params
        const bookID = req.params.bookId;

        // Use mongoose to delete the book by ID
        await Book.deleteOne({_id: bookID});

        // send a success message
        res.json({message: "Book Successfully Deleted."});
    }catch(error){
        // Handle errors
        res.status(500).json({message: "Failed to delete the book.",error});
    }
}