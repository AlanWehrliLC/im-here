import { View, Text, TextInput, TouchableOpacity } from "react-native";
import {styles} from "./styles";

export function Home(){
    function handleParticipantAdd(){

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
        </View>
    )
}