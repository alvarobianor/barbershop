import jwt from 'jsonwebtoken';
import UserModel from '../models/User';
import auth from '../../config/auth';

class SessionController {
  async store(req, res) {
    const { email, password } = req.body;

    const user = await UserModel.findOne({ where: { email } });
    if (!user) {
      return res.status(401).json({ error: 'unauthorized' });
    }

    if (!(await user.checkPassword(password))) {
      return res.status(401).json({
        error: 'Wrong Password, try again!',
      });
    }

    const { id, name } = user;

    return res.json({
      user: { id, name, email },
      token: jwt.sign({ id, name }, auth.secret, {
        expiresIn: auth.expiredIn,
      }),
    });
  }
}

export default new SessionController();
