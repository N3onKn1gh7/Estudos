import React from 'react';
import { Button, Text, View, Image } from 'react-native';
import styles from '../styles';

import imagem from '../../assets/sith.jpg';

export default function TelaTrilogia3() {
  return (
    <View style={styles.container}>
      <View style={styles.boxDescricao}>
        <Text style={styles.titulo}>A história de Cobra</Text>

        <Image source={imagem} style={styles.imagem}/>

        <Text style={styles.textos}>
          Trilogia sequela. Episódios VII, VIII e IX
        </Text>
        
        <Text style={styles.textos}>
          Enquanto surge uma nova ameaça para a galáxia, Stallone Cobra, um tira de Nova York, e Axel Foley, um tira de Detroit, devem se juntar a Deckard, um caçador de androides e a Hank Maccoy, um mutante rebelde para procurar a única esperança de restaurar a paz da galáxia.
        </Text>
      </View>
    </View>
  )
}