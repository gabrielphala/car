import Payment from "../models/Payment";

export async function getAll() {
  try {
    this.payments = await Payment.getAll();
  } catch (e) {
    throw e;
  }

  return this;
}