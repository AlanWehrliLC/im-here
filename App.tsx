import { Text, View, StatusBar, StyleSheet } from "react-native";

export default function App(){
  return (
    <>
      <StatusBar />
      <View style={styles.container}>
        <Text style={styles.textTitle}>Hello World</Text>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#131016",
  },
  textTitle: {
    color: "#FDFCFE",
    fontSize: 25,
  },
})