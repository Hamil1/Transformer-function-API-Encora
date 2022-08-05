const Router = require("express").Router;
const FileController = require("../../controllers/file.controller");
const transformerFunction = require("../../utils/transformerFunction");

const fileRouter = Router();
const fileController = new FileController(transformerFunction); //passing our transformer function to the controller

// FILE FUNCTION API ROUTES
fileRouter.get("/file", fileController.get);
fileRouter.post("/file", fileController.post);

module.exports = fileRouter;
