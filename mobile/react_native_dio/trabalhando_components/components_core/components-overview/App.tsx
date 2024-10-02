import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, Text, View, Image, TextInput, Button, ScrollView, Switch } from 'react-native';
import React, { useState } from 'react';
import imgV from './assets/emotinominus.jpeg'

export default function App() {
  const [usuario, setUsuario] = useState('')
  const [ligado, setLigado] = useState(true)
  
  function handleSwitch(){
    setLigado(!ligado)
  }
  
  return (

    <ScrollView>
      <View style={[styles.container, styles.border, { backgroundColor: 'black' }]}>
        <Switch style={styles.chave}value={ligado}
        onValueChange={handleSwitch}
        >
        </Switch>
        <Image
          source={imgV}
          style={{
            display:ligado ? 'flex': 'none',
            height: 1300,
            width: '100%',
            borderWidth: 6,
            borderColor: 'lightgreen',
            borderRadius: 100
          }}
        />
        <TextInput
          style={styles.input}
          onChange={(text) => setUsuario(text.nativeEvent.text)}
          keyboardType='default'
          placeholder='Password'
          value={usuario}
        />

        <Button
          title='Enviar'
          onPress={() => { Alert.alert('valor atual', usuario) }}
        />


        <View
          onTouchStart={(evento) => {
            Alert.alert('TOQUE', 'clique iniciando')
          }}

          onTouchEnd={(evento) => {
            Alert.alert('TOQUE', 'Toque finalizado')
          }}
        >

          <Text style={styles.texto} >🖖</Text>

        </View>
        <Text
          selectable={false}
          onPress={() => { console.log("pressionado") }}
          onLongPress={() => { console.log("pressionamento longo") }}
        >Birina</Text>
        <StatusBar style="auto" />

        <Text style={[styles.texto, styles.border, { textAlign: 'center', paddingTop: 25 }]}>
          11/05
        </Text>


        <Text>
          <Text>Remember, </Text>
          <Text> Remember </Text>
        </Text>
        <View>
          <Text>Remember, Remember</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  border: {
    borderColor: 'darkgreen',
    borderWidth: 12,
    borderRadius: 15
  },
  texto: {
    fontSize: 20,
    fontWeight: 'bold',
    backgroundColor: 'grey',
    color: 'white',
    padding: 20,
    borderRadius: 25
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    color: 'black',
    backgroundColor: 'white'
  },

  chave: {
     marginTop: 50,
  }
});
