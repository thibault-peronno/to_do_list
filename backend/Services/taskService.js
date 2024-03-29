import TaskEntity from "../Entities/taskEntity.js";
import Joi from "joi";

class TaskServise {
  constructor() {
    this.taskService = new TaskEntity();
  }

  validateNewTask = async (taskValue, createMod) => {
    const taskSchema = Joi.object({
      description: Joi.string().required().messages({
        "any.required": "Votre description est obligatoire",
        "string.base": "Votre description doit être une chaine de caractère",
        "string.empty": "Votre description est obligatoire",
      }),
      isDone: Joi.boolean().required().messages({
        "any.required": "Nous devons savoir si la tâche est finie",
        "boolean.base": "la propriété isDone doit être un boolean",
      }),
      user_id: Joi.number().required().messages({
        "any.required": "l'id de l'utlisateur est requis",
        "number.base": "la valeur doit être un nombre",
      }),
    });
    const { error } = await taskSchema.validate(taskValue, {
      abortEarly: false,
    });
    if (error) {
      throw error;
    }
    return taskValue;
  };

  validateUpdateTask = async (taskValue, createMod) => {
    const taskSchema = Joi.object({
      id: Joi.number().required().messages({
        "any.required": "L'id est obligatoire pour modifier la bonne tâche",
        "number.base": "la valeur doit être un nombre",
      }),
      description: Joi.string().messages({
        "string.base": "Votre description doit être une chaine de caractère",
        "string.empty": "Votre description est obligatoire",
      }),
      isDone: Joi.boolean().messages({
        "boolean.base": "la propriété isDone doit être un boolean",
      }),
    });

    const { error } = await taskSchema.validate(taskValue);
    if (error) {
      return error.message;
    }
    return taskValue;
  };
}

export default TaskServise;
