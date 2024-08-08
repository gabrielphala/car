import { Application } from "express";

import BaseController from "../controllers/base";

import {
  getAll,
  send
} from "../../services/Chat"

import GarageServices from "../../services/Garage"

export default (app: any) => {
  app.post("/chat/send", BaseController.wrapWithUser(send));
  app.post("/chat/get", BaseController.wrapWithUser(getAll));
};
