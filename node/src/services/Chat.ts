import { IResponse } from "../interfaces";
import Chat from "../models/Chat";

export async function send(body, user) {
  try {
    let driver = user.garage ? body.receiverId: user._id;
    let admin = !user.garage ? body.receiverId: user._id;

    await Chat.add({
      driver,
      admin,
      message: body.message,
      sender: user.garage ? 'admin' : 'user'
    });

    this.successful = true;
  } catch (e) {
    throw e;
  }

  return this;
}

export async function getAll(body, user) {
  try {
   this.messages = user.garage ? await Chat.getForAdmin(user._id, body.receiver): await Chat.getForDriver(user._id, body.receiver);

    this.successful = true;
  } catch (e) {
    throw e;
  }

  return this;
}
