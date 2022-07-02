
class Node{
  static async get(req,res,next){
    try {
      const {client}=req;
      console.log(":::::here",client);
      const {}=req.params;
      // here we write redis client setter

    } catch (error) {
      return next(error);
    }
  }

  static async set(req,res,next){
    try{
      const {client,body}=req;
      // const {}=req.params;
      // here we write redis client setter
    }catch(error){
      return next(error);
    }
  }
}


export default Node;