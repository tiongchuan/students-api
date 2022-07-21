import { Router } from "express";
import AuthController from "../controllers/auth.controller.js";
const router = Router();

router.get("/login", (req, res) => {
    return res.send("You have called a login route");
});

const auth = new AuthController();

// Invoke login() in AuthController based on the route
router.post('/login', auth.login);

export default router;