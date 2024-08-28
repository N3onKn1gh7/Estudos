import React from "react";
import { View, Text } from "react-native";

import estilos from './estilos';

export default function BarraTitulo() {
    return (
        <View style={ estilos.container }>
            <Text style={ estilos.titulo }>Ator Famoso</Text>
        </View>
    )
} 