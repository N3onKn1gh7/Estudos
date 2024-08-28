import react from "react";
import { Text, StyleSheet, View, Image } from "react-native";

import Img from './assets/raposa.png';

export default function App () {
   return (
    <View style={ estilos.container }>

      <Text style={ estilos.titulo }>Raposa</Text>
      <Text style={ estilos.texto }>Mamífero da família Canidae</Text>
      <Image style={ estilos.img } source={ Img }/>
    </View>
  )
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4530b2'
  },
 titulo: {
  color: '#fff',
  fontSize:22,
 },

 texto: {
  color: '#a7abff'
 },
 
 img: {
  marginTop: 20,
  width: 150,
  height: 200,
 },

});