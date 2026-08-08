import express from 'express';
import {login, dashboard, logout} from '../controllers/authController.js';
import {getNote, setNote, deleteNote} from '../controllers/cacheController.js';
import {verifyToken} from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/login', login);
router.get('/dashboard', verifyToken, dashboard);
router.get('/note', verifyToken, getNote);
router.post('/note', verifyToken, setNote);
router.delete('/note', verifyToken, deleteNote);
router.post('/logout', logout);

export default router;