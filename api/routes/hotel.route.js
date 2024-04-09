import express from 'express';
const router = express.Router();
import Hotel from '../models/Hotel.js'
import { createHotel, deleteHotel, getHotel, getHotels, updateHotel } from '../controllers/hotel.controller.js'
import { createError } from '../utils/error.js';
import { verifyAdmin } from '../utils/verifyToken.js';

router.post('/',verifyAdmin, createHotel);
router.put('/:id',verifyAdmin, updateHotel);
router.delete('/:id',verifyAdmin, deleteHotel);
router.get('/:id', getHotel);
router.get('/', getHotels);

export default router