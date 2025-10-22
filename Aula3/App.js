import { View, Text } from "react-native";
import React from "react";
import LoginScreen from "./src/screens/LoginScreen";
import DetailsScreen from "./src/screens/DetailsScreen";

const App = () => {
    return (

        // <View style={{ flex: 1 }}>
        //     <LoginScreen />
        // </View>

        // <View style={{ flex: 1 }}>
        //     <LoginScreen />
        // </View>

        <View style={{ flex: 1 }}>
            <DetailsScreen />
        </View>

    );
};

export default App;
