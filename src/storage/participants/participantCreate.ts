import AsyncStorage from "@react-native-async-storage/async-storage"
import { PARTICIPANTS_COLLECTION } from "../storageConfig"
import { AppError } from "../../utils/AppError"
import { participantsGetAll } from "./participantGetAll"

interface ParticipantProp {
    id: string
    name: string
}


export async function participantsCreate(newParticipants: ParticipantProp){
    try {
        const storedparticipants = await participantsGetAll()

        const participantsAlreadyExists = storedparticipants.includes(newParticipants)

        if (participantsAlreadyExists) {
            throw new AppError("There is already a participants registered with that name!")
        }

        const storage = JSON.stringify([...storedparticipants, newParticipants])

        await AsyncStorage.setItem(PARTICIPANTS_COLLECTION, storage)
    } catch (error) {
        throw error
    }
}