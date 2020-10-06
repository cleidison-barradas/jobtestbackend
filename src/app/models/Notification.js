import mongoose from 'mongoose';

const NotificationShema = new mongoose.Schema(
  {
    referenceId: {
      type: String,
      required: true,
    },
    authorizationId: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
export default mongoose.model('Mark', NotificationShema);
