import { View, Text, StyleSheet } from 'react-native';
import React, { useState } from 'react';

const Exercicio4 = () => {

    const itens = ["Escudo", "Bumerangue", "Espada", "Bombas"]

    return (
        <View style={styles.container}>
            <Text>Itens no Inventario:</Text>
            {itens.map((itens, i) => (
                <Text key={i}>{itens}</Text>
            ))}
        </View>
    );

};

const styles = StyleSheet.create({

    container: {
        alignItems: "center",
        justifyContent: "center",
        padding: 30,
    }

});

export default Exercicio4;