import { Router } from 'express';
let router = Router();
import v1 from './v1/file.route';

// TRANSFORMER FUNCTION API ROUTES

//root route
router.get('/api', (req, res) => {
    res.send('Transformer API working...');
});

// V1 API routes
router.use('/api/v1', v1);

export default router;