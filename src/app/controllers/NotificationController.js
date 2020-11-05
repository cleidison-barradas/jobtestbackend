import Notification from '../models/Notification';

class NotificationController {
  async index(req, res) {
    try {
      const { referenceId, authorizationId } = req.body;
      res.headers = {
        'x-seller-token': 'b82bdec1-b82d-4d27-a8c1-ea69e6e56540',
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
