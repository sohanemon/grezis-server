import express from 'express';
import routeHandlers from '../handler.js';
import { setupErrorHandlers } from '../middleware/error-handlers.js';
import { setupHelpers } from '../middleware/helpers.js';
import { validateAccessToken } from '../middleware/validate-access-token.js';

const app = express();

// middleware must be at first
setupHelpers(app);
app.use('/api/:model', validateAccessToken);

// routes must be at middle
await routeHandlers(app);

// error handlers must be at last
setupErrorHandlers(app);

export default app;
