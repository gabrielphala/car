import mongoose from "mongoose";
import QueryBuilder from "../../helpers/Query-builder";

import Payment from "./Payment";

export default new Payment(mongoose, QueryBuilder);
