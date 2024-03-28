const userModel = require("../models/userModel");

module.exports = {
  postregisterUser: (req, res) => {
    try {
      const { name, email, password } = req.body;
      const userBody = {
        name: name,
        email: email,
        password: password,
      };

      userModel.registerUser(userBody);
      res
        .status(200)
        .json({ message: "User registration request sent successfully" });
    } catch (err) {
      console.error("Error registering user:", err);
      res.status(500).json({ error: "Failed to register user" });
    }
  },
};
