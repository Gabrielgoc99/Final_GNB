import * as React from 'react';
import HomeTela2 from "./HomeTela2"
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Ajuda from "./Ajuda";

const Stack = createNativeStackNavigator();

const HomeStack = () => {

    return (

        <Stack.Navigator>
            <Stack.Screen name="Tela inicial" component={HomeTela2} options={{header: () => null}}/>
            <Stack.Screen name="Ajuda" component={Ajuda}/>
        </Stack.Navigator>


    );
}

export default HomeStack;