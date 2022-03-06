import mongoose from "mongoose";

//creating an schema to define the structure of the car Listing data
const postSchema = mongoose.Schema({
  Make: {
    type: String,
    required: true,
    enum: ["BMW", "Peugeot", "Fiat", "Kia", "Toyota", "Chevrolet"],
  },
  Model: {
    type: String,
    minLength: 2,
    maxLength: 32,
    required: true,
  },
  Year: {
    type: Number,
    min: 1900,
    max: new Date().getFullYear(),
    required: true,
  },
  Description: {
    type: String,
    required: true,
  },
  Price: {
    type: Number,
    min: 0,
    max: 1000000,
    required: true,
  },
  Email: {
    type: String,
    lowercase: true,
    required: true,
    match: [
      /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/,
    ],
  },
  URL: {
    type: String,
    required: false,
  },
  views: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    immutable: true,
    default: new Date(),
  },
});

const ListingsModel = mongoose.model("carlistingsmodels", postSchema);
export default ListingsModel;
