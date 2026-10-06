const getFood = async (req, res) => {
  const data = await FoodModel.find({});
  res.status(200).send({ success: true, data });
};
