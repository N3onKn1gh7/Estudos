import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";

import Img from './assets/lua.png'

export default function App () {
  return (
    <View style={ estilos.container }>
      <Image style={ estilos.img } source={ Img } />

      <View style={ estilos.boxTexto }>
        <Text style={ estilos.titulo }>Lua</Text>
        <Text style={ estilos.texto }>A lua é o satélite natural do <Text style={ estilos.destaque }>planeta terra </Text>, distanciados por aproximadamente 384.405 Km. </Text>
      </View>
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems:  'center',
    backgroundColor: '#000',
    padding: 30,
  },

  img: {
    width: 100,
    height: 100,
    marginBottom : 50,

  },

  boxTexto: {
    borderColor: '#fff',
    borderWidth: 2,
    borderRadius: 20,
    borderStyle: 'dotted',
    width: 300,
    paddingVertical: 10,
    paddingHorizontal: 25,   
  },

  titulo: {
    color: '#fff',
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center'
  },

  texto: {
    color: '#fff',
    textAlign: 'center',
  },

  destaque: {
    fontStyle: 'italic',
    fontWeight: 'bold'
  }
});