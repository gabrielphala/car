import Model from "../Model";

import { Types } from "mongoose";

export default class Payment extends Model {
  constructor(mongoose, QueryBuilder) {
    const schema = new mongoose.Schema({
      requester: { type: Types.ObjectId, ref: "User" },
      garage: { type: Types.ObjectId, ref: "Garage" },
      service: { type: String },
      price: { type: Number }
    });

    super(mongoose, "Payment", QueryBuilder, schema);
  }

  getAll() {
    return this.model.find({
      condition: { },
      populate: [["requester", "name"], ["garage", "name"]],

    });
  }
}
