import Notification from '../models/Notification';

class NotificationController {
  async index(req, res) {
    try {
      const { referenceId, authorizationId } = req.body;
      res.headers = {
        'x-seller-token': '4ee3b098-3cd2-4b58-9ba5-d5583d04e933',
      };

      const response = {
        referenceId,
        authorizationId,
      };
      await Notification.create({
        referenceId,
        authorizationId,
      });

      return res.json({ response });
    } catch (error) {
      return res.json(error);
    }
  }
}
export default new NotificationController();
