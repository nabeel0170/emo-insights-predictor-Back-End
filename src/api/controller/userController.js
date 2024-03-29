import { registerUser } from '../services/userServices.js';

export const postRegisterUser =  async (req, res) => {
    try {
      const { name, email, password } = req.body;
      const userBody = {
        name: name,
        email: email,
        password: password,
      };

      const result = await registerUser(userBody);
      res.status(200).json(result);
    } catch (err) {
      console.error("Error registering user:", err);
      res.status(500).json({ error: "Failed to register user" });
    }
};
