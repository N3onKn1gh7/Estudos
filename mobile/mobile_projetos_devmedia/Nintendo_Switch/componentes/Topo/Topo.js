import React from "react";
import { View, Text, Image } from "react-native";

import Capa from '../../assets/img1.png';
import estilos from "./estilosTopo";

export default function Topo() {
    return(
        <View style={ estilos.containerTopo }>
            <Image source={ Capa } style={ estilos.topoImg } />
            <Text style={ estilos.topoTitulo }>Nintendo Switch</Text>
        </View>
    )
}

