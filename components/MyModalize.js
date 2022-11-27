import * as React from 'react';
import {useRef} from 'react';
import {Text, TouchableOpacity, View} from "react-native";
import MyFlatlist from "./flatlist";
import Styles from "./Styles";
import {Modalize} from "react-native-modalize";

const MyModalize = () => {

    const modalizeRef = useRef(null);

    const openModalize = () => {
        modalizeRef.current?.open();
    };

    const closeModalize = () => {
        modalizeRef.current?.close();
    };

    return (

        <View>

            <View>
                <MyFlatlist
                />

                <TouchableOpacity
                    style={Styles.buttonModalize}
                    onPress={openModalize}>
                    <Text style={Styles.paragraph}>Informações</Text>
                </TouchableOpacity>
                <Modalize
                    ref={modalizeRef}
                    snapPoint={480}
                    modalHeight={600}>
                    <View style={Styles.viewModalize}>
                        <Text style={Styles.title}>Venha ser nosso cliente e aproveite os beneficios que preparamos
                            especialmente para você.</Text>

                        <TouchableOpacity
                            style={Styles.buttonModalize}
                            onPress={closeModalize}>
                            <Text style={Styles.paragraph}>Fechar</Text>
                        </TouchableOpacity>
                    </View>
                </Modalize>
            </View>


        </View>

    );
}

export default MyModalize;
