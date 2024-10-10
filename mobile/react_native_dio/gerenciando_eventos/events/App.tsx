import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { helloDarthVader } from './src/actions'


export default function App() {

  async function handlerHelloWorld() {
    console.log("hello handler function")
  }

  async function handlerPress(id: number) {
    console.log("pressionado", id)
  }

  /*evento onPress*/

  /*Quatro maneiras de chamar funções 
    Inline para coisas curtas
    Apartada quando não precisa receber nenhum parametro
    inline quando vc precisa passar algum parametro para a função
    Modelo eum que vc precisa dar um export no arquivo onde esta a função e um import no arquivo principal
  */

  // return (
  //   <View style={styles.container}>
  //     <Text onPress={() => console.log("inline")}>Inline </Text> // 
  //     <Text onPress={handlerHelloWorld}>Handler Function </Text>
  //     <Text onPress={() => handlerPress(1)}>Handler Function With Parameters </Text>
  //     <Text onPress={helloDarthVader}>Another File </Text>
  //   </View>
  // );

  /*Evento pressIn, pressOut, onLongPress e onTextLayout*/

  return (
    <View style={styles.container}>
      <TextInput placeholder='Escreva algo'
        onChange={() => console.log('onChange Executado')}
        onChangeText={() => console.log('onChange Text acionado')}
        onFocus={() => console.log('Usuario focou nesse componente')}>
      </TextInput>
     
      <Text
        style={{ fontSize: 28 }} onPress={() => console.log('pressionado')}
        onPressIn={() => console.log('Press in acionado')}
        onPressOut={() => console.log('press out acionado')}
        onLongPress={() => console.log('LongPress Acionado')}
        onTextLayout={() => console.log('Texto no Layout')}>
        componente principal </Text>
    </View>
  );

}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
