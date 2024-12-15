import {
  addNewBook,
  deleteBook,
  getAllBooks,
  getBookById,
  updateBook,
} from "../Controllers/bookController.js";

const routes = (app) => {
  app.route("/books").get(getAllBooks).post(addNewBook);

  app
    .route("/book/:bookId")
    .get(getBookById)
    .put(updateBook)
    .delete(deleteBook);
};

export default routes;
