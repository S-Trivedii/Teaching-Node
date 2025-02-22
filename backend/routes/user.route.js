import express from "express";
import { userRegiseter } from "../controller/user.controller.js";
import { userLogin } from "../controller/user.controller.js";

// Created a router
const router = express.Router();

router.route("/signup").post(userRegiseter);
router.route("/signin").post(userLogin);

export default router;
