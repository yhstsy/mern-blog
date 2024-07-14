import express, { Route } from "express";
import { test } from "../controller/user.controller.js";
import { updateUser } from "../controller/user.controller.js";
import { verifyToken } from "../utils/verifyUser.js";

const router = express.Router();

router.get('/test', test)
router.put('/update/:userId',verifyToken,updateUser)

export default router;