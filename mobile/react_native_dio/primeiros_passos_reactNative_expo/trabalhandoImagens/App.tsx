import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import simboloLigado from './assets/pictures/symbol-on.png'
import simboloDesligado from './assets/pictures/symbol-off.png'

export default function App() {
  const [ativado, setisAtivado] = useState(false)

  function simbolo() {
    console.log(ativado)
    setisAtivado((valorAntigo: boolean) => {
      return !valorAntigo
    })
    console.log(ativado)
  }

  return (
    <View style={ativado ? styles.containerLigado : styles.containerDesligado}>
      <TouchableOpacity onPress={simbolo}>
        <Image source={ativado ? simboloLigado : simboloDesligado}></Image>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  containerLigado: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerDesligado: {
    flex: 1,
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
