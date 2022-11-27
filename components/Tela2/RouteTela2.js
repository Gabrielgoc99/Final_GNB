import * as React from 'react';
import HomeStack from "./HomeStack"
import Conta from "./Conta";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

const Drawer = createNativeStackNavigator();

const RouteTela2 = () => {

    return (

        <Drawer.Navigator>
            <Drawer.Screen name="Tela inicial2" component={HomeStack} options={{header: () => null}}/>
            <Drawer.Screen name="Conta" component={Conta}/>

        </Drawer.Navigator>

    );
}

export default RouteTela2;