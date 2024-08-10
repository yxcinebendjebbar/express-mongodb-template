import e from "express";
import { configDotenv } from "dotenv";
import connectDB from "./utils/database.js";
configDotenv();

const port = process.env.PORT || 8888;

const app = e();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  connectDB();
  console.log(`Server is running at http://localhost:${port}`);
});
