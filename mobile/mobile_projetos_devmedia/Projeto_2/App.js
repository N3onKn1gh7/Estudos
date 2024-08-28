import React from 'react';
import { Image, StyleSheet, Text, View  } from 'react-native';

export default function App() {
  return (
    <View style={ estilos.container }>
      <Image
        source={ { uri: 'https://www.devmedia.com.br/arquivos/cursos/rn_exibindo_imagem/aula_3.png'} }
        style={ estilos.img }
      />

      <Text style={ estilos.paragrafo}>
        Queen é o nome da lendária banda britânica, criada em 1970 por Freddie Mercury e dois ex-músicos do Smile, Brian May e Roger Taylor. A banda começou com o hard rock, mas depois mudou seu estilo para pop-rock, o que tornou seu nome icônico.
      </Text>
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

  img: {
    width: 400,
    height: 200
  },

  paragrafo: {
    marginTop: 20,
    textAlign: 'center'
  }
})