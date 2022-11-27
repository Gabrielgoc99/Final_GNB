import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from "./Home";
import Ionicons from 'react-native-vector-icons/Ionicons';
import Ajuda from "../Tela2/Ajuda";


const HomeTab = () => {

    const Tab = createBottomTabNavigator();


    return (

        <Tab.Navigator
            screenOptions={({route}) => ({
                tabBarIcon: ({color, size}) => {
                    let iconName;

                    if (route.name === 'Tela Inicial') {
                        iconName = "home-outline"


                    } else if (route.name === 'Ajuda') {
                        iconName = "newspaper"
                    }
                    return <Ionicons name={iconName} size={size} color={color}/>;
                },

                tabBarActiveTintColor: 'blue',
                tabBarInactiveTintColor: 'gray',
            })}>
            <Tab.Screen name="Tela Inicial" component={Home}/>
            <Tab.Screen name={"Ajuda"} component={Ajuda} options={{header: () => null}}/>

        </Tab.Navigator>
    );
}

export default HomeTab;
