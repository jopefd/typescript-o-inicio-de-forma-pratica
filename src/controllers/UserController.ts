import { Request, Response } from 'express'
import EmailService from '../services/EmailService'

const users = [
    { name: 'Joao', email: "joao@joao.com" }
]

export default {
    async index(req: Request, res: Response) {
        return res.json(users)
    },

    async create(req: Request, res: Response) {
        const emailService = new EmailService()

        emailService.sendMail({
            to: {
                name: "Joao",
                email: "joao@joao.com"
            },
            message: {
                subject: "ola",
                body: "olaola"
            }
        })
    }
}
