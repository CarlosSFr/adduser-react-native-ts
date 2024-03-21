import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

export function Home() {

    function handleParticipantAdd(){
        console.log("Clicado");
    }

  return (
    <View style={styles.container} >

        <Text style={styles.eventName} >Rocketseat - React Native</Text>

        <Text style={styles.eventDate} >21 de Março de 2024</Text>

        <TextInput 
        style={styles.input} 
        placeholder="Nome do usuário"
        placeholderTextColor="#6b6b6b"
        />

        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd} >
            <Text style={styles.buttonText} >+</Text>
        </TouchableOpacity>

    </View>
  );
}