import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';


export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{
        color:'white', 
        backgroundColor:'red', 
        fontSize:30, 
        borderRadius: 15}}>Hello Marcos </Text>
      <View>
        <Text style={{
          backgroundColor: 'purple', 
          color: 'white', 
          borderRadius: 15}}>Olá mundo</Text>
        <Text style={styles2.tituloEstilo}>Criando uma estilização </Text>  
      </View>
    </View>
  );
}

const styles2 = StyleSheet.create({
  tituloEstilo:{
     fontSize:15,
     color: '#f1f1f1',
     backgroundColor: 'black'
  }
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
