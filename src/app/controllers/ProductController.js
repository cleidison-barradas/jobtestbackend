import Product from '../models/Product';

class ProductController {
  async index(req, res) {
    try {
      const { textsearch, category, mark } = req.query;

      const product = await Product.find({
        name: { $regex: `^${textsearch || ''}`, $options: 'i' },
      })
        .populate('mark')
        .populate('category')
        .then(productCat => {
          if (category) {
            return Product.find({ category })
              .populate('mark')
              .populate('category');
          }
          return productCat;
        })
        .then(productMak => {
          if (mark) {
            return Product.find({ mark })
              .populate('mark')
              .populate('category');
          }
          return productMak;
        });
      return res.json(product);
    } catch (error) {
      throw new Error(error);
    }
  }

  async store(req, res) {
    try {
      const {
        category_id,
        mark_id,
        name,
        description,
        price,
        ammount,
      } = req.body;

      const product = await Product.create({
        name,
        description,
        price,
        ammount,
        mark: mark_id,
        category: category_id,
      });

      await product
        .populate('mark')
        .populate('category')
        .execPopulate();

      return res.json(product);
    } catch (error) {
      return res.status(400).json({ message: error });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      const productEdit = await Product.findByIdAndUpdate(id, req.body, {
        new: true,
      });
      return res.json(productEdit);
    } catch (error) {
      return res.status(400).json({ message: error });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;

      await Product.findOneAndRemove({ _id: id });

      return res.json();
    } catch (error) {
      return res.json(error);
    }
  }
}
export default new ProductController();
