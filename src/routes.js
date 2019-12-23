import { Router } from 'express';
import UserController from './app/controllers/UserController';

const routes = new Router();

routes.use((req, res, next) => {
  const { nome } = req.query;

  req.name = nome;
  return next();
});

routes.get('/opa', (req, res) => res.json({ message: `Axt ${req.name}` }));

routes.post('/users', UserController.store);

export default routes;
