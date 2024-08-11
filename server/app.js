import express from "express";
import dotenv from "dotenv";
import conn from "./config/db.js";
import cors from "cors";
import routeManager from "./routes/routeManager.js";

dotenv.config();

// connection to the DB
conn();

const app = express();
const PORT = process.env.PORT;

//static files middleware
app.use(
  cors({
    origin: "http://localhost:3000", // Next.js uygulamanızın adresi
    methods: ["GET", "POST", "DELETE", "PUT"], // İzin verilen HTTP metotları
    credentials: true,
  })
);
app.use(express.static("public"));
app.use(express.json({ limit: "30mb", extended: true }));

//routes
app.use("/", routeManager);

app.listen(PORT, () => {
  console.log(`Application running on port: ${PORT}`);
});
