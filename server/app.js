import express from "express";
import dotenv from "dotenv";
import conn from "./config/db.js";
import cors from "cors";
import bodyParser from "body-parser";

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

app.listen(PORT, () => {
  console.log(`Application running on port: ${PORT}`);
});
