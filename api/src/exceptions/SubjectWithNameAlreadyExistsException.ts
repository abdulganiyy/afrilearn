import HttpException from "./HttpException";

class SubjectWithNameAlreadyExistsException extends HttpException {
  constructor(name: string) {
    super(400, `Subject with email ${name} already exists`);
  }
}

export default SubjectWithNameAlreadyExistsException;
