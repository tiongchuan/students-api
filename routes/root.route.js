import { Router } from "express";

const router = Router();

router.get('/', (req, res) => {
   return res.send("Welcome to students database.") 
});

export default router;