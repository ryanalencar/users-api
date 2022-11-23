import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) { }

  handle(request: Request, response: Response): Response {
    try {
      const { user_id } = request.headers;
      const users = this.listAllUsersUseCase.execute({
        user_id: user_id as string,
      });

      return response.status(202).json(users);
    } catch (error) {
      console.log(error.message);
      return response.status(400).json({ error: error.message });
    }
  }
}

export { ListAllUsersController };
