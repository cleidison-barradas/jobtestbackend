import Notification from '../models/Notification';

class NotificationController {
  async index(req, res) {
    try {
      const { referenceId, authorizationId } = req.body;

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
