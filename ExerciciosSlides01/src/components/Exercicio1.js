import { View, Text, StyleSheet } from "react-native";
import React from "react";

const Exercicio1 = ({ nome }) => {
    return (
        <View style={styles.container}>
        <Text>Ola, {nome}</Text>
        </View>
    );
};

//* Cria os estilos CSS, salva em uma const e importa o conteúdo contêiner na View para ser renderizado
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 100
    }
});

export default Exercicio1;
