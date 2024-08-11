
import express from 'express';
import { Router } from 'express';
import keyController from '../controllers/keyController.js';

const router = Router();


router.post('/generate', keyController.generateKeyPair);

export default router;
