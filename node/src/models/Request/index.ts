import mongoose from "mongoose";
import QueryBuilder from "../../helpers/Query-builder";

import Request from "./Request";

export default new Request(mongoose, QueryBuilder);
