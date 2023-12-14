import express from 'express';

const app = express.Router();

app.get('/', (req, res) =>
  res.status(200).json({
    message: 'Welcome to express-ts',
  }),
);

app.post('/', (req, res) => {
  res.status(200).json({
    message: 'Response from express-ts',
    request: req.body,
  });
});

export default app;
