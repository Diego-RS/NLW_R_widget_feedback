import { prisma } from "../prisma";
import { FeedbackCreateData, FeedbacksRepository } from "./fedbacks-repository";

export class PrismaFeedbacksRepository implements FeedbacksRepository {
    create(data: FeedbackCreateData) {
    await prisma.feedback.create({
        data: {
            type: data.type,
            comment: data.comment,
            screenshot: data.screenshot,
        }
        
            })

}
}