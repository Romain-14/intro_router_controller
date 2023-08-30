import express from "express";

import router from "./router/index.routes.js";

const app = express();

app.use(router);

app.listen(9000, () =>  console.log("running on http://localhost:9000"));