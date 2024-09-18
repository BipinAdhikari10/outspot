const mongoose = require("mongoose");

mongoose.connect(
  `mongodb+srv://adhikaribipin1032:3MhyzGjuM1x8PEER@cluster0.ribgu.mongodb.net/outspot_db?retryWrites=true&w=majority&appName=Cluster0`,
  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  }
);
