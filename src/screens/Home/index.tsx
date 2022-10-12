import { View, Text } from "react-native";
import {styles} from "./styles";

export function Home(){
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
        </View>
    )
}