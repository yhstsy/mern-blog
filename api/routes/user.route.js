import express, { Route } from "express";
import { test } from "../controller/user.controller.js";
import { updateUser, deleteUser, signout } from "../controller/user.controller.js";
import { verifyToken } from "../utils/verifyUser.js";

const router = express.Router();

router.get('/test', test)
router.put('/update/:userId', verifyToken, updateUser)
router.delete('/delete/:userId', verifyToken, deleteUser)
router.post('/signout', signout)

export default router;