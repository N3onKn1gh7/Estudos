import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

4
function CaixaRed() {
  return <View
    style={{
      height: 400,
      width: 100,
      backgroundColor: 'red',
      
      
    }}>

  </View>
}

function CaixaBlue() {
  return <View
    style={{
      height: 400,
      width: 100,
      backgroundColor: 'blue',
      
    }}>

  </View>

}

function CaixaGreen() {
  return <View
    style={{
      height: 400,
      width: 100,
      backgroundColor: 'green',
      
    }}>

  </View>
}

export default function App() {
  return (
    <View style={styles.container}>
      <CaixaRed></CaixaRed>
      <CaixaBlue></CaixaBlue>
      <CaixaGreen></CaixaGreen>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    flex: 1,
    flexWrap: 'wrap-reverse',
    alignContent:'center',
    borderWidth:5,
    borderColor: 'orange',
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    
  },
});
