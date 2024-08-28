import React from 'react';
import { View, Button, Image, Text } from 'react-native';
import logo from '../../assets/logo.jpg';
import styles from '../styles';

export default function TelaInicial (props) {
  return (
    <View style = { styles.container }>
      <Text>Star Wars ordem cronológica</Text>
      <Image source = { logo } style = { styles.imagem }/>

      <Text style = { styles.titulo }>
        Você sabe qual é a ordem cronológica da franquia Star Wars?
      </Text>

      <Text style = { styles.textos }>
        Os principais filmes da franquia estão divididos em trilogias. Clique no botão a seguir para conferir.
      </Text>

      <Button title="Ver 1ª Trilogia" onPress = { () => props.navigation.navigate("Trilogia 1") } color="#372d00" />
      <Button title="Ver 2ª Trilogia" onPress = { () => props.navigation.navigate("Trilogia 2") } color="#372d00" />
      <Button title="Ver 3ª Trilogia" onPress = { () => props.navigation.navigate("Trilogia 3") } color="#372d00" />
    </View>
  )
}