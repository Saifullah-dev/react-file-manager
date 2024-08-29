const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");
const fileSystemRoutes = require("./routes/fileSystem");
const multer = require("multer");

const app = express();

// Database connection
connectDB();

// CORS setup
app.use(cors());

// Middleware to parse URL-encoded body
app.use(express.urlencoded({ extended: true }));

// Middleware to parse JSON
app.use(express.json());

// Routes
app.use("/api/file-system", fileSystemRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  if (err instanceof multer.MulterError) {
    return res.status(400).json({ error: err.code });
  }

  res.status(500).json({ error: err.message });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
