import Hasher from "../helpers/Hasher";
import Admin from "../models/Admin";

export default async () => {
  if (!(await Admin.exists({ email: 'superadmin@mail.com' })))
    await Admin.add({
      name: 'Douglas Dale',
      email: 'superadmin@mail.com',
      password: await Hasher.hash('Password123')
    })
}