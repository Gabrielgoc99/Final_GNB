import * as React from 'react';
import {useState} from 'react';
import {Animated, Linking, Text, View} from 'react-native';
import Botao from "../Botao";
import {tamanhos} from "../Tamanhos";
import Styles from "../Styles";
import {colors} from '../Colors';


const Ajuda = ({navigation}) => {
    const [fonte] = useState(new Animated.Value(tamanhos.padraoPequeno));
    Animated.spring(fonte, {
        toValue: tamanhos.padraoMedio,
        speed: 10,
        bounciness: 30,
        useNativeDriver: false
    }).start();

    return (

        <View style={Styles.container}>

            


            <Animated.Text style={[Styles.paragraph, {fontSize: fonte}]}> Página de Ajuda. </Animated.Text>

            <Text style={[Styles.text, {fontSize: 15}]}>Endereço: Clique no botão abaixo para obter a nossa localização.</Text>

            <Botao style={Styles.botao}
                   cor={colors.botaoAzul}
                   label="Localização"
                   action={() => {
                       Linking.openURL('https://www.google.com.br/maps/@-21.7669804,-43.3439701,18.56z');
                   }}
            />

            <Text style={[Styles.text, {fontSize: 15}]}>
                Horário de funcionamento: Segunda à Sexta-feira de 11:00 - 16:00h.
            </Text>

            <Text style={[Styles.text, {fontSize: 15}]}>
                Número para contato: (32)123456789.
            </Text>

            <Text style={[Styles.text, {fontSize: 15}]}>
                Acesse no Botão Abaixo o Repositório do Projeto.
            </Text>
            <Botao style={Styles.botao}
                   cor={colors.botaoCinza}
                   label="GitHub"
                   action={() => {
                       Linking.openURL('https://github.com/Agnaldo-Carmo/TrabalhoFinalMobileAvancado');
                   }}
            />

            <Botao style={Styles.botao}
                   cor={colors.botaoVermelho}
                   label="Página Inicial"
                   action={() => navigation.goBack()}
            />

        </View>
    );
}

export default Ajuda;

