import React, { useState } from "react";

import { View } from "react-native";
import { Card, CardSection, Button, Input } from "../../../../common";

import firebase from "../../../../../firebase";

// import {
//   GoogleSignin,
//   GoogleSigninButton
//   // statusCodes,
// } from "react-native-google-signin";

// GoogleSignin.configure({
//   scopes: ["https://www.googleapis.com/auth/drive.readonly"],
//   webClientId:
//     "350650052289-u6ikeamumv67jsa2nd7od6vad94rffij.apps.googleusercontent.com",
//   offlineAccess: true,
//   hostedDomain: "",
//   loginHint: "",
//   forceConsentPrompt: true,
//   accountName: ""
// });

export default function AuthGate() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(res => console.log("SIGN IN RES: ", res))
      .catch(() => {
        firebase
          .auth()
          .createUserWithEmailAndPassword(email, password)
          .then(res => console.log("REGISTER RES: ", res))
          .catch(err => console.log("☠️ Error message:", err.message));
      });
  };

  return (
    <View>
      <Card>
        <CardSection>
          <Input
            label="Email"
            value={email}
            placeholder="Email..."
            onChangeText={input => setEmail(input)}
          />
        </CardSection>
        <CardSection>
          <Input
            label="Password"
            value={password}
            placeholder="Password..."
            onChangeText={input => setPassword(input)}
            secureTextEntry={true}
          />
        </CardSection>

        <CardSection>
          <Button onPress={handleLogin}>Log in</Button>
        </CardSection>
        {/* <CardSection>
          <GoogleSigninButton
            style={{ width: 192, height: 48 }}
            size={GoogleSigninButton.Size.Wide}
            color={GoogleSigninButton.Color.Dark}
            onPress={this._signIn}
            disabled={this.state.isSigninInProgress}
          />
        </CardSection> */}
      </Card>
    </View>
  );
}
