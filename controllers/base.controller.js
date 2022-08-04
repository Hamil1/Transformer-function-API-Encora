class BaseController {
  constructor(transformerFunction) {
    this.transformerFunction = transformerFunction;
  }

  get = (req, res) => {
    res.send("Get: File");
  };
}

module.exports = BaseController;
