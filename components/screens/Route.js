import * as React from 'react';
import Login from "./Login";
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeTab from "./HomeTab";
import Cadastro from "./Cadastro";
import Conta from '../Tela2/Conta';
import Perfil from "./Perfil";
import Atualizar from "./Atualizar";
import CameraApp from "./CameraApp";


const Stack = createNativeStackNavigator();

const Route = () => {

    return (

        <NavigationContainer initialRoutename="Login">
            <Stack.Navigator>
                <Stack.Screen name="Login" component={Login}/>
                <Stack.Screen  name="Home" component={HomeTab} options={{header: () => null}}/>
                <Stack.Screen name="Cadastro" component={Cadastro}/>
                <Stack.Screen name="Conta" component={Conta}/>
                <Stack.Screen name="Perfil" component={Perfil}/>
                <Stack.Screen name="Atualizar" component={Atualizar}/>
                <Stack.Screen name="Camera" component={CameraApp}/>





            </Stack.Navigator>
        </NavigationContainer>

    );
}

export default Route;