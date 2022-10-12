import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
      flex: 1,
      backgroundColor: "#131016",
      paddingLeft: 24,
      paddingRight: 24,
    },
    eventName: {
      color: "#FDFCFE",
      fontSize: 25,
      fontWeight: "bold",
      paddingTop: 42,
    },
    eventDate: {
      color: "#6B6B6B",
      fontSize: 16,
    },
    form:{
        width: "100%",
        flexDirection: "row",
        paddingTop: 34,
        paddingBottom: 44
    },
    input: {
        flex: 1,
        height: 56,
        backgroundColor: "#1F1E25",
        borderRadius: 5,
        color: "#FDFCFE",
        padding: 16,
        fontSize: 16,
        marginRight: 7,
    },
    button: {
        width: 56,
        height: 56,
        borderRadius: 4,
        backgroundColor: "#31CF67",
        alignItems: "center",
        justifyContent: "center",
    },
    buttonText: {
        color: "#FFFFFF",
        fontSize: 24,

    },
    participants: {
      color: "#FDFCFE",
      fontSize: 24,
      marginBottom: 16,
    }
  })
