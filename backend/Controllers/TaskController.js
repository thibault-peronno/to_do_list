import TaskModel from "../Models/task.js"

class TaskController {
    constructor(){
        this.taskModel = new TaskModel;
    }

    getTasks = async (req,res)=> {
        try{
            const userId = parseInt(req.params.id);

            if (isNaN(userId)) throw new Error();

            const tasks = await this.taskModel.findTasksOfCurrentUser(userId);
            console.log("usercontroller return : " + tasks);
            res.send(tasks);
        }catch(error){
            res.json({ message: `message d'erreur : ${error}, ${error.statut}` });
        }
    };

    getTask = async (req, res)=>{res.json({message : 'TaskController.one find current tast in controller'})};

    updateTask = async (req, res)=>{res.json({message : 'TaskController.one update current tast in controller'})};

    deleteTask = async (req, res)=>{res.json({message : 'TaskController.delete current tast in controller'})};
}


// const TaskController = {
//     getTasks: async (req,res)=> {res.json({message: 'TaskController.all find all tasks in controller'})},

//     getTask: async (req, res)=>{res.json({message : 'TaskController.one find current tast in controller'})},

//     updateTask: async (req, res)=>{res.json({message : 'TaskController.one update current tast in controller'})},

//     deleteTask: async (req, res)=>{res.json({message : 'TaskController.delete current tast in controller'})}
// }

export default TaskController;