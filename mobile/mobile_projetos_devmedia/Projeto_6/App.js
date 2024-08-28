import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import Img from './assets/bart-img.png';

export default function App () {
   return (
    <View style={ estilos.container }>
      <Text style={ estilos.titulo }>Os Simpsons</Text>
      <Image style={ estilos.img } source={ Img }/>
      <Text style={ estilos.texto }>Bart o filho mais velho</Text>
    </View>
   )
}

const estilos = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#feda0a'
  },

  titulo: {
    color: '#000',
    marginBottom: 20,
    fontSize: 32,
  },

  texto: {
    color: '#000',
    marginBottom: 20,
    fontSize: 20,
  },

  img: {
    width: 150,
    height: 150,
    marginBottom: 10,
    borderRadius: 75,
    borderColor: '#000',
    borderWidth: 2
  },
});
