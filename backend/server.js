const express = require("express");
const connectDB = require("./app/config/db.config");
const cors = require("cors");
const fileSystemRoutes = require("./app/routes/fileSystem.routes");
const errorHandler = require("./app/middlewares/errorHandler.middleware");

const app = express();

// Database connection
connectDB();

// CORS setup
app.use(cors());

// Middlewares to parse URL-encoded body & JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
app.use("/api/file-system", fileSystemRoutes);

// Error handling middleware
app.use(errorHandler);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
