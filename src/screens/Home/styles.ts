import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "black",
      padding: 24
    },
    eventName: {
      color: "white",
      marginTop: 48,
      fontWeight:"bold",
      fontSize: 24
    },
    eventDate: {
      color: "#6b6b6b",
      fontSize: 18
    },
    input: {
        backgroundColor: "#1f1e25",
        height: 56,
        borderRadius: 5,
        color: "#FFF",
        padding: 16,
        fontSize: 16,
        flex: 1,
    },
    buttonText: {
        color: "#fff",
        fontSize: 24,
    },
    button: {
        width: 56,
        height: 56,
        borderRadius: 5,
        backgroundColor: "#31cf67",
        alignItems: "center",
        justifyContent: "center",
    },
    form: {
        flexDirection: "row",
        width: "100%",
        gap: 12,
        marginTop: 36,
        marginBottom: 42,
    },
    listEmptyText: {
      color: "#fff",
      fontSize: 14,
      textAlign: "center",
    }
  })