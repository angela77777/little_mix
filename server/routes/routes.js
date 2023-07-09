import express from 'express'
import { getSongs } from '../controllers/songController.js'

//Router to handle paths
const router = express.Router()

// Paths
router.get('/songs', getSongs)

export default router