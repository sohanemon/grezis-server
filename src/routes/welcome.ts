import express from 'express';

const root = express.Router();

root.get('/', (req, res) =>
  res.status(200).json({
    message: 'Welcome to express-ts',
  }),
);

export default root;
