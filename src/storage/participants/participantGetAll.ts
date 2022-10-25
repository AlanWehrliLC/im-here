import AsyncStorage from "@react-native-async-storage/async-storage"
import { PARTICIPANTS_COLLECTION } from "../storageConfig"

interface ParticipantProp {
    id: string
    name: string
}

export async function participantsGetAll(){
    try {
        const storage = await AsyncStorage.getItem(PARTICIPANTS_COLLECTION)
        
        const participants: ParticipantProp[] = storage ? JSON.parse(storage) : []
    
        return participants
    } catch (error) {
        throw error
    }
}