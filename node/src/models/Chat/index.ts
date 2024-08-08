import mongoose from "mongoose"
import QueryBuilder from "../../helpers/Query-builder"

import Chat from "./Chat"

export default new Chat(mongoose, QueryBuilder);