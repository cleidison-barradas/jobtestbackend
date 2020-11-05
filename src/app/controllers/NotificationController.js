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

  async show(req, res) {
    const { referenceId } = req.params;
    try {

      const Notify = await Notification.findById(referenceId);

      if (Notify) {
        return res.json({ notification: Notify })
      }
      
    } catch (error) {
      console.log(error)
      return res.status(500).json({ error: 'Internal error'})
      
    }
  }

}
export default new NotificationController();
