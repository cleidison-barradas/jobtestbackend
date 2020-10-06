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
    author: {
      type: String,
    },
  },
  { timestamps: true }
);
export default mongoose.model('Notification', NotificationShema);
