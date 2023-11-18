import connectDB from '../config/db.js';

// connectDB();
console.log('connectDB model : ' + connectDB);

const userModel = {
  findCurrentUser: async (userId) => {
      try {
        // return {message : 'test'};
        console.log('model id : ' + userId);
      const [user] = await connectDB.promise().query("SELECT * FROM `users` WHERE id = ? ", [
        userId,
      ]);
      console.log('14 : ' + JSON.stringify(user[0].id));
      return user;
    } catch (error) {
      
      // return `utilisateur introuvable: ${error.message}, ${error}`;
      throw new Error(`utilisateur introuvable: ${error}`);
    }
  },
};

export default userModel;
