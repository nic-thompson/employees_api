import { Router } from 'express';
import * as handlers from './Employee.handler';

const employeesRouter = Router();
employeesRouter.get('/', handlers.getAll);

export default employeesRouter;
