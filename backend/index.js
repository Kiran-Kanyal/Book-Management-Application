import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import routes from "./Routes/bookRoutes.js";

const app = express();
const PORT = 4000;

//middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

// MongoDB connection
const mangoURL = "mongodb://localhost/bookclubdb";
mongoose
  .connect(mangoURL, { useNewUrlParser: true })
  .then(() => console.log("Successfully connected to MongoDB!"))
  .catch((err) => console.log("MongoDB connection error:", err));

routes(app);
app.get("/", (req, resp) => {
  resp.send("Welcome to the server.");
});
app.listen(PORT, () => {
  console.log(`Server is running on PORT : ${PORT}`);
});
