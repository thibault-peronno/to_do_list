
const AuthController = {
    login: async (req, res) => {res.json({message:'AuthController.login in controller'})},

    register: async  (req, res) => {res.json({message:'AuthController.register in controller'})},

    logout: async (req, res) => {res.json({message:'AuthController.logout in controller'})},
}

export default AuthController;