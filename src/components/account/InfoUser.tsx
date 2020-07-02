import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Avatar } from 'react-native-elements';
import { GREY_COLOR } from '../../utils/constants';
import * as firebase from 'firebase';
import * as Permissions from 'expo-permissions';
import * as ImagePicker from 'expo-image-picker';

export const InfoUser = ({ userInfo, toast }: any) => {
  const { photoURL, displayName, email, uid } = userInfo;

  const handleUploadImage = async (uri: string) => {
    const response = await fetch(uri);
    const blob = await response.blob();
    const ref = firebase.storage().ref().child(`avatar/${uid}.png`);
    return ref.put(blob);
  };

  const handleUpdatePhotoUrl = async () => {
    await firebase
      .storage()
      .ref(`avatar/${uid}.png`)
      .getDownloadURL()
      .then(async (response) => {
        const update = {
          photoURL: response,
        };
        await firebase.auth().currentUser?.updateProfile(update);
        //
      })
      .catch(() => {
        //toast.current.show('Error al actualizar imagen');
      });
  };

  const handleChangeAvatar = async () => {
    const resultPermission = await Permissions.askAsync(
      Permissions.CAMERA_ROLL
    );
    const {
      permissions: {
        cameraRoll: { status },
      },
    } = resultPermission;

    if (status !== 'granted') {
      toast.current.show('Es necesario aceptar los permisos de la galería');
    } else {
      const result = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true,
        aspect: [4, 3],
      });
      if (result.cancelled) {
        toast.current.show('Has cerrado la sección de imagenes');
      } else {
        handleUploadImage(result.uri)
          .then(async () => {
            await handleUpdatePhotoUrl();
          })
          .catch(() => {
            toast.current.show('Error al actualizar el avatar');
          });
      }
    }
  };

  return (
    <View style={styles.viewUserInfo}>
      <Avatar
        rounded
        size='large'
        showAccessory
        containerStyle={styles.userInfoAvatar}
        source={
          photoURL
            ? { uri: photoURL }
            : require('../../../assets/img/avatar.jpg')
        }
        onAccessoryPress={handleChangeAvatar}
      />
      <View>
        <Text style={styles.displayName}>
          {displayName ? displayName : 'Anónimo'}
        </Text>
        <Text>{email ? email : 'Inicio con red Social'}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  viewUserInfo: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    paddingTop: 30,
    paddingBottom: 30,
  },
  userInfoAvatar: {
    marginRight: 20,
    backgroundColor: GREY_COLOR,
  },
  displayName: {
    fontWeight: 'bold',
    paddingBottom: 10,
  },
});
