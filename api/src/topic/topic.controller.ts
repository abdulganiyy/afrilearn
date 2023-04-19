import { Router, Request, Response, NextFunction } from "express";
import topicModel from "./topic.model";
import Controller from "../interfaces/controller.interface";
import SubjectWithNameAlreadyExistsException from "../exceptions/SubjectWithNameAlreadyExistsException";

class TopicController implements Controller {
  public path = "/topics";
  private topicModel = topicModel;
  public router = Router();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes = () => {
    this.router.post(`${this.path}`, this.createTopic);
    this.router.get(`/subjects/:id${this.path}`, this.getTopicsBySubjectId);
    this.router.get(`${this.path}/:id`, this.getTopicById);
  };

  private createTopic = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const { name, description, videoUrl, subjectId } = req.body;

    try {
      if (await this.topicModel.findOne({ name })) {
        next(new SubjectWithNameAlreadyExistsException(name));
      }
      const topic = await this.topicModel.create({
        name,
        description,
        videoUrl,
        subjectId,
      });

      return res.status(201).json({ status: "success", topic });
    } catch (error) {
      next(new Error());
    }
  };

  private getTopicsBySubjectId = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const subjectId = req.params.id;
    try {
      const topics = await this.topicModel.find({ subjectId });

      return res.status(200).json({ status: "success", topics });
    } catch (error) {
      next(new Error());
    }
  };

  private getTopicById = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const topicId = req.params.id;
    try {
      const topic = await this.topicModel.findById(topicId);

      return res.status(200).json({ status: "success", topic });
    } catch (error) {
      next(new Error());
    }
  };
}

export default TopicController;
