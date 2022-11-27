import {StatusBar, StyleSheet} from 'react-native';
import {tamanhos} from './Tamanhos';

export default StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        padding: tamanhos.padraoMinusculo,
        margin: 0,

    },
    itensContainer: {
        flexDirection: 'columns',
        padding: 12,
    },
    background: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#191919'
    },
    paragraph: {
        marginBottom: 0,
        fontSize: tamanhos.padraoDescricao,
        fontWeight: 'bold',
        borderColor: 'red',
        textAlign: 'center',
        color: 'Black',
    },
    frase: {
        width: 200,
        height: 80,
        marginTop: 5,
    },
    fraseText: {
        fontSize: tamanhos.padraoPequeno,
        fontWeight: 'bold',
        borderColor: 'red',
        textAlign: 'center',
        color: 'Black',
    },
    imagem: {
        height: 300,
        width: 300,
        alignSelf: 'center',
    },
    imagemLogo: {
        height: 150,
        width: 280
    },
    text: {
        margin: 24,
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'Black',
    },
    botao: {
        width: 200,
        alignSelf: 'center',
        padding: tamanhos.padraoMinusculo,
        marginBottom: 5,
        borderRadius: 8,
        padding: 10
    },
    botaoRegistrar: {
        marginTop: 15,
    },
    input: {
        backgroundColor: '#FFF',
        width: '100%',
        borderRadius: 8,
        marginBottom: 15,        
        color: '#222',
        padding: 10,
        fontSize: tamanhos.padraoRegular
    },
    slider: {
        width: 250,
        height: 40,
        size: 20,
        color: "#f50",
    },
    switchAdjust: {
        marginBottom: 20,
    },
    fadingContainer: {
        padding: 10,
        backgroundColor: "gray",
        width: 300,
        marginBottom: 10,
        marginTop: 10,
    },
    fadingText: {
        marginBottom: 10,
        fontSize: tamanhos.padraoDescricao,
        color: 'white'
    },
    buttonRow: {
        flexBasis: 50,
        justifyContent: "space-evenly",
        marginVertical: 10,
        marginBottom: 5,
    },
    label: {
        fontSize: 16,
        marginLeft: '525px'
    },
    touch: {
        alignItems: "center",
        backgroundColor: "#81b0ff",
        padding: 10,
        width: 300,
        height: 40,
        alignSelf: "center"
    },
    Flatlistcontainer: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    button: {
        alignItems: 'center',
        backgroundColor: "purple",
        padding: 10,
        margin: 10,
        width: 300,
        alignSelf: "center"
    },
    viewModalize: {
        flex: 1,
        margin: 8,
    },
    buttonModalize: {
        alignItems: 'center',
        backgroundColor: "gray",
        padding: 8,
        margin: 15,
        width: 300,
        alignSelf: "center"

    },
    title: {
        textAlign: 'center',
        fontSize: 22,
        fontWeight: 600,
        marginBottom: 10,
    },
    containerLogo: {
        flex:1,
        justifyContent: 'center',
    }
});