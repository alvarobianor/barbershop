import { Router } from 'express';
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';

const routes = new Router();

routes.use((req, res, next) => {
  const { nome } = req.query;

  req.name = nome;
  return next();
});

routes.get('/opa', (req, res) => res.json({ message: `Axt ${req.name}` }));
routes.get('/userA/:email', UserController.show);
//  routes.get('/userB/:email', UserController.delete);
routes.post('/users', UserController.store);
routes.post('/session', SessionController.store);

export default routes;
