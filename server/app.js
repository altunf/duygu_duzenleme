import express from "express";
import dotenv from "dotenv";
import conn from "./config/db.js";

import bodyParser from "body-parser";

import router from "./routes/authRoute.js";

dotenv.config();

// connection to the DB
conn();

const app = express();
const PORT = process.env.PORT;

//static files middleware
app.use(express.static("public"));
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

//routes

app.use("/", router);

app.listen(PORT, () => {
  console.log(`Application running on port: ${PORT}`);
});
