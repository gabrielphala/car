import { Application } from "express";

import BaseController from "../controllers/base";
import {
  getAll,
} from "../../services/Payment";

export default (app: any) => {
  app.post(
    "/payments/get",
    BaseController.wrap(getAll)
  );
};
