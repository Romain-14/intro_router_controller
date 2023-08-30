import {Router} from "express";

import { allProductView, oneProductView, addProduct } from "../controller/product.js";

const router = Router();
// en arrivant dans fichier on est sur http://localhost:9000/product
// ici pour déclencher allProductView http://localhost:9000/product/all
router.get("/all", allProductView); 
router.get("/one/:id", oneProductView);

router.post("/add", addProduct);

export default router;