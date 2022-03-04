import express from "express";
import {
  getListings,
  createListings,
  viewList,
} from "../controllers/logicFunction.js";

//using router to route our incoming requests to a specific route/location
const router = express.Router();

router.get("/", getListings);
router.post("/", createListings);
router.patch("/views/:id", viewList);

export default router;
