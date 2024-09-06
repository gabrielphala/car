import Model from "../Model";

import { Types } from "mongoose";

export default class User extends Model {
  constructor(mongoose, QueryBuilder) {
    const schema = new mongoose.Schema({
      name: { type: String },
      email: { type: String, required: true },
      idDocument: { type: String },
      password: { type: String },
      isDeleted: { type: Boolean, default: false },
      createdAt: { type: Date, default: Date.now },
    });

    super(mongoose, "User", QueryBuilder, schema);
  }

  getByEmail(email: string) {
    return this.model.findOne({
      condition: { email },
    });
  }

  getDrivers() {
    return this.model.find({
      condition: { isDeleted: false },
    });
  }
}
