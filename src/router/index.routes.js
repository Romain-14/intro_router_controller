import {Router} from "express";

import productRoutes from "./product.routes.js";

const router = Router();

router.get("/", (req, res)=> {
    res.json({msg : "welcome to the home"});
});

router.use("/product", productRoutes);

export default router;