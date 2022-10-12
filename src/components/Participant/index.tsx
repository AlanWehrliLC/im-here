import { Text, TouchableOpacity, View } from "react-native";

import {styles} from "./styles"

export function Participant(){
    function handleParticipantRemove(){

    }
    return (
        <View style={styles.container}>
            <Text style={styles.name}>
                Alan Wehrli
            </Text>

            <TouchableOpacity 
                style={styles.button}
                onPress={handleParticipantRemove}
            >
                <Text style={styles.buttonText}>
                    -
                </Text>
            </TouchableOpacity>
        </View>
    )
}