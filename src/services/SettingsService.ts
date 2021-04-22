import { getCustomRepository } from "typeorm";
import { SettingsRepository } from "../repositories/SettingsRepository"

interface ISettingsCreate{
    chat: boolean;
    username: string;
}

class SettingsService{
    
    async create(
        {chat,username}:ISettingsCreate
    ) {
        const settingsRepository = getCustomRepository(SettingsRepository)

        //Select * from setting wherte user= user
        const userAlreadyExists = await settingsRepository.findOne({
            username
        });

        if (userAlreadyExists) {
            throw new Error("User already exists in our DB");
        }


        const settings = settingsRepository.create({
            username, chat
        });

        await settingsRepository.save(settings);


        return settings;

    }
}

export {SettingsService}