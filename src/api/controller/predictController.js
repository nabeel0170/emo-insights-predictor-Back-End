import predict from "../models/predictorModel.js";

export const predictText = async (req, res) => {
    const inputText = req.body.text;
  const text =  inputText;
  try {
    const result = await predict(text);
    console.log(result)
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json(error);
  }
};
