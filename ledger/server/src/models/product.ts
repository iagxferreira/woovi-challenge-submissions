import mongoose from "mongoose"

const ProductSchema = new mongoose.Schema({
  title: String,
});

export default mongoose.model('Product', ProductSchema);