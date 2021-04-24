import {  Router } from "express";
import { MessagesController } from "./controllers/MessagesController";
import { SettingsController } from "./controllers/SettingsController";
import { UsersController } from "./controllers/UsersController";

/**
 * Tipo de parametros
 * Routes Params = parametros de rota 
 * ex: localhost:3333/sttings/1- parametro de rota
 * Query = filtros e buscas
 * ex: localhost:3333/settings?id=1&username=inacio
 * body= obj
 * ex:{
 *      id:"a1",
 *     username:"inacio"
 *      }
 */

const settingsController = new SettingsController();
const usersController = new UsersController();
const messagesController = new MessagesController();
const routes = Router();

routes.post("/settings", settingsController.create);
routes.get("/settings/:username", settingsController.findByUsername);
routes.put("/settings/:username", settingsController.update);

routes.post("/users", usersController.create);
routes.post("/messages", messagesController.create);

routes.get("/messages/:id", messagesController.showByUser);

export {routes}