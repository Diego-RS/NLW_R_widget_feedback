import express  from "express";
import { prisma } from "./prisma";
import nodemailer from "nodemailer"

export const routes = express.Router()

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "4cfccb8045a659",
      pass: "eec06804f3d29d"
    }
  });

    routes.post('/feedbacks', async (req, res) => {
        const { type, comment, screenshot } = req.body;

        const prismaFeedbacksRepository = new PrismaFeedbacksRepository
        const submitFeedbackUseCase = new SubmitFeedbackUseCase()
     
         await transport.sendMail({
             from: 'Equipe Feedget <1@2.com>',
             to: 'Any <3@4.com>',
             subject: 'Novo Feedback',
             html: [
                `<div style="font-family: sans-serif; font-size: 16px; color: #111;">`,
                 `<p>Tipo de Feedback: ${req.body.type}</p>`,
                 `<p>Comentário: ${req.body.comment}</p>`,
                `</div>`,
             ].join('\n')
         })
     
     
         return res.status(201).json({data: feedback});
     });
