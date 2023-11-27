import TaskModel from "../Models/task.js"

class TaskController {
    constructor(){
        this.taskModel = new TaskModel;
    }

    createTask = async (req, res)=> {
        try {
            const { body } = req;
            console.log(body);
            const newTask = await this.taskModel.createTask(body);
            console.log(newTask);
            res.send({message : newTask.message});
        } catch (error) {
            console.log('taskcontroller error');
            res.send(error);
        }
    }

    getTasks = async (req,res)=> {
        try{
            const userId = parseInt(req.params.id);

            if (isNaN(userId)) throw new Error();

            const tasks = await this.taskModel.findTasksOfCurrentUser(userId);
            // console.log("taskcontroller return : " + JSON.stringify([tasks]));
            res.send(tasks);
        }catch(error){
            res.json({ message: error });
        }
    };

    getTask = async (req, res)=>{
        try {
            const userId = parseInt(req.params.id);
            
            if (isNaN(userId)) throw new Error();
            const task = await this.taskModel.findTaskOfCurrentUser(userId);
            res.send(task);
        } catch (error) {
            res.json({ message: `message d'erreur : ${error}, ${error.statut}` });
        }
        // res.json({message : 'TaskController.one find current tast in controller'})
    };

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