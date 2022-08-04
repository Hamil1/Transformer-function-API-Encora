const Router = require("express").Router;
const FileController = require("../../controllers/file.controller");
const transformerFunction = require("../../utils/transformerFunction");

const fileRouter = Router();
const fileController = new FileController(transformerFunction); //passing our transformer function to the controller

fileRouter.get("/", fileController.get);

module.exports = fileRouter;
