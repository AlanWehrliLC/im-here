import { Text, TextInput, TextInputProps, TouchableOpacity, TouchableOpacityProps, View } from "react-native";
import { styles } from "./styles";

type EventNameEditType = TouchableOpacityProps & TextInputProps & {
    eventNameEdit: boolean
    eventName: string
    handleEventNameEdit: (eventState: boolean) => void
}

export function EventNameEdit({eventNameEdit, eventName, handleEventNameEdit, ...rest}: EventNameEditType){
    return (

        <>
            {eventNameEdit ?

                <View style={styles.form}>
                    <Text 
                    style={styles.eventName}
                    >
                        {eventName}
                    </Text>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={()=>(handleEventNameEdit(false))}
                        {...rest}
                    >
                        <Text>
                            Edit
                        </Text>
                    </TouchableOpacity>
                </View>

                :

                <View style={styles.form}>
                    <TextInput 
                        style={styles.input}
                        placeholder="Participant name"
                        placeholderTextColor="#6B6B6B"
                        {...rest}
                    />
                    <TouchableOpacity
                        style={styles.button}
                        onPress={()=>(handleEventNameEdit(true))}
                        {...rest}
                    >
                        <Text>
                            Edit
                        </Text>
                    </TouchableOpacity>
                </View>

            }

        </>
    )
}