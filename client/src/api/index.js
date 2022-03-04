import axios from "axios";

//url to our backend to get/post car listings
const url = "http://localhost:4000/listings";

//function to get car Listings from our backend
export const fetchListings = () => axios.get(url);

//function to make a post request to our backend
export const createListings = (newListing) => axios.post(url, newListing);

//using the api to incrementing views on the backend
export const viewList = (id) => axios.patch(`${url}/views/${id}`);
