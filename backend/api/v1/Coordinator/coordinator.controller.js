
class Coordinator{
  static async get(req,res,next){
    try {
      const {client}=req;
      const {}=req.params;
      // here we write redis client setter

    } catch (error) {
      return next(error);
    }
  }

  static async set(req,res,next){
    try{
      const {client}=req;
      const {}=req.params;
      // here we write redis client setter
    }catch(error){
      return next(error);
    }
  }
}


export default Coordinator;