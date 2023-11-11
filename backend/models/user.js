import connectDB from '../config/db.js';

// connectDB();
// console.log(DB);

const userModel = {
  findCurrentUser: async (userId) => {
      try {
        // return {message : 'test'};
        console.log(userId);
      const [user] = await connectDB.query("SELECT * FROM `user` WHERE id = ? ", [
        userId,
      ]);

      return user;
    } catch (error) {
      
      throw new Error(`utilisateur introuvable: ${error}`);
    }
  },
};

export default userModel;
