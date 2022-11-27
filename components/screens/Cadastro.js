import * as React from 'react';
import {useState} from 'react';
import {Text, View} from 'react-native';
import Input from "../Input";
import Botao from "../Botao";
import Styles from "../Styles";
import {colors} from "../Colors";
import {auth, db} from '../../src/config/firebaseConfig';
import {createUserWithEmailAndPassword} from 'firebase/auth';
import {addDoc, collection} from "firebase/firestore";

const Cadastro = ({navigation}) => {


    const [nome, setNome] = useState("");
    const [sobrenome, setSobrenome] = useState("");
    const [nascimento, setNascimento] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [confirmarSenha, setConfirmarSenha] = useState("");

    const cadastra = () => {

        createUserWithEmailAndPassword(auth, email, senha)
            .then(async (userCredential) => {
                // Signed in
                const user = userCredential.user;
                navigation.navigate('Home');

                try {
                    const docRef = await addDoc(collection(db, "users"), {
                        Nome: nome,
                        Sobrenome: sobrenome,
                        Nascimento: nascimento,
                        Email: email

                    });
                    console.log("Document written with ID: ", docRef.id);
                } catch (e) {
                    console.error("Error adding document: ", e);
                }


            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setEmail("");
                setSenha("");
                setConfirmarSenha("");
            })
    }

    const valida = () => {

        if (email.includes("@") && email.includes(".com") &&
            senha === confirmarSenha && senha.length >= 6 &&
            nome != "" && sobrenome != "" && nascimento != "") {

            cadastra()
        } else {
            alert("Por favor, preencha os campos corretamente! Utilize um email válido e uma senha de pelo menos 6 dígitos!")
        }
    }


    return (

        <View style={Styles.container}>
            <Text style={Styles.text}>Cadastrar Usuário</Text>

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
                   label="Cadastrar"
                   action={valida}
            />

            <Botao style={Styles.botao}
                cor={colors.botaoCinza}
                label="Voltar"
                action={() => navigation.navigate("Login")}
            />


        </View>
    );
}

export default Cadastro;

