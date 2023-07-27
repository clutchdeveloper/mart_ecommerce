require("dotenv").config();

const mongoose = require("mongoose");

const connectionStr = process.env.MONGO_DB_URI;

mongoose
  .connect(connectionStr, { useNewUrlParser: true })
  .then(() => console.log("connected to mongoDB"))
  .catch((err) => console.log(err));

mongoose.connection.on("error", (err) => {
  console.log(err);
});

//juniortelli22
