import React from 'react';
import { Text, AppRegistry } from 'react-native';

const Estilos = {
    estiloTexto: {
        fontSize: 50
    }
};

const App = () => {
    return (
        <Text style={ Estilos.estiloTexto }>Frases do Dia</Text>
    );
};

AppRegistry.registerComponent('frasesDoDia', () => App);

