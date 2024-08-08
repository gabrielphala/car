import { Application } from "express";

import userRoutes from "./user";
import requestRoutes from "./request";
import serviceRoutes from "./service";
import garageRoutes from "./garage";
import chatRoutes from "./chat";

export default (app: Application): void => {
  userRoutes(app);
  requestRoutes(app);
  serviceRoutes(app);
  garageRoutes(app);
  chatRoutes(app);
};
