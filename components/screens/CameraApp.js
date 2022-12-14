import React, {useEffect, useRef, useState} from 'react';
import {Image, Modal, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Camera, CameraType} from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';


const CameraApp = () => {

    // Camera
    const [typeCamera, setTypeCamera] = useState(CameraType.back);
    const [hasPermission, setHasPermission] = useState(null);
    const [photo, setPhoto] = useState(null);

    // Modal
    const cameraRef = useRef(null);
    const [openModal, setOpenModal] = useState(false);

    useEffect(() => {
        // Camera
        (async () => {
            const {status} = await Camera.requestCameraPermissionsAsync();
            //console.log(status);
            setHasPermission(status === 'granted');
        })();

        // Media Library
        (async () => {
            const {res} = await MediaLibrary.requestPermissionsAsync();
            if (res.granted) {
                MediaLibrary.getAlbumsAsync()
                    .then((albums) => console.log(albums))
                    .catch((err) => console.warn(err))
            }
        })();
    }, []);

    // Permissão da câmera
    if (hasPermission == null) {
        return <View/>
    }
    if (hasPermission == false) {
        return <Text style={{fontSize: 30}}>Acesso negado!</Text>
    }

    // Tirando uma foto
    const takePhoto = async () => {

        alert("Photo!")
    }

    // Salvando a foto
    const savePhoto = async () => {
    }

    return (
        <View style={styles.container}>
            <View style={styles.viewText}>
                <Text style={styles.text}>Camera</Text>
            </View>
            <Camera
                style={styles.camera}
                type={typeCamera}
                ref={cameraRef}>
                <TouchableOpacity
                    style={styles.touchButton} onPress={() => {
                    setTypeCamera(
                        typeCamera === Camera.Constants.Type.back
                            ? Camera.Constants.Type.front
                            : Camera.Constants.Type.back)
                }}>
                    <Text style={styles.textButton}>Alterar câmera</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.touchButton}
                    onPress={takePhoto}>
                    <Text style={styles.textButton}>Tirar foto</Text>
                </TouchableOpacity>

                {photo &&
                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={openModal}
                >
                    <View style={styles.viewModal}>
                        <Text style={styles.text}>My photo!</Text>
                        <Image
                            style={{margin: 20, width: 320, height: 500}}
                            source={{uri: photo}}
                        />
                        <TouchableOpacity
                            style={styles.touchButton}
                            onPress={savePhoto}>
                            <Text>Salvar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.touchButton}
                            onPress={() => {
                            }}>
                            <Text>Voltar</Text>
                        </TouchableOpacity>
                    </View>
                </Modal>
                }
            </Camera>
            <Botao style={Styles.botao}
                   cor={colors.botaoCinza}
                   label="Página Inicial"
                   action={() => navigation.navigate("HomeTela2")}
            />
        </View>
    );
}
export default CameraApp;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        marginTop: 35,
    },
    viewText: {
        flex: 0.1,
        alignItems: 'center',
        marginTop: 30,
    },
    text: {
        fontSize: 22,
        fontWeight: 'bold',
    },
    camera: {
        flex: 0.7,
        margin: 40,
    },
    viewButton: {
        flex: 1,
        backgroundColor: 'transparent',
        flexDirection: 'row',
        margin: 20,
    },
    touchButton: {
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        padding: 10,
    },
    button: {
        flex: 0.5,
        alignSelf: 'flex-end',
        alignItems: 'center',
        margin: 2,
    },
    textButton: {
        fontSize: 18,
        color: 'white',
    },
    viewModal: {
        flex: 1,
        alignItems: 'center',
        margin: 30,
        padding: 20
    },

});