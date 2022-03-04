import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import postListing from "./routes/listings.js";

const app = express();

//using middlewares to parse the incoming post/put requests
app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use("/listings", postListing);

//using dotenv to manage our ENV variables for good coding practices
dotenv.config();
const PORT = process.env.PORT || 5000;
const CONNECTION_URL = process.env.MONGODB_URL;

//using mongoose and the connection url to connect to the cloud database
mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  //listening to the PORT for incoming requests
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))
  )
  //catching the error if database cannot be connected
  .catch((error) => console.log(error.message));
