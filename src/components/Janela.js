import React from "react";
import {View } from "react-native";

import estilo from "../styles/Janela";

export default function Janela(props) {

    return (
        <View style={estilo.janela}>
            {props.children}
        </View>
    );


}