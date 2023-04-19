import * as mongoose from "mongoose";
import TopicInterface from "./topic.interface";

const topicSchema = new mongoose.Schema(
  {
    name: String,
    description: String,
    videoUrl: String,
    subjectId: {
      type: String,
      required: true,
    },
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    timestamps: true,
  }
);

const TopicModel = mongoose.model<TopicInterface & mongoose.Document>(
  "Topic",
  topicSchema
);

export default TopicModel;
