import TaskEntity from "../Entities/taskEntity.js";
import Joi from "joi";

class TaskServise {
  constructor() {
    this.taskService = new TaskEntity();
  }

  validateNewTask = async (taskValue, createMod) => {
    console.log('task service', taskValue);
    const taskSchema = Joi.object({
      description : Joi.string().required(),
      isDone : Joi.boolean().required(),
      user_id : Joi.number().required(),
    });

    const { error } = await taskSchema.validateAsync(taskValue);

    if (error) {
      return error;
    }
    return taskValue;
  };
}

export default TaskServise;
