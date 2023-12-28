
const express = require("express");
const router = require("./Routers/Router");
const connection = require("./Config/Mongo");
connection();

const app = express();
app.use(express.json());
app.use("/", router);


port = 3004;
app.listen(port, console.log(`server is running on port ${port}`));
