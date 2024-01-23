import bcrypt from 'bcrypt';
import { RequestHandler } from 'express';
import { db } from '../lib/db.js';

import { generateToken } from '../lib/utils.js';

export const loginController: RequestHandler = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required' });
  }

  try {
    const user = await db.user.findFirst({
      where: { Email: email },
    });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    bcrypt.compare(password, user.Password!, (err, result) => {
      if (err) {
        return res.status(500).json({ message: 'Incorrect password' });
      }

      if (result) {
        const token = generateToken(user);
        res.cookie('organizationId', user.OrganizationId);
        return res.status(200).json({ token, ...user });
      }

      return res.status(401).json({ message: 'Invalid password' });
    });
  } catch (error) {
    console.log('🛑 ~ loginController ~ error:', error);
    return res.status(500).json({ message: 'Error logging in' });
  }
};
