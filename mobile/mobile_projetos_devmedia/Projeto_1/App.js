import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={ estilos.container }>
      <Text style={ estilos.texto }>Aprendendo a exibir uma imagem</Text>

      <Image
        source={ { uri: 'https://www.devmedia.com.br/favicon.png'} }
        style={ estilos.img }
      />

      <Text>Logo da DevMedia</Text>
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto: {
    fontSize: 22
  },
  img: {
    marginTop: 20,
    marginBottom: 10,
    width: 150,
    height: 150
  }
});