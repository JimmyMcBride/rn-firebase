import React from "react";
import { useSelector } from "react-redux";
import Dashboard from "./components/Dashboard";
import AuthGate from "./components/AuthGate";

export default function HomeScreen() {
  const { email } = useSelector(state => state.firebase.auth);
  console.log(email);

  if (email === undefined) {
    return <AuthGate />;
  } else {
    return <Dashboard />;
  }
}
