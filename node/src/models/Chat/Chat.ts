import Model from "../Model";

import { Types } from "mongoose";

export default class Chat extends Model {
  constructor(mongoose, QueryBuilder) {
    const schema = new mongoose.Schema({
      driver: { type: Types.ObjectId },
      admin: { type: Types.ObjectId },
      request: { type: Types.ObjectId },
      message: { type: String, required: true },
      sender: { type: String, required: true },
      isDeleted: { type: Boolean, default: false },
      createdAt: { type: Date, default: Date.now },
    });

    super(mongoose, "Chat", QueryBuilder, schema);
  }

  getForAdmin (user: any, receiver: any, request: any) {
    return this.model.find({
      condition: {admin: user, driver: receiver, request}
    });
  }

  getForDriver (user: any, receiver: any, request: any) {
    return this.model.find({
      condition: {driver: user, admin: receiver, request}
    });
  }
}
