import Model from "../Model";

import { Types } from "mongoose";

export default class GarageAdmin extends Model {
  constructor(mongoose, QueryBuilder) {
    const schema = new mongoose.Schema({
      name: { type: String },
      email: { type: String, required: true },
      garage: { type: Types.ObjectId, ref: "Garage" },
      isSuper: { type: Boolean, default: false },
      password: { type: String },
      isDeleted: { type: Boolean, default: false },
      createdAt: { type: Date, default: Date.now },
    });

    super(mongoose, "GarageAdmin", QueryBuilder, schema);
  }

  getByEmail(email: string) {
    return this.model.findOne({
      condition: { email },
      populate: [['garage', '']]
    });
  }

  getByGarage (garage: string | Types.ObjectId) {
    return this.model.find({
      condition: { garage }
    });
  }

  getAll () {
    return this.model.find({
      condition: { isDeleted: false },
      populate: [['garage', '']]
    });
  }
}
