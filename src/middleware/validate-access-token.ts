import { RequestHandler } from 'express';
import jwt from 'jsonwebtoken';

export const validateAccessToken: RequestHandler = (req, res, next) => {
  const accessToken =
    req.headers.authorization?.split(' ')[1] || req.cookies.accessToken;

  if (!accessToken) {
    return res.status(401).json({ message: 'Access token not found' });
  }

  jwt.verify(
    accessToken,
    process.env.ACCESS_TOKEN_SECRET as string,
    (err: unknown) => {
      if (err) {
        return res.status(403).json({ message: 'Invalid access token' });
      }
      next();
    },
  );
};
