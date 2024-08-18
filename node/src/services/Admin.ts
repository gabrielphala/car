import Admin from "../models/Admin";

import hasher from "../helpers/Hasher";

import { IResponse } from "../interfaces";
import { removePassword, saveSession } from "./User";

async function authAdminUser(body: any): Promise<IResponse> {
  try {
    const user = await Admin.getByEmail(body.email);

    if (!user || (user && !(await hasher.isSame(user.password, body.password))))
      throw "Email address or password is incorrect";

    saveSession.call(this, removePassword({
      isAdmin: true, ...user.toJSON()
    }));

    this.successful = true;
  } catch (error) {
    throw error;
  }
  return this;
}

export default { authAdminUser };
