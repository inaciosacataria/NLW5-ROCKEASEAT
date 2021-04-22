import { Request, Response } from "express";
import { SettingsService } from "../services/SettingsService";

class SettingsController {
    
    async create(request: Request, response: Response) {
        //criando o body
        const body = request.body
        //destruturacao
        const { chat, username } = request.body;

        const settingsService = new SettingsService();
        
        try {
            const settings = await settingsService.create({ chat, username });

            return response.json(settings)
        } catch (err) {
            return response.status(400).json({
                Message:err.message
            });
        }
    }
}

export{SettingsController}