import express from 'express'
import{
    homeController,
    aboutController,
    contactController,
    servicesController,
    notFoundController,
    deshboardController
} from '../controllers/apiControllers.js'
import { loginController } from '../controllers/authControllers.js'
import { verifyToken } from '../middleware/middleware.js';
//Making A router by Express
const router = express.Router();

// Define All Routing Controllers
router.get('/', homeController)
router.get('/about', aboutController)
router.get('/contact', contactController)
router.get('/services', servicesController)
router.get('/dashboard', verifyToken, deshboardController)
//Add Login Controllres
router.post('/login',loginController)
router.use(notFoundController)

//Export Routers
export default router;