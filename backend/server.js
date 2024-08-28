const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");
const fileSystemRoutes = require("./routes/fileSystem");

const app = express();

// Database connection
connectDB();

// CORS setup
app.use(cors());

// Middlewaere to parse JSON
app.use(express.json());

// Routes
app.use("/api/file-system", fileSystemRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
