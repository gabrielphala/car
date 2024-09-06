import { Application } from "express";

import BaseController from "../controllers/base";
import {
  add,
  accept,
  decline,
  getRequestsByGarage,
  getRequestsByUser,
  assignEmployee,
  getById,
  getAll,
  updatePay,
} from "../../services/Request";

export default (app: any) => {
  app.post("/requests/add", BaseController.wrapWithUser(add));
  app.post("/requests/accept/one", BaseController.wrapWithUser(accept));
  app.post("/requests/assign/employee", BaseController.wrapWithUser(assignEmployee));
  app.post("/requests/decline/one", BaseController.wrapWithUser(decline));
  app.post(
    "/requests/get/by/user",
    BaseController.wrapWithUser(getRequestsByUser)
  );
  app.post(
    "/requests/get/by/garage",
    BaseController.wrapWithUser(getRequestsByGarage)
  );
  app.post(
    "/requests/get",
    BaseController.wrapWithUser(getAll)
  );
  app.post(
    "/requests/get/by/id",
    BaseController.wrap(getById)
  );

  app.post("/request/update/pay", BaseController.wrap(updatePay))
};
