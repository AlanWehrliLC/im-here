import AsyncStorage from "@react-native-async-storage/async-storage"
import { EVENT_NAME_COLLECTION } from "../storageConfig"

export async function eventNameEditGet(){
    try {
        const storage = await AsyncStorage.getItem(EVENT_NAME_COLLECTION)

        const nameEvent = storage ? storage : "Event Name"

        return nameEvent
    } catch (error) {
        throw error
    }
}