import { Router } from "express";

const routes = new Router();

routes.use((req, res, next) => {
  const { nome } = req.query;

  req.name = nome;
  return next();
});

routes.get("/opa", (req, res) => {
  return res.json({ message: `Axt ${req.name}` });
});

export default routes;
