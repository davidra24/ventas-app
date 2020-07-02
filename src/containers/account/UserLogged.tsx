import React, { useRef, useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import Toast from 'react-native-easy-toast';
import { Loading } from '../../components/loading';
import * as firebase from 'firebase';
import {
  GREY_BACKGROUND,
  WHITE_COLOR,
  GREY_COLOR,
  CORPORATIVE_COLOR,
} from '../../utils/constants';
import { InfoUser } from '../../components/account/InfoUser';

export const UserLogged = () => {
  const [userInfo, setUserInfo] = useState<any>(null);
  const toastRef = useRef();
  const [loading, setLoading] = useState<boolean>(false);
  const [loadingText, setLoadingText] = useState<string>('');

  useEffect(() => {
    (() => {
      const user = firebase.auth().currentUser;
      setUserInfo(user);
    })();
  }, []);

  return (
    <View style={styles.viewUserInfo}>
      {userInfo && (
        <InfoUser
          userInfo={userInfo}
          toast={toastRef}
          setLoading={setLoading}
        />
      )}
      <Text>Account Options</Text>
      <Button
        title='Cerrar Sesión'
        onPress={() => firebase.auth().signOut()}
        containerStyle={styles.btnLogOutContainer}
        buttonStyle={styles.btnLogOut}
        titleStyle={styles.btnLogOutText}
      />
      <Toast ref={toastRef} position='center' opacity={0.9} />
      <Loading isVisible={loading} text={loadingText} />
    </View>
  );
};

const styles = StyleSheet.create({
  viewUserInfo: {
    minHeight: '100%',
    backgroundColor: GREY_BACKGROUND,
  },
  btnLogOut: {
    marginTop: 30,
    borderRadius: 0,
    backgroundColor: WHITE_COLOR,
    borderTopWidth: 1,
    borderTopColor: GREY_COLOR,
    borderBottomWidth: 1,
    borderBottomColor: GREY_COLOR,
    paddingTop: 10,
    paddingBottom: 10,
  },
  btnLogOutText: {
    color: CORPORATIVE_COLOR,
  },
  btnLogOutContainer: {
    alignItems: 'center',
  },
});
