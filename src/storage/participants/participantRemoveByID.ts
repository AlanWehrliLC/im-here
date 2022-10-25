import AsyncStorage from "@react-native-async-storage/async-storage"

import { PARTICIPANTS_COLLECTION } from "../storageConfig"

import {participantsGetAll} from "./participantGetAll"

export async function participantRemoveByName(participantDeleted: string){
    try {
        const storedParticipants = await participantsGetAll()
        const participants = storedParticipants.filter(participant => participant.id !== participantDeleted)

        await AsyncStorage.setItem(PARTICIPANTS_COLLECTION, JSON.stringify(participants))
    } catch (error) {
        throw error
    }
}