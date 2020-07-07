import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import User from '../models/User';

import auth from '../../config/auth';

class SessionController {
  async store(req, res) {
    try {
      const { email, password } = req.body;

      const userExist = await User.findOne({
        email,
      });

      if (!userExist) {
        return res.status(401).json({ message: 'User or password invalid' });
      }

      if (!(await bcrypt.compare(password, userExist.password))) {
        return res.status(401).json({ message: 'User or password invalid' });
      }
      const { _id, name } = userExist;

      return res.json({
        user: {
          _id,
          name,
          email,
        },
        token: jwt.sign({ _id }, auth.secret, {
          expiresIn: auth.expiresIn,
        }),
      });
    } catch (err) {
      return res.status(400).json(err);
    }
  }
}
export default new SessionController();
