import React from "react";
import { View, Text } from "react-native";
import estilo from "../styles/Grafico";


export default function Grafico(props) {

    return (
        <View style={estilo.grafico}>
            <View style={[estilo.graficoBarra, { width: props.porcentagem + "%" }]}>
                <Text style={estilo.graficoTexto}>
                    {props.porcentagem + "%"}
                </Text>
            </View>
        </View>
    );

}