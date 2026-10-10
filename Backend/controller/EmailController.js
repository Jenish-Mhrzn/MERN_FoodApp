import EmailModel from "../model/EmailModel.js";

export const getEmail = async (req, res) => {
  const data = await EmailModel.find({});
  res.status(200).json({ success: true, data });
};

export const getEmailById = async (req, res) => {
  const data = await EmailModel.findById(req.params.id);

  res.status(200).json({
    success: true,
    data,
  });
};

export const createEmail = async (req, res) => {
  const data = new EmailModel({
    email: req.body.email,
  });

  await data.save();

  res.status(201).json({
    success: true,
    data,
  });
};

export const deleteEmailById = async (req, res) => {
  const data = await EmailModel.findByIdAndDelete(req.params.id);

  res.status(200).json({
    success: true,
    data,
  });
};
