import { Request, Response } from "express";
import { GeetAllCategoriesService } from "../services/GetAllCategoriesService";

export class GetAllCategoriesController {
  async handle(request: Request, response: Response) {
    const service = new GeetAllCategoriesService();

    const categories = await service.execute();

    return response.json(categories);
  }
}
