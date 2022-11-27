import * as React from 'react';
import {useEffect, useState} from 'react';
import { Animated, Text, View, KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import Input from "../Input";
import Botao from "../Botao";
import Styles from "../Styles";
import {colors} from "../Colors";
import {auth} from '../../src/config/firebaseConfig';
import {signInWithEmailAndPassword, onAuthStateChanged} from "firebase/auth";
import {useIsFocused} from '@react-navigation/native';

const Login = ({navigation}) => {

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [offset] = useState(new Animated.ValueXY({x: 0, y:95}));
    const [opacity] = useState(new Animated.Value(0));
    const [logo] = useState(new Animated.ValueXY({x: 280, y: 150}));
    const isFocused = useIsFocused();

    useEffect(()=> {
        
        Animated.parallel([
            Animated.spring(offset.y, {
                toValue: 0,
                speed: 3,
                bounciness: 30
            }),
            Animated.timing(opacity, {
                toValue: 1,
                duration: 3000,
                useNativeDriver: true,
            })
        ]).start();
        
    }, []);

    useEffect(() => {
        if (isFocused) {

            setSenha("")
            setEmail("")
        }
    }, [isFocused])
    
     useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/firebase.User
              const uid = user.uid;
              navigation.navigate("Home")
              // ...
            } else {
              navigation.navigate("Login")
            }
          });
    }, [])

    const logar = () => {

        if (email != "" && senha != "") {
            signInWithEmailAndPassword(auth, email, senha)
                .then((userCredential) => {
                    // Signed in
                    const user = userCredential.user;
                    navigation.navigate("Home")

                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;

                    alert("Email ou Senha invalidos")
                });

        } else {
            alert("Digite seu email e senha!")
        }
    }

    return (

        <KeyboardAvoidingView style={Styles.background}>
            <View style={Styles.containerLogo}>
            
            <Animated.Image source={require("../../assets/GNB_2.jpeg")}
                            style={{
                                width: 280,
                                height: 150
                            }}
            />
            </View>
            <Animated.View style={[Styles.container,
                {
                  opacity: opacity,  
                  transform: [
                    { translateY: offset.y }
                  ]  
                }
            ]}>
            
            <Input 
                   placeholder="Email"
                   onChangeText={setEmail}
                   value={email}
            />

            <Input 
                   placeholder="Senha"
                   onChangeText={setSenha}
                   value={senha}
                   secure="true"
            />

            <Botao style={Styles.botao}
                   cor={colors.botaoAzul}
                   label="Login"
                   action={logar}
            />

            <TouchableOpacity
                onPress={() => navigation.navigate("Cadastro")}
                >
                   <Text>Não possui usuário? Cadastre-se!</Text>                   
            </TouchableOpacity>
           </Animated.View> 
        </KeyboardAvoidingView>
    );
}

export default Login;