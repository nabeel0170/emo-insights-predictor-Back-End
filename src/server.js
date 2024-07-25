import express from "express";
const app = express();
const PORT = process.env.PORT || 8000; // Set port from environment variable or default to 3000
import cors from "cors";
import userRoutes from "./api/routes/userRoutes.js";
import { dbCon } from "./config/dbConnection.js";
import predictRoute from './api/routes/predictRoute.js';
//configs
dbCon();

// Middleware
app.use(cors());
app.use(express.json()); // Parse JSON request bodies
app.use("/api/users", userRoutes);
app.use("/api/predict", predictRoute);

// Routes
app.get("/hello", (req, res) => {
  res.send("Hello, world!");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
