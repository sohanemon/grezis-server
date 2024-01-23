import express from 'express';

const root = express.Router();

root.get('/', (_req, res) => {
  const c = _req.cookies;
  res.status(200).json({
    c,
  });
});

export default root;
