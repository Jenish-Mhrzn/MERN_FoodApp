import express from "express";
import connectDB from "./config/db.js";
import cors from "cors";
import food from "./routes/FoodRoute.js";
import email from "./routes/EmailRoute.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
await connectDB();

//Food API's
app.use("/food", food);

//post api for food
// serve uploaded images
app.use("/images", express.static("uploads"));

//Email API's
app.use("/email", email);

app.listen(5000, () => {
  console.log("Server is listening on port:5000...");
});
