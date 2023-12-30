import { RequestHandler } from 'express';
import jwt from 'jsonwebtoken';
import { db } from '../lib/db.js';

export const signupController: RequestHandler = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required' });
  }

  try {
    const user = await db.user.create({
      data: {
        Email: email,
        Password: password,
        Status: true,
        ProfileId: 1,
      },
    });

    const token = jwt.sign(
      { email: user.Email, id: user.Id },
      process.env.ACCESS_TOKEN_SECRET as string,
    );
    return res.status(200).json({ user, token });
  } catch (error) {
    return res.status(500).json({ message: 'Error creating user' });
  }
};
