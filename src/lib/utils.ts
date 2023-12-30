import jwt from 'jsonwebtoken';
import { db } from './db.js';

export function checkModelExistence(model: string, res: any) {
  if (model in db === false) {
    return res
      .status(400)
      .json({ error: `Model ${model.toUpperCase()} does not exist` });
  }
}

export function generateToken(user: { Id: number; Email: string | null }) {
  return jwt.sign(
    { email: user.Email, id: user.Id },
    process.env.ACCESS_TOKEN_SECRET as string,
  );
}
