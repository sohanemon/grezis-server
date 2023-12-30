import { RequestHandler } from 'express';
import { db } from '../lib/db.js';
import { generateToken } from '../lib/utils.js';

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
      },
    });

    const token = generateToken(user);

    return res.status(200).json({ token });
  } catch (error) {
    console.log('🛑 ~ signupController ~ error:', error);
    return res.status(500).json({ message: 'Error creating user' });
  }
};
