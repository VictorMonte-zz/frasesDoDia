import React from 'react';
import { Text, AppRegistry, View, Image, TouchableOpacity} from 'react-native';

const Estilos = {
    principal: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    botao: {
        backgroundColor: '#538530',
        paddingVertical: 10,
        paddingHorizontal: 40,
        marginTop: 20
    },
    textoBotao: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold'
    }
};

const gerarNovaFrase = () => {
    
    var numeroAleatorio = Math.random();
    numeroAleatorio = Math.floor(numeroAleatorio * 5);

    var frases = [];
    frases[0] = 'Frase 1';
    frases[1] = 'Frase 2';
    frases[2] = 'Frase 3';
    frases[3] = 'Frase 4';
    frases[4] = 'Frase 5';

    var fraseEscolhida = frases[numeroAleatorio];

    alert(fraseEscolhida);

}

const App = () => {

    const { principal, botao, textoBotao} = Estilos;

    return (
        <View style={ principal }>
            <Image source={require('./imgs/logo.png')} />
            <TouchableOpacity style={botao} onPress={gerarNovaFrase}>
                <Text style={textoBotao}>Nova frase</Text>
            </TouchableOpacity>
        </View>
    );
};

AppRegistry.registerComponent('frasesDoDia', () => App);

