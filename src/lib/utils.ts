import { db } from './db.js';

export function checkModelExistence(model: string, res: any) {
  if (model in db === false) {
    return res
      .status(400)
      .json({ error: `Model ${model.toUpperCase()} does not exist` });
  }
}
