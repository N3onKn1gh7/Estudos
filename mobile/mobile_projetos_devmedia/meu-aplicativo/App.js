import React from "react";
import { View, StyleSheet, Text } from "react-native";


export default function App() {
  return (
    <View style = { estilos.container}>
      <Text style={ estilos.texto }>Hello World</Text>
      <Text>Criado por DevMedia</Text>
     </View> 
  );
}


const estilos = StyleSheet.create({
  container: {
    backgroundColor: 'lightblue',
    flex: 1,
    justifyContent: 'center',
    alignItems: "center"
  },
  
  texto: {
    marginTop: 20,
    fontSize: 36,
  }
});














































