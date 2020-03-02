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

  async show(req, res) {
    const userExist = await UserModel.findOne({
      where: { email: req.params.email, provider: false },
    });

    if (!userExist) return res.status(400).json("This user doesn't exists!");

    const { id, nome, provider, email } = userExist;
    return res.json({ id, nome, email, provider });
  }

  async update(req, res) {
    return res.status(202).json('ok');
  }

  // async delete(req, res) {
  //   await UserModel.destroy({ where: { email: req.params.email } });
  //   return res.status(200).json('Foi');
  // }
}
export default new UserController();
