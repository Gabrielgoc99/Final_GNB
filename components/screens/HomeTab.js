import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from "./Home";
import Ionicons from 'react-native-vector-icons/Ionicons';
import Tela2 from "../Tela2/Tela2";


const HomeTab = () => {

    const Tab = createBottomTabNavigator();


    return (

        <Tab.Navigator
            screenOptions={({route}) => ({
                tabBarIcon: ({color, size}) => {
                    let iconName;

                    if (route.name === 'Tela Inicial') {
                        iconName = "home-outline"


                    } else if (route.name === 'Tela 2') {
                        iconName = "newspaper"
                    }
                    return <Ionicons name={iconName} size={size} color={color}/>;
                },

                tabBarActiveTintColor: 'blue',
                tabBarInactiveTintColor: 'gray',
            })}>
            <Tab.Screen name="Tela Inicial" component={Home}/>
            <Tab.Screen name={"Tela 2"} component={Tela2} options={{header: () => null}}/>

        </Tab.Navigator>
    );
}

export default HomeTab;
