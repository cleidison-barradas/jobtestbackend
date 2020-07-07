import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  ammount: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  mark: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Mark',
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
  },
});

export default mongoose.model('Product', ProductSchema);
