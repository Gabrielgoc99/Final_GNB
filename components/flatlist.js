import * as React from 'react';
import {FlatList, View} from 'react-native';
import MyCard from './Card'
import Styles from "./Styles";

const DATA = [
    {
        id: 'Item1',
        title: 'Conta Corrente',
    },
    {
        id: 'Item2',
        title: 'Conta Poupanca',
    },
    {
        id: 'Item3',
        title: 'Conta de Estudante',
    },
];

const Item = ({title}) => (
    <MyCard
        title={title}
    />
);

const flatlist = () => {

    const renderItem = ({item}) => (
        <Item title={item.title}/>
    );

    return (
        <View style={Styles.Flatlistcontainer}>
            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </View>
    );
}

export default flatlist;

