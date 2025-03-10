require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb+srv://ranjithkatukuri09:1234@calendar.kipru.mongodb.net/")
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.error("Error connecting to MongoDB:", err));


app.use("/api/auth", require("./routes/authentication.js"));
app.use("/api/companies", require("./routes/company.js"));
app.use("/api/communications", require("./routes/communication.js"));
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

