import 'react-native-get-random-values'
import {v4 as uuidV4} from "uuid"

import {useState} from "react"
import { View, Text, TextInput, TouchableOpacity, FlatList, Alert } from "react-native";
import { Participant } from "../../components/Participant";
import {styles} from "./styles";

interface ParticipantProp {
    id: string
    name: string
}


export function Home(){
    const [participantName, setParticipantName] = useState("")
    const [participants, setParticipants] = useState<ParticipantProp[]>([])

    function handleParticipantAdd(){
        const newParticipant = {
            id: uuidV4(),
            name: participantName
        }
        setParticipants(oldState => [...oldState, newParticipant])
        setParticipantName("")
    }

    function removeParticipantFromStatus(id: string){
        const nonDeletedParticipants = participants.filter(participant => participant.id !== id)

        setParticipants(nonDeletedParticipants)
    }

    function handleParticipantRemove({id, name}: ParticipantProp){
        Alert.alert("Participating remover", `Do you want to remove the participant ${name}?`, [
            {
                text: "Yea",
                onPress: ()=>{removeParticipantFromStatus(id)}
            },
            {
                text: "No",
                style: "cancel"
            }
        ])
    }
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