import GarageAdmin from "../models/GarageAdmin";
import Garage from "../models/Garage";

import v from "../helpers/Validation";
import hasher from "../helpers/Hasher";

import { IAny, IResponse } from "../interfaces";

import { saveSession, removePassword } from "./User";
import { getResponse } from "../helpers/response-wrap";

async function createGarageAdmin(body: any, req: any, res: any) {
  try {
    if (!req.files[0]) throw 'Please select company registration document or take photo';

    const { name, email, password, garageName, type, location, locationName, registrationNumber } = body;

    const loc = location.split(",");

    const garage = await Garage.add({
      name: garageName,
      registrationNumber,
      registrationDocument: req.files[0]?.filename,
      isRegistrationDocumentPhoto: req.files[0].mimetype == 'text/plain',
      locationName,
      location: {
        lat: parseFloat(loc[0]),
        lng: parseFloat(loc[1]),
      },
      type,
    });

    const admin = await GarageAdmin.add({
      name,
      email,
      garage: garage._id,
      password: await hasher.hash(password),
    });

    admin.garage = garage;

    saveSession.call(getResponse(res), removePassword(admin.toJSON()));

    req.successful = true;
  } catch (error) {
    console.log(error);
    
    throw error;
  }
  return this;
}

async function authGarageAdmin(body: any): Promise<IResponse> {
  try {
    const admin = await GarageAdmin.getByEmail(body.email);

    if (
      !admin ||
      (admin && !(await hasher.isSame(admin.password, body.password))) ||
      (admin && !admin.garage) || (admin && admin.garage && !admin.garage.isVerified)
    )
      throw "Email address or password is incorrect";

    saveSession.call(this, removePassword(admin.toJSON()));

    this.successful = true;
  } catch (error) {
    throw error;
  }
  return this;
}

async function getEmployees(_: any, user: any) : Promise<IResponse> {
  try {
    this.employees = await GarageAdmin.getByGarage(user.garage);

    this.successful = true;
  } catch (error) {
    throw error;
  }
  return this;
}

export default { createGarageAdmin, authGarageAdmin, getEmployees };
