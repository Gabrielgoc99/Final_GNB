import React, {useState} from 'react';
import {Animated, ScrollView, Text, View} from 'react-native';
import Styles from "../Styles";
import {tamanhos} from "../Tamanhos";
import {colors} from "../Colors";
import Botao from "../Botao";
import MyModalize from "../MyModalize";
import {signOut} from "firebase/auth";
import {auth} from '../../src/config/firebaseConfig';


const Home = ({navigation}) => {

    const sair = () => {

        signOut(auth).then(() => {
            navigation.navigate("Login")
        }).catch((error) => {
            alert("erro");
        });

    }

    const [altura] = useState(new Animated.Value(20));
    const [largura] = useState(new Animated.Value(20));
    const [banner] = useState(new Animated.Value(30));
    const [alturaTower] = useState(new Animated.Value(20));
    const [larguraTower] = useState(new Animated.Value(20));

    Animated.timing(largura, {
        toValue: tamanhos.padraoLargura,
        duration: 3000,
        useNativeDriver: false
    }).start();

    Animated.timing(altura, {
        toValue: tamanhos.padraoAlturaHome,
        duration: 3000,
        useNativeDriver: false
    }).start();

    Animated.timing(larguraTower, {
        toValue: tamanhos.padraoGigante,
        duration: 3000,
        useNativeDriver: false
    }).start();

    Animated.timing(alturaTower, {
        toValue: tamanhos.padraoAlturaCadastro,
        duration: 3000,
        useNativeDriver: false
    }).start();

    Animated.loop(Animated.sequence([Animated.decay(banner, {
        velocity: 0.5,
        deceleration: 0.999,
        toValue: tamanhos.padraoAlturaHome,
        useNativeDriver: false
    })])).start();


    return (
        <ScrollView>
            <View style={{alignItems: "center"}}>


                <Text style={Styles.paragraph}>Bem vindo ao Goliath National Bank!</Text>
                
                <Botao style={Styles.botao}
                       cor={colors.botaoAzul}
                       label="Abrir Conta"
                       action={() => navigation.navigate("Conta")}
                />
                <Animated.Image source={require("../../assets/Goliath_Tower.png")}
                                style={{
                                    alignSelf: 'center',
                                    width: larguraTower,
                                    height: alturaTower,
                                    marginBottom: 10,
                                    marginTop: 10
                                }}
                />



                <Botao style={Styles.botao}
                       cor={colors.botaoAzul}
                       label="Gerenciar Perfil"
                       action={() => navigation.navigate("Perfil")}
                />
                <Botao style={Styles.botao}
                       cor={colors.botaoVerde}
                       label="Abrir Camera"
                       action={() => navigation.navigate("Camera")}
                />

                <Botao style={Styles.botao}
                       cor={colors.botaoVermelho}
                       label="Sair"
                       action={sair}
                />
                
                <MyModalize/>

            </View>

        </ScrollView>
    );
}
export default Home;

