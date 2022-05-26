import { Router } from "express";
import { CreateCategoryController } from "../controllers/CreateCategoryController";
import { GetAllCategoriesController } from "../controllers/GetAllCategoriesController";
import { DeleteCategoryController } from "../controllers/DeleteCategoryController";
import { UpdateCategoryController } from "../controllers/UpdateCategoryController";
import { CreateVideoController } from "../controllers/CreateVideoController";
import { GetAllVideosController } from "../controllers/GetAllVideosController";
import { DeleteVideoController } from "../controllers/DeleteVideoController";
import { UpdateVideoController } from "../controllers/UpdateVideoController";
import { UserController } from "../controllers/UserController";
import { AuthController } from "../controllers/AuthController";

import authMiddleware from "../middlewares/authMiddleware";

const routes = Router();

routes.post("/categories", new CreateCategoryController().handle);
routes.get("/categories", new GetAllCategoriesController().handle);
routes.delete("/categories/:id", new DeleteCategoryController().handle);
routes.put("/categories/:id", new UpdateCategoryController().handle);

routes.post("/videos", new CreateVideoController().handle);
routes.get("/videos", new GetAllVideosController().handle);
routes.delete("/videos/:id", new DeleteVideoController().handle);
routes.put("/videos/:id", new UpdateVideoController().handle);

routes.post("/users", new UserController().store);
routes.post("/auth", new AuthController().authenticate);
routes.get("/users", authMiddleware, new UserController().index);

export { routes };
