import * as React from 'react';
import {Avatar, Card} from 'react-native-paper';

const LeftContent = props => <Avatar.Icon {...props} icon="cash"/>

const MyCard = (props) => (
    <Card>
        <Card.Title title={props.title} left={LeftContent}/>

    </Card>
);

export default MyCard;