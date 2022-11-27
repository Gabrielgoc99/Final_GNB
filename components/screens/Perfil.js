import React from 'react';
import {View} from 'react-native';
import Styles from "../Styles";
import {colors} from "../Colors";
import Botao from "../Botao";
import {db} from '../../src/config/firebaseConfig';
import {deleteDoc, doc, getDoc} from "firebase/firestore";


const Perfil = ({navigation}) => {


    const exibir = async () => {
        const docRef = doc(db, "users", "jhBXXvH8BtvmFmn1CbQC");
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            alert("Document data:" + docSnap.data());
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }

    }

    const deleta = async () => {

        await deleteDoc(doc(db, "users", "9Ejr5j9wAO7k4S9SCiMd"));


    }

    return (
        <View>

            <Botao style={Styles.botao}
                   cor={colors.botaoAzul}
                   label="Atualizar Cadastro"
                   action={navigation.navigate("Atualizar")}
            />

            <Botao style={Styles.botao}
                   cor={colors.botaoVermelho}
                   label="Deletar cadastro"
                   action={deleta}
            />

            <Botao style={Styles.botao}
                   cor={colors.botaoVerde}
                   label="exibir dados do cadastro"
                   action={exibir}
            />
            <Botao style={Styles.botao}
                   cor={colors.botaoCinza}
                   label="Voltar"
                   action={() => navigation.goBack()}
            />
        </View>

    );
}
export default Perfil;

