export default class FileController{
  //I'm using DI here, so we can change the transformerFunction whenever we want it :)
  constructor(transformerFunction){ 
    this.transformerFunction = transformerFunction;
  }

  get = (req, res) => {
    res.send("Get: File");
  }
}