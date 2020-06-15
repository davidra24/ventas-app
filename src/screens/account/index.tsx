import React, { useState, useEffect } from "react";
import * as firebase from "firebase";
import { UserGuest } from "../../containers/account/UserGuest";
import { UserLogged } from "../../containers/account/UserLogged";
import { Loading } from "../../components/loading";

const Account = () => {
  const [login, setLogin] = useState<any>(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setLogin(user ? true : false);
    });
  }, []);

  if (login === null) {
    return <Loading isVisible={true} text="cargando" />;
  }

  return login ? <UserLogged /> : <UserGuest />;
};

export default Account;
