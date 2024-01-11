import { Response, Request, NextFunction } from 'express';

export async function getAll(req: Request, res: Response, next: NextFunction) {
  try {
    const allEmployees = [{ name: 'Nicolas' }];
    res.json(allEmployees);
  } catch (error) {
    next(error);
  }
}
