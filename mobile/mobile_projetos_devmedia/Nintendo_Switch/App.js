import React from 'react';
import { View } from 'react-native';

import Topo from './componentes/Topo/Topo';
import Conteudo from './componentes/Conteudo/Conteudo';

export default function App() {
  return (
    <View>
      <Topo />
      <Conteudo />
    </View>
  );
}
