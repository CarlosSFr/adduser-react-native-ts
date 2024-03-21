import { Text, TextInput, TouchableOpacity, View, FlatList, Alert } from "react-native";
import { styles } from "./styles";
import { Participant } from "../../components/Participant";
import { useState } from "react";

export function Home() {

    const participants = ["Carlos", "Shrek", "Cristiano", "Cleber", "Liz", "Giovanna", "Fiona", "Diego", "Rodrigo", "Burro do Shrek", "Robert"]

    function handleParticipantAdd(){
        console.log("Botão adicionar");
    }

    function handleParticipantRemove(name: string){
        Alert.alert("Remover", `Remover o participante ${name}?`, [
            {
                text: "Sim",
                onPress: () => Alert.alert("Deletado!")
            },
            {
                text: "Não",
                style: "cancel",
            }
        ])
        //console.log(`Botão de remover o participante ${name}`)
    
        // const indexRemove = participants.findIndex(part => part == name);

        // participants.splice(indexRemove, 1)

        // return participants
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