import { Router } from "express";
import { getUsers } from "../controllers/userController";

const router = Router();

router.get("/", getUsers); 

//http://localhost:8000/dashboard/metrics

export default router;