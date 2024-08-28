import React from 'react';
import { View, Image, Text } from 'react-native';

import Foto from '../../assets/Foto.png';
import estilos from './estilos';

export default function Card() {
  return (
    <View style={ estilos.container }>
      <View style={ estilos.box }>
        <Image source={ Foto } style={ estilos.fotoCapa } />
        <Text style={ estilos.nome }>Samuel Jackson</Text>
        <Text style={ estilos.paragrafo }>Ator e produtor norte-americano</Text>
      </View>
    </View>
  );
}