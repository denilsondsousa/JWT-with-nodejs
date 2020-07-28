import { Router } from "express";
import UserController from "./controllers/UserController";
import SessionController from "./controllers/SessionController";

import authMiddleware from "./middlewares/auth";

const routes = Router();

routes.post("/users", UserController.store);
routes.post("/sessions", SessionController.store);

routes.use(authMiddleware);
routes.get("/authenticated", (req, res) => res.send());
export default routes;
