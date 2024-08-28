import { StyleSheet } from 'react-native';

const estilosTopo = StyleSheet.create({
  containerTopo: {
    backgroundColor:'#e60012',
    justifyContent: "center",
    alignItems: "center",
    padding: 30
  },
  topoTitulo: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  topoDescricao: {
    color: '#fff',
    textAlign: "center"
  },
  topoImg: {
    width: 100,
    height: 100
  }
});

export default estilosTopo;