import express from 'express';
import {login, getProfile, logout} from '../controllers/authController.js';
import {setCache, getCache} from '../controllers/cacheController.js';
import {varifyToken} from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/profile', varifyToken, getProfile);
router.get('/cache', varifyToken, getCache);
router.post('/login', login);
router.post('/cache', varifyToken, setCache);
router.post('/logout', varifyToken, logout);

export default router;