import Model from "../Model";

import { Types } from "mongoose";

export default class Admin extends Model {
  constructor(mongoose, QueryBuilder) {
    const schema = new mongoose.Schema({
      name: { type: String },
      email: { type: String, required: true },
      password: { type: String },
      isDeleted: { type: Boolean, default: false },
      createdAt: { type: Date, default: Date.now },
    });

    super(mongoose, "Admin", QueryBuilder, schema);
  }

  getByEmail(email: string) {
    return this.model.findOne({
      condition: { email },
    });
  }
}
