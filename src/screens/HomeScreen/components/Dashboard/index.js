import React from "react";
import { View, Text, Button } from "react-native";
import { useSelector, useDispatch } from "react-redux";
// import { Button } from '../../common';
import firebase from "../../../../../firebase";

export default function Dashboard() {
  const { email, photoURL, displayName } = useSelector(
    state => state.firebase.auth
  );
  console.log(email, photoURL, displayName);

  const dispatch = useDispatch();

  const handleLogout = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        dispatch({ type: "LOGOUT_SUCCESS" });
      })
      .catch(err => {
        dispatch({ type: "LOGOUT_ERROR", payload: err.message });
        console.log(err.message);
      });
  };

  return (
    <View>
      <Text>Hello, {email}!</Text>
      <Button onPress={handleLogout} title="logout" />
    </View>
  );
}
