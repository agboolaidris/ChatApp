const mongoose = require("mongoose");
const { MONGODB_URL } = require("../config/config");

mongoose.connect(
  MONGODB_URL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("database connected");
    }
  }
);
