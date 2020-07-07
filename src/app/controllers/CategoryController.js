import Category from '../models/Category';

class CategoryController {
  async index(req, res) {
    const { textsearch } = req.query;

    const categoryFilter = await Category.find({
      name: { $regex: `^${textsearch || ''}`, $options: 'i' },
    });

    return res.json(categoryFilter);
  }

  async store(req, res) {
    const category = await Category.create(req.body);

    return res.json(category);
  }

  async update(req, res) {
    const category = await Category.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    if (!category) {
      return res.status(400).json({ error: 'Category does not exists' });
    }

    return res.json(category);
  }

  async delete(req, res) {
    const category = await Category.deleteOne({ _id: req.params.id });

    if (!category) {
      return res.status(400).json({ error: 'Category does not exists' });
    }
    return res.status(200).json();
  }
}
export default new CategoryController();
