import react from "react";
import { Text, View, StyleSheet, Image } from 'react-native';

import FundoImg from './assets/fundo.jpg';
import FotoImg from './assets/foto.jpg';

export default function App (){
  return (
    <View style={ estilos.container }>
      <Image style={ estilos.FundoImg } source={ FundoImg }/>
      <Image style={ estilos.FotoImg} source={ FotoImg }/>
    <View style={ estilos.container}>
      <Text style={ estilos.titulo }>Marcos Silva</Text>
      <Text style={ estilos.texto }>Bacharel em Engenharia de Software,Desenvolvedor FullStack, Tecnologias: C#, Java, JavaScript, HTML/CSS, React e ReactNative</Text>
      
    </View> 
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#011126'
  },

  FundoImg: {
    width: 400,
    height: 300,
    marginBottom: 20,
  },

  FotoImg: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },

  titulo: {
    fontSize: 22,
    marginBottom: 10,
    color: '#fff',
    
  },

  texto: {
    fontSize: 16,
    marginHorizontal: 15,
    color: '#fff',
    textAlign: 'center'
  }


});

