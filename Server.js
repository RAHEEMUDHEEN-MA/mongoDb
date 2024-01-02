
const express = require("express");
const credrouter = require("./Routers/CrudRouter");
const connection = require("./Config/Mongo");
const router = require("./Routers/Router");
connection();

const app = express();
app.use(express.json());
app.use("/", router);


port = 4000;
app.listen(port, console.log(`server is running on port ${port}`));
