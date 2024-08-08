import { Application } from "express";
import BaseController from "../controllers/base";

import {
  addService,
  getServicesByGarage,
  removeService,
} from "../../services/Service";

export default (app: any) => {
  app.post("/services/add", BaseController.wrapWithUser(addService));
  app.post("/services/remove", BaseController.wrap(removeService));

  app.post(
    "/services/get/by/garage",
    BaseController.wrapWithUser(getServicesByGarage)
  );
};
