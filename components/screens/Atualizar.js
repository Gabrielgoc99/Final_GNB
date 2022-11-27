import * as React from 'react';
import {useState} from 'react';
import {Text, View} from 'react-native';
import Input from "../Input";
import Botao from "../Botao";
import Styles from "../Styles";
import {colors} from "../Colors";
import {db} from '../../src/config/firebaseConfig';
import {doc, updateDoc} from "firebase/firestore";

const Atualizar = ({navigation}) => {


    const [nome, setNome] = useState("");
    const [sobrenome, setSobrenome] = useState("");
    const [nascimento, setNascimento] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [confirmarSenha, setConfirmarSenha] = useState("");

    const atualiza = async () => {

        const userRef = doc(db, "users", "9Ejr5j9wAO7k4S9SCiMd");


        await updateDoc(userRef, {
            Nome: nome,
            Sobrenome: sobrenome,
            Nascimento: nascimento,
            Email: email
        });


    }

    const valida = () => {

        if (email.includes("@") && email.includes(".com") &&
            senha === confirmarSenha && senha.length >= 6 &&
            nome != "" && sobrenome != "" && nascimento != "") {

            atualiza()
        } else {
            alert("preencha os dados corretamente, utilize um email valido e uma senha de pelo menos 6 digitos!")
        }
    }


    return (

        <View style={Styles.container}>
            <Text style={Styles.text}>Aualizar Cadastro de Usuário</Text>

            <Input style={Styles.input}
                   placeholder="Nome"
                   onChangeText={setNome}
                   value={nome}

            />
            <Input style={Styles.input}
                   placeholder="Sobrenome"
                   onChangeText={setSobrenome}
                   value={sobrenome}
            />
            <Input style={Styles.input}
                   placeholder="Data de Nascimento"
                   onChangeText={setNascimento}
                   value={nascimento}
            />
            <Input style={Styles.input}
                   placeholder="Email"
                   onChangeText={setEmail}
                   value={email}
            />


            <Input style={Styles.input}
                   placeholder="Senha"
                   onChangeText={setSenha}
                   value={senha}
                   secure="true"
            />
            <Input style={Styles.input}
                   placeholder="Confirmar Senha"
                   onChangeText={setConfirmarSenha}
                   value={confirmarSenha}
                   secure="true"
            />

            <Botao style={Styles.botao}
                   cor={colors.botaoAzul}
                   label="Atualizar"
                   action={valida}
            />


        </View>
    );
}

export default Atualizar;

