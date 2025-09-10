import { View, Text, TextInput, StyleSheet } from "react-native";
import React from "react";
import { useState } from "react";

const Exercicio3 = () => {

    const [texto, setTexto] = useState();

    return (
        <View style={styles.container}>
            <Text>Qual o seu mes do seu Aniversario</Text>
            <TextInput style={styles.campoTexto} value={texto} onChangeText={setTexto}></TextInput>
            <Text>Mes de Aniversario: {texto}</Text>
        </View>
    );

};

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
    },

    campoTexto: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: 'blue',
    }

});

export default Exercicio3;
