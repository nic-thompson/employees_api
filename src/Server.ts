import express, { NextFunction, Request, Response } from 'express';
import employeesRouter from './api/employees/Employee.route';
const port = 3000;
export class Server {
  private app = express();

  startServer() {
    this.app.use('/employees', employeesRouter);
    //this prints an error to the console only, rather than to the response too.
    this.app.use(
      (err: Error, req: Request, res: Response, next: NextFunction) => {
        console.error(err.stack);
        res.send(err.message);
        next();
      }
    );
    this.app.listen(port, () => {
      console.log(`Listening on port ${port}`);
    });
  }
}

new Server().startServer();
