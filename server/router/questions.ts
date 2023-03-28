import { getAllQuestions } from './../controller/questions';
import express from 'express'
const router = express.Router()

router.get('/questions', getAllQuestions)

export default router