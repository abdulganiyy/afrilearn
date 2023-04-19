import * as mongoose from "mongoose";
import SubjectInterface from "./subject.interface";

const subjectSchema = new mongoose.Schema(
  {
    name: String,
    uri: String,
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    timestamps: true,
  }
);

const SubjectModel = mongoose.model<SubjectInterface & mongoose.Document>(
  "Subject",
  subjectSchema
);

export default SubjectModel;
