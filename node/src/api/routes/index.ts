import { Application } from "express";

import userRoutes from "./user";
import adminRoutes from "./admin";
import requestRoutes from "./request";
import serviceRoutes from "./service";
import garageRoutes from "./garage";
import chatRoutes from "./chat";
import paymentRoutes from "./payments";

export default (app: Application): void => {
  userRoutes(app);
  adminRoutes(app);
  requestRoutes(app);
  serviceRoutes(app);
  garageRoutes(app);
  chatRoutes(app);
  paymentRoutes(app);
};
