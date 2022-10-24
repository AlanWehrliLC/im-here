import 'react-native-get-random-values'
import {v4 as uuidV4} from "uuid"

import {useEffect, useState} from "react"
import { View, Text, TextInput, TouchableOpacity, FlatList, Alert } from "react-native";
import { Participant } from "../../components/Participant";
import {styles} from "./styles";
import { participantsGetAll } from '../../storage/participants/participantGetAll';
import { participantsCreate } from '../../storage/participants/participantCreate';
import { AppError } from '../../utils/AppError';
import { participantRemoveByName } from '../../storage/participants/participantRemoveByID';

interface ParticipantProp {
    id: string
    name: string
}


export function Home(){
    const [participantName, setParticipantName] = useState("")
    const [participants, setParticipants] = useState<ParticipantProp[]>([])

    async function fetchParticipants(){
        try {
          const data = await participantsGetAll()
          setParticipants(data)
        } catch (error) {
          Alert.alert("Classes", "Could not load classes!")
        }
      }

    async function handleParticipantAdd(){
        const newParticipant = {
            id: uuidV4(),
            name: participantName
        }

        try {
            if (newParticipant.name.trim().length === 0) {
                return Alert.alert("New Participant", "Enter the participant name!")
            }

            await participantsCreate(newParticipant)
        } catch (error) {
            if (error instanceof AppError) {
                Alert.alert("New Participant", error.message)
            }else{
                Alert.alert("New Participant", "Could not create a new participant!")
                console.log(error)
            }
        } finally {
            fetchParticipants()
        }

        setParticipantName("")
    }

    async function removeParticipantFromStatus(id: string){

        try {
            await participantRemoveByName(id)
        } catch (error) {
            Alert.alert("Remove group", "Unable to remove group!")
        } finally {
            fetchParticipants()
        }

    }

    function handleParticipantRemove({id, name}: ParticipantProp){
        Alert.alert("Participating remover", `Do you want to remove the participant ${name}?`, [
            {
                text: "Yes",
                onPress: ()=>{removeParticipantFromStatus(id)}
            },
            {
                text: "No",
                style: "cancel"
            }
        ])
    }

    useEffect(()=>{
        fetchParticipants()
    },[])

    return (
        <View style={styles.container}>
            <Text 
                style={styles.eventName}
            >
                Event name
            </Text>

            <Text style={styles.eventDate}>
                Friday, November 4, 2022.
            </Text>

            <View style={styles.form}>
                <TextInput 
                    style={styles.input}
                    placeholder="Participant name"
                    placeholderTextColor="#6B6B6B"
                    onChangeText={setParticipantName}
                    value={participantName}
                />

                <TouchableOpacity 
                    style={styles.button}
                    onPress={handleParticipantAdd}
                >
                    <Text style={styles.buttonText}>
                        +
                    </Text>
                </TouchableOpacity>
            </View>

            <Text style={styles.participants}>Participants</Text>

            <FlatList 
                data={participants}
                keyExtractor={item => item.id}
                renderItem={({item})=>{
                    return <Participant 
                        name={item.name} 
                        onRemove={()=>{handleParticipantRemove(item)}} 
                    />
                }}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={()=>(
                    <>
                        <Text style={styles.listEmptyText}>
                            No one has arrived at the event yet?
                        </Text>

                        <Text style={styles.listEmptyText}>
                            Add participants to your attendance list.
                        </Text>  
                    </>
                )}
            />

        </View>
    )
}