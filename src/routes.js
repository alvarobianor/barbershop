import { Router } from 'express';
import User from './app/models/User';

const routes = new Router();

routes.use((req, res, next) => {
  const { nome } = req.query;

  req.name = nome;
  return next();
});

routes.get('/opa', (req, res) => res.json({ message: `Axt ${req.name}` }));

routes.post('/', async (req, res) => {
  const { _name, _email, _password, _provider } = req.body;
  const user = await User.create({
    name: _name,
    email: _email,
    password_hash: _password,
    provider: _provider,
  });
  return res.json(user);
});

export default routes;
