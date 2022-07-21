import { Router } from "express";
import AuthController from "../controllers/auth.controller.js";

const router = Router();

router.get("/register", (req, res) => {
    return res.send("You have called a register route");
});

const auth = new AuthController();

// Invoke register() in AuthController based on the route
router.post('/register', auth.register);

export default router;