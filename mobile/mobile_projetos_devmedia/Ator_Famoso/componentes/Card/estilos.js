import { StyleSheet } from 'react-native';

const estilos = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: '#0a1c35',
        paddingVertical: 20,     
    },

    box: {
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        width: 300,
    },

    fotoCapa: {
        height: 110,
        width: 300,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },

    nome: {
        marginTop: 10,
        fontSize: 22,
    },

    paragrafo: {
        margin: 10,
    }
});

export default estilos;
