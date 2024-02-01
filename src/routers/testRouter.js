import express from 'express';
import nameList from '../lib/format-list.js';

const router = express.Router();

router.get('/test', async (req, res) => {
  return res.status(200).json({
    status:  'Request works!',
    data: nameList,
  });
});

export { router as testRouter };
