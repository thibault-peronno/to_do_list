import connectDB from "../config/db.js";
import TaskEntity from "../Entities/taskEntity.js";

class TaskModel {
    constructor(){
        this.taskEntity = new TaskEntity;
    }

    findTasksOfCurrentUser = async (userId) => {
        try{
            const [tasks] = await connectDB.promise().query("SELECT `id`, `description`, `isdone` FROM `tasks` WHERE user_id = ?", [userId]);
            console.log(JSON.stringify(tasks));

            // this.taskEntity.id = tasks[0].id;
            this.taskEntity.description =tasks[0].description;
            this.taskEntity.isdone = task[0].isdone;
            return this.userEntity;
        } catch(error){
            throw new Error(`Une erreur est survenue : ${error}`);
        }
    };
}

export default TaskModel;