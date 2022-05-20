import { Request, Response } from "express";
import { GeetAllVideosService } from "../services/GetAllVideosService";

export class GetAllVideosController {
  async handle(request: Request, response: Response) {
    const service = new GeetAllVideosService();

    const videos = await service.execute();

    return response.json(videos);
  }
}
