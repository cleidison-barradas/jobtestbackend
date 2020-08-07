import User from '../models/User';

class UserController {
  async store(req, res) {
    try{

    const user = await User.create(req.body);

    return res.json(user);
    }catch(error){

      return res.status(400).json({ error: error.message });
    }
  }
  async put(req, res) {
    try {
      const { id } = req.params;
      const userExists = await User.findById(id);

      if ( !userExists) { 
        return res.status(400).json({ error: 'user does not exists'});
      }
      await userExists.updateOne(req.body);

      const user = await User.findById(id);

      return res.json({ user });
    } catch (error) {
      return res.status(400).json({ error: error.message});
    }
  }
  async delete(req, res) { 
    try {
      const { id } = req.params;

      const userExists = User.findById(id);

      if (!userExists) {
        return res.status(400).json({ error: 'user does not exists'});
      }
      await userExists.deleteOne(id);

    } catch (error) {
      return res.status(400).json({ error: error.message});
    }
  }
}
export default new UserController();
