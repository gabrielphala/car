import { Application } from "express";

import BaseController from "../controllers/base";
import adminervices from "../../services/Admin";

export default (app: any) => {
  app.post("/a/sign-in", BaseController.wrap(adminervices.authAdminUser));
};
