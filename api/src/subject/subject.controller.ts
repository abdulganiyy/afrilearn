import { Router, Request, Response, NextFunction } from "express";
import SubjectModel from "./subject.model";
import Controller from "../interfaces/controller.interface";
import SubjectWithNameAlreadyExistsException from "../exceptions/SubjectWithNameAlreadyExistsException";

class SubjectController implements Controller {
  public path = "/subjects";
  private subjectModel = SubjectModel;
  public router = Router();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes = () => {
    this.router.post(`${this.path}`, this.createSubject);
    this.router.get(`${this.path}`, this.getSubjects);
    this.router.get(`${this.path}/:id`, this.getSubjectById);
  };

  private createSubject = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const { name, uri } = req.body;

    try {
      if (await this.subjectModel.findOne({ name })) {
        next(new SubjectWithNameAlreadyExistsException(name));
      }
      const subject = await this.subjectModel.create({ name, uri });

      return res.status(201).json({ status: "success", subject });
    } catch (error) {
      next(new Error());
    }
  };

  private getSubjects = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const subjects = await this.subjectModel.find();

      return res.status(201).json({ status: "success", subjects });
    } catch (error) {
      next(new Error());
    }
  };

  private getSubjectById = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    return res.status(201).json({ status: "success" });
  };
}

export default SubjectController;
