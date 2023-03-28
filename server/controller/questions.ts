import { NextFunction, Request, Response } from "express"
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export const getAllQuestions = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const questions = await prisma.question.findMany({})
        res.status(200).json(questions)

    } catch (error) {
        next(error)
    }
}