import connectDB from "../config/db.js";

class TaskModel {
    constructor(){}

    findTasksOfCurrentUser = async (userId) => {
        try{
            const [tasks] = await connectDB.promise().query("SELECT `id`, `description`, `isdone` FROM `tasks` WHERE user_id = ?", [userId]);
            console.log(JSON.stringify(tasks));           
            return tasks;
        } catch(error){
            throw new Error(`Une erreur est survenue : ${error}`);
        }
    };
}

export default TaskModel;