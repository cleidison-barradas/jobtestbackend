import Mark from '../models/Mark';

class MarkController {
  async index(req, res) {
    try {
      const { textsearch } = req.query;

      const mark = await Mark.find({
        name: { $regex: `^${textsearch || ''}`, $options: 'i' },
      });

      return res.json(mark);
    } catch (error) {
      return res.json(error);
    }
  }

  async store(req, res) {
    try {
      const mark = await Mark.create(req.body);

      return res.json(mark);
    } catch (error) {
      return res.json(error);
    }
  }

  async update(req, res) {
    try {
      const mark = await Mark.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });

      if (!Mark) {
        return res.status(400).json({ error: 'Mark does not exists' });
      }

      return res.json(mark);
    } catch (error) {
      return res.json(error);
    }
  }

  async delete(req, res) {
    try {
      const mark = await Mark.deleteOne({ _id: req.params.id });
      if (!mark) {
        return res.status(400).json({ error: 'Mark does not exists' });
      }
      return res.json();
    } catch (error) {
      return res.json(error);
    }
  }
}
export default new MarkController();
