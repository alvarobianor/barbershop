import UserModel from '../models/User';

class UserController {
  async store(req, res) {
    const userExist = await UserModel.findOne({
      where: { email: req.body.email },
    });
    if (userExist) {
      return res.status(400).json({ error: 'deu ruim' });
    }
    const { id, name, email, provider } = await UserModel.create(req.body);
    return res.json({
      id,
      name,
      email,
      provider,
      message: 'User created!',
    });
  }
}
export default new UserController();
