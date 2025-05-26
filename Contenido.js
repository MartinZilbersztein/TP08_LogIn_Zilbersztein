import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, SafeAreaView, Image, TextInput, TouchableOpacity } from 'react-native';

const imagenCocaCola = require('./CocaCola.webp');
export default function Tarjeta(){
    return(
    <>
        <View style={styles.ViewImagen}>
            <Image source={imagenCocaCola} style={styles.Image}/> 
        </View> 
        <View style={styles.ViewInput}>
            <TextInput style={[styles.textInput, styles.entrada]} placeholder='Usuario'/> 
            <TextInput style={[styles.textInput, styles.entrada]} placeholder='Contraseña'/>
        </View>
        <View style={styles.ViewButton}>
            <TouchableOpacity style={styles.touchableOpacity}>
                <Text style={styles.texto}>Ingresar</Text>
            </TouchableOpacity>
            <Text>¿Olvidaste tu contraseña?</Text>
            <Text>Crear cuenta</Text>
        </View>
    </>
    )
}

const styles= StyleSheet.create({
    ViewImagen:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'flex-end',
        marginBottom:'10%',
        marginTop:'27%' 
    },
    Image:{
        height:'300%',
        width:'90%',
        marginTop:'13%'
    },
    ViewInput:{
        alignItems:'center',
    },
    entrada:{
        borderBottomWidth : 1.5,
        borderTopWidth:1.5,
        borderLeftWidth:1.5,
        borderRightWidth:1.5,
        borderRadius:7
    },
    textInput:{
        height:'auto',
        width:'85%',
        marginTop:'5%',
        padding:'10',
        borderColor:'violet',
        backgroundColor:'white'
    },
    ViewButton:{
        alignItems:'center'
    },
    touchableOpacity:{
        backgroundColor:'#8E5DFB',
        width:'85%',
        height: '20%',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:8,
        marginTop:'13%',
        marginBottom:'5%'
    },
    texto:{
        color:'white'
    }
})