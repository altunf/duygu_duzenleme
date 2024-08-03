import express from "express";
import dotenv from "dotenv";
import conn from "./db.js";

dotenv.config();

// connection to the DB
conn();

const app = express();
const PORT = process.env.PORT;

//static files middleware
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//routes

app.listen(PORT, () => {
  console.log(`Application running on port: ${PORT}`);
});
