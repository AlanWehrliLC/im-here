import AsyncStorage from "@react-native-async-storage/async-storage"
import { EVENT_NAME_COLLECTION } from "../storageConfig"

export async function eventNameEditCreate(nameEvent: string){
    try {
        await AsyncStorage.setItem(EVENT_NAME_COLLECTION, nameEvent)
    } catch (error) {
        throw error
    }
}