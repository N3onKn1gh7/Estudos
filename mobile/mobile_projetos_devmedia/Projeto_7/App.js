import react from "react";
import { Text, View, StyleSheet, Image } from "react-native";

import MobileImg from './assets/mobile-img.png';
import BackendImg from './assets/backend-img.png';
import FullStackImg from './assets/fullstack-img.png';


export default function App () {
  return (
    <View style={ estilos.container }>
      
      <View style={ estilos.card }>
        <Text style={ estilos.titulo }>Mobile Developer</Text>
        <Text style={ estilos.texto }>Michonne Hawthorne</Text>
        <Image style={ estilos.img } source={ MobileImg }/>
      </View>

      <View style={ estilos.card }>
        <Text style={ estilos.titulo }>Backend Developer</Text>
        <Text style={ estilos.texto }>Elijah Price</Text>
        <Image style={ estilos.img } source={ BackendImg }/>
      </View>

      <View style={ estilos.card }>
        <Text style={ estilos.titulo }>Full Stack Developer</Text>
        <Text style={ estilos.texto }>Chuck Norris</Text>
        <Image style={ estilos.img } source={ FullStackImg }/>
      </View>
    </View>
  )
}

const estilos = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#dbe9f8'
  },

  card: {
    backgroundColor: '#5450d6',
    width: 300,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '2d1f76',
    paddingVertical: 15,
    paddingHorizontal: 25,
    marginBottom: 20  
  },

  titulo: {
    color: '#fff',
    fontSize: 18
  },

  texto: {
    color: '#a7abff',
    marginBottom: 10,
  },

  img: {
    width: 50,
    height: 50,
    borderRadius: 75,
    borderColor: "#fff",
    borderRightWidth: 2
  },
});