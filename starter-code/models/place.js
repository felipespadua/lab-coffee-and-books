const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const placeSchema = new Schema({
  name: String,
  type: { type: String, enum: ['coffe shop', 'bookstore'] },
  location: { type: { type: String }, coordinates: [Number] }
}, {
  timestamps: { createdAt: "created_at", updatedAt: "updated_at" }
});

placeSchema.index({ location: '2dsphere' });

const Place = mongoose.model("User", placeSchema);

module.exports = Place;