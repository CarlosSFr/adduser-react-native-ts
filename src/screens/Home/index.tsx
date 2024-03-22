import { Text, TextInput, TouchableOpacity, View, FlatList, Alert } from "react-native";
import { styles } from "./styles";
import { Participant } from "../../components/Participant";
import { useState } from "react";

export function Home() {
    //const participants = ["Carlos", "Shrek", "Cristiano", "Cleber", "Liz", "Giovanna", "Fiona", "Diego", "Rodrigo", "Burro do Shrek", "Robert"]

    const [ participants, setParticipants ] = useState<string[]>([])
    const [ participantName, setParticipantName ] = useState('')

    function handleParticipantAdd(){
        if(participants.includes(participantName)){
            return Alert.alert("Participante existente", "Esse participante já está na lista!");
        }
        
        setParticipants(prevState => [...participants, participantName])
        setParticipantName("");
    }

    function handleParticipantRemove(name: string){
        Alert.alert("Remover", `Remover o participante ${name}?`, [
            {
                text: "Sim",
                onPress: () => {
                    setParticipants(participants.filter(participant => participant !== name))
                    // Rodrigo fez: setParticipants( prevState =>  prevState.filter(participant => participant !== name))
                }
                
            },
            {
                text: "Não",
                style: "cancel",
            }
        ])
        
    }

  return (
    <View style={styles.container} >

        <Text style={styles.eventName} >Projeto React Native!</Text>

        <Text style={styles.eventDate} >21 de Março de 2024</Text>

        <View style={styles.form} >
            <TextInput 
            style={styles.input} 
            placeholder="Nome do usuário"
            placeholderTextColor="#6b6b6b"
            onChangeText={e => setParticipantName(e)} // pode colocar apenas setParticipantName
            value={participantName}
            />

            <TouchableOpacity style={styles.button} onPress={handleParticipantAdd} >
                <Text style={styles.buttonText} >+</Text>
            </TouchableOpacity>
        </View>

        <FlatList 
            data={participants}
            keyExtractor={item => item}
            renderItem={({item}) => (
                <Participant 
                    key={item}
                    name={item} 
                    onRemove={() => handleParticipantRemove(item)}
                />
            )}
        ListEmptyComponent={() => (
            <Text style={styles.listEmptyText}>
                Nenhum usuário chegou ao evento? Adicione participantes!
            </Text>
        )}
        />

    </View>
  );
}