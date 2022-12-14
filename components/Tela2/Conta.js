import * as React from 'react';
import {useRef, useState} from 'react';
import {Animated, Switch, Text, View} from 'react-native';
import Styles from "../Styles";
import Input from "../Input";
import {Picker} from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';
import {colors} from '../Colors';
import {Botao} from '../Botao';
import HomeTela2 from './HomeTela2';

const Conta = () => {
    const [nome, setNome] = useState("");
    const [idade, setIdade] = useState("");
    const [genero, setGenero] = useState("");
    const [limite, setLimite] = useState(1);
    const [switchAtivado, setSwitchAtivado] = useState(false);
    const toggleSwitch = () => setSwitchAtivado(previousState => !previousState);

    const fadeAnim = useRef(new Animated.Value(0)).current;

    const Cadastrar = () => {
        let estudante;
        if (!switchAtivado) {
            estudante = "Não"
        } else {
            estudante = "Sim"
        }
        if (nome === "" || idade === "" || limite === 0|| genero === "") {
            alert("Preencha todos os campos!!!")
        } else {
            alert('Cadastro Realizado!' + '\n' + 'Nome: ' + nome + '\n' + 'Idade: ' + idade + '\n' + "Genero: " + genero + '\n' +
                'Limite: ' + limite.toFixed(2) + '\n' + 'Conta de estudante: ' + estudante + '\n')
        }
    }

    const Limpar = () => {
        setNome("");
        setIdade("");
        setLimite(1);
        setGenero("");
        setSwitchAtivado(false);
    }

    const fadeIn = () => {
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 3000,
            useNativeDriver: false
        }).start();
    };

    const fadeOut = () => {
        Animated.timing(fadeAnim, {
            toValue: 0,
            duration: 3000,
            useNativeDriver: false
        }).start();
    };

    return (
        <View style={Styles.container}>
            <Text style={Styles.paragraph}>Nome:</Text>
            <Input style={Styles.input}
                   onChangeText={setNome}
                   value={nome}
                   placeholder="Nome"
            />
            <Text style={Styles.paragraph}>Idade:</Text>
            <Input style={Styles.input}
                   onChangeText={setIdade}
                   keyboardType="numeric"
                   value={idade}
                   placeholder="Idade"
            />
            <Text style={Styles.paragraph}>Genero:</Text>
            <Picker
                style={Styles.input}
                Genero={genero}
                onValueChange={(itemValue) => setGenero(itemValue)
                }>
                <Picker.Item label="Selecione..." value=""/>
                <Picker.Item label="Masculino" value="Masculino"/>
                <Picker.Item label="Feminino" value="Feminino"/>
            </Picker>
            <Text style={Styles.paragraph}>Limite: {limite.toFixed(2)}</Text>
            <View>
                <Slider
                    style={Styles.slider}
                    minimumValue={1}
                    maximumValue={5000}
                    value={limite}
                    onValueChange={setLimite}
                    minimumTrackTintColor="gray"
                    maximumTrackTintColor="red"
                />
            </View>
            <Text style={Styles.paragraph}>Estudante:</Text>
            <Switch style={Styles.switchAdjust}
                    trackColor={{false: "red", true: "gray"}}
                    thumbColor={switchAtivado ? "#f5dd4b" : "#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={switchAtivado}
            />

            <Botao
                style={Styles.botao}
                label='Cadastrar'
                action={Cadastrar}
                cor={colors.botaoAzul}
            />
            <Botao
                style={Styles.botao}
                label="Limpar"
                action={Limpar}
                cor={colors.botaoVermelho}
            />

            <Botao style={Styles.botao}
                   cor={colors.botaoCinza}
                   label="Página Inicial"
                   action={() => navigation.navigate("HomeTela2")}
            />

            <View style={{marginTop: 20}}>
                <Botao style={Styles.botao}
                       label="Termos"
                       action={fadeIn}
                       cor={colors.botaoVerde}/>

                       
            </View>
            <Animated.View
                style={[
                    Styles.fadingContainer,
                    {
                        opacity: fadeAnim
                    }
                ]}
            >
                <Text style={Styles.paragraph}>Ao clicar no botão cadastrar, você confirma que aceita os
                    termos de serviço.</Text>

            </Animated.View>
        </View>
    );
}
export default Conta;