import mongoose from "mongoose";
import QueryBuilder from "../../helpers/Query-builder";
import parseRegex from "regex-parser"

import Service from "./Service";

export default new Service(mongoose, QueryBuilder, parseRegex);
