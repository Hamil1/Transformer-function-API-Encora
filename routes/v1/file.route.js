import { Router } from 'express';
import FileController from '../../controllers/file.controller'
import transformerFunction from '../../utils/transformerFunction'

const fileRouter = Router();
const fileController = new FileController(transformerFunction);//passing our transformer function to the controller

fileRouter.get('/', fileController.get);

export default fileRouter;