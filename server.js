const mongoose = require("mongoose");



mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/sun-tide", {
  useNewUrlParser: true,
  useFindAndModify: false
});

