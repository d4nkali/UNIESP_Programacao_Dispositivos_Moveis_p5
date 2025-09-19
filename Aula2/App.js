import { View, Text } from "react-native";
import React from "react";
import CartaoApresentacao from "./src/components/CartaoApresentacao";
import CartaoPerfil from "./src/components/CartaoPerfil";

const App = () => {
    return (
        <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
            {/* <CartaoApresentacao /> */}
            <CartaoPerfil />
        </View>
    );
};

export default App;
