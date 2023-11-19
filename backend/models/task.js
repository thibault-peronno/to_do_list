import connectDB from "../config/db.js";
import TaskEntity from "../Entities/taskEntity.js";

class TaskModel {
    constructor(){
        this.taskEntity = new TaskEntity;
    }
}

export default TaskModel;