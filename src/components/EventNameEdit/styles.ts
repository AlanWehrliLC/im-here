import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    eventName: {
      flex:1,
        color: "#FDFCFE",
        fontSize: 25,
        fontWeight: "bold",
    },
    form:{
        width: "100%",
        flexDirection: "row",
        paddingTop: 34,
        paddingBottom: 44,
        marginTop: 40,
        alignItems: "center"
        
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
})