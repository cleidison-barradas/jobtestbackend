import User from '../models/User';

export default async (req, res, next) => {
  const { email } = req.body;

  const userExist = await User.findOne({ email });

  if (userExist) {
    return res
      .status(400)
      .json({ message: 'Email alrealy exists try another' });
  }
  return next();
};
