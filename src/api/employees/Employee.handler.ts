import { Response, Request, NextFunction } from 'express';
import { Employee } from './Employee.model';
import { EmployeeDataAccess } from './EmployeeDataAccess';

const dataAccess = new EmployeeDataAccess();

export async function getAll(
  req: Request,
  res: Response<Employee[]>,
  next: NextFunction
) {
  try {
    const allEmployees = await dataAccess.getAllEmployees();
    res.json(allEmployees);
  } catch (error) {
    next(error);
  }
}

export async function getById(
  req: Request<{ id: string }>,
  res: Response<Employee | string>,
  next: NextFunction
) {
  try {
    const id = req.params.id;
    const employee = await dataAccess.getEmployeeById(id);
    if (employee) {
      res.status(200).json(employee);
    } else {
      res.status(404).send(`Employee with id ${id} not found.`);
    }
  } catch (error) {
    next(error);
  }
}

type ObjectWithId = {
  id: string;
};

export async function addEmployee(
  req: Request<{}, ObjectWithId, Employee>,
  res: Response<ObjectWithId>,
  next: NextFunction
) {
  try {
    const employeeId = await dataAccess.addEmployee(req.body);
    res.json({
      id: employeeId,
    });
  } catch (error) {
    next(error);
  }
}
