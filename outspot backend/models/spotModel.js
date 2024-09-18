const mongoose = require("mongoose");

const SpotModel = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
  },
  availableSpotNo: {
    type: Number,
  },
  type: {
    type: String,
  },
  imageURL: {
    type: String,
  },
  latitude: {
    type: String,
  },
  longitude: {
    type: String,
  },
  phoneNo: {
    type: String,
  },
  email: {
    type: String,
  },
  price: {
    type: Number,
  },
  description: {
    type: String,
    required: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

module.exports = mongoose.model("Spot", SpotModel);
