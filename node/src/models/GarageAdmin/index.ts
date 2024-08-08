import mongoose from "mongoose";
import QueryBuilder from "../../helpers/Query-builder";

import GarageAdmin from "./GarageAdmin";

export default new GarageAdmin(mongoose, QueryBuilder);
