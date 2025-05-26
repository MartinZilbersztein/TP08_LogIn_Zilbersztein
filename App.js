import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, SafeAreaView } from 'react-native';
import Contenido from './Contenido.js'

export default function App() {
  return (
    <View style={styles.vista}>
      <ImageBackground style={styles.imagen} resizeMode='cover' source={'https://img.freepik.com/fotos-premium/fondo-pared-cemento-no-pintado-estilo-vintage_226189-6584.jpg?semt=ais_hybrid&w=740'}>
        <SafeAreaView style={styles.container}>
          <Contenido/>
          <StatusBar style="auto" />
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
   vista:{
    flex:1,
  },
  imagen: {
    flex: 1,
    backgroundColor: 'lightgray',
    alignItems: 'center',
    justifyContent: 'center',
    display:'flex'
  },
  view:{
    backgroundColor: 'white',
    width:'70%',
    height:'55%',
    alignItems:'center',
    borderRadius:30
  } 
});
