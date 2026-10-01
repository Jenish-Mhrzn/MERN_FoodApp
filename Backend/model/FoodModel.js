import mongoose from "mongoose";

const foodSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
});

const FoodModel =
  mongoose.models.Product || mongoose.model("Product", foodSchema);

export default FoodModel;
