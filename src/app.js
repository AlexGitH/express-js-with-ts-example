import express from 'express';
import { testRouter } from './routers/testRouter.js';

const app = express();

app.use(testRouter);

export { app };
