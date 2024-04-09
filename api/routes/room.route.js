import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
    res.send('comming from auth endpoint');
});

export default router