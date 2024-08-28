import react from "react";
import { Text, View, StyleSheet } from 'react-native'

export default function App () {
  return (
    <View style={ estilos.container }>
      <View style={ estilos.barraTitulo }>
         <Text style={ estilos.titulo }>Estilizando o aplicativo</Text>
         <Text style={ { color: 'white'} }>Utilizando estilo inline</Text>
      </View>
    </View>
  )
}

const estilos = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: 'rebeccapurple',
    alignItems: 'center',
    justifyContent: 'center',

  },

  titulo: {
    fontSize: 36,
    color: 'white'
  },

  barraTitulo: {
    backgroundColor: '#8FBC8F',
    height: 80,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

