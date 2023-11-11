
const TaskController = {
    getTasks: async (req,res)=> {res.json({message: 'TaskController.all find all tasks in controller'})},

    getTask: async (req, res)=>{res.json({message : 'TaskController.one find current tast in controller'})},

    updateTask: async (req, res)=>{res.json({message : 'TaskController.one update current tast in controller'})},

    deleteTask: async (req, res)=>{res.json({message : 'TaskController.delete current tast in controller'})}
}

export default TaskController;