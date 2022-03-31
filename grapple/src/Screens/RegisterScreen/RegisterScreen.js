import React from "react";
import MainScreen from "../../components/MainScreen";
import NewUserForm from "../../components/NewUserForm";

const RegisterScreen = () => {
  return (
    <MainScreen title="Register">
      <NewUserForm />
    </MainScreen>
  );
};

export default RegisterScreen;
