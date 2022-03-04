import mongoose from "mongoose";
import ListingsModel from "../models/ListingsModel.js";

//gets all the car listings
export const getListings = async (req, res) => {
  try {
    const listings = await ListingsModel.find();
    res.status(200).json(listings);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

//saves the listing in he mongodb database
export const createListings = async (req, res) => {
  const listing = req.body;
  const newListing = new ListingsModel(listing);

  try {
    await newListing.save();
    res.status(201).json(newListing);
  } catch (error) {
    res.status(409).json({ message: error.message });
    console.log(error.message);
  }
};

//updates like in the mongodb database
export const viewList = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("No car lists with that id.");

  const list = await ListingsModel.findById(id);
  const updatedList = await ListingsModel.findByIdAndUpdate(
    id,
    {
      views: list.views + 1,
    },
    { new: true }
  );
  res.json(updatedList);
};
