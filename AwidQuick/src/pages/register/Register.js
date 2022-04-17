import React, { useState } from "react";
import {
  TextInput,
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  SafeAreaView,
  Image,
  Alert,
} from "react-native";
// import {verifyByEmail} from '../../API/UserAPI';

import i18n from "../../translation/index";

const showAlert = (alertTitle, alertMsg) => {
  Alert.alert(
    alertTitle,
    alertMsg,
    [
      {
        text: "Got it !",
        style: "cancel",
      },
    ],
    {
      cancelable: true,
    }
  );
};

function Register({ route, navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [passBoolean, setPassBoolean] = useState(true);
  const [showPassword, setShowPassword] = useState(true);

  const submitAction = () => {
    const reg = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    if (!email || !password || !confirmPassword) {
      showAlert("Fields empty", "Please fill in all fields !");
    } else if (reg.test(email) === false) {
      showAlert("Verification", "Please verify your email !");
    } else if (password !== confirmPassword) {
      setPassBoolean(false);
      setError("Passwords doesn't match !");
    } else {
      // verifyByEmail(email).then(res => {
      //   console.log(res);
      //   if (res === 'user not found') {
      //     navigation.navigate('GenderView', {email: email, password: password});
      //   } else {
      //     showAlert('Error', 'Email already exists');
      //   }
      // });
    }
  };

  return (
    <SafeAreaView
      style={{
        backgroundColor: "#fff",
        height: Dimensions.get("window").height,
      }}
    >
      <View style={styles.mainContainer}>
        {/* <Image
          source={require('../../Assets/images/logoNoir.png')}
          style={{
            height: Dimensions.get('window').height * 0.15,
            width: Dimensions.get('window').height * 0.15,
          }}
        /> */}
        <View style={styles.titleContainer}>
          <Text style={styles.h1}>{i18n.t("sdaqRegisterLabel1")}</Text>
          <Text style={styles.h2}>{i18n.t("sdaqRegisterLabel2")}</Text>
        </View>
        <View style={styles.form}>
          <View style={styles.fieldContainer}>
            <Text style={styles.fieldTitle}>
              {i18n.t("sdaqRegisterLabel3")}
            </Text>
            <TextInput
              style={styles.textField}
              placeholder="Enter your email"
              onChangeText={(text) => setEmail(text.toLowerCase())}
            />
          </View>
          <View style={styles.fieldContainer}>
            <Text style={styles.fieldTitle}>
              {i18n.t("sdaqRegisterLabel4")}
            </Text>
            <View style={styles.passwordTextField}>
              <TextInput
                style={styles.passwordTextInput}
                secureTextEntry={showPassword}
                placeholder="Enter your password"
                onChangeText={(text) => setPassword(text)}
              />
            </View>
          </View>
          <View style={styles.fieldContainer}>
            <Text style={styles.fieldTitle}>
              {i18n.t("sdaqRegisterLabel5")}
            </Text>
            <View
              style={
                passBoolean ? styles.passwordTextField : styles.textFieldError
              }
            >
              <TextInput
                style={styles.passwordTextInput}
                secureTextEntry={showPassword}
                placeholder="Confirm your password"
                onChangeText={(text) => setConfirmPassword(text)}
              ></TextInput>
            </View>
          </View>
          <Text>{error && <Text style={styles.error}> {error} </Text>} </Text>
          <TouchableOpacity style={styles.button} onPress={submitAction}>
            <Text style={styles.buttonText}>
              {i18n.t("sdaqRegisterLabel6")}
            </Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text>
            {i18n.t("sdaqRegisterLabel7")}{" "}
            <Text
              style={{ color: "blue" }}
              onPress={() => navigation.navigate("loginScreen")}
            >
              {i18n.t("sdaqRegisterLabel8")}
            </Text>{" "}
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  mainContainer: {
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#ffffff",
    height: Dimensions.get("window").height - 100,
  },
  number: {
    color: "rgb(98, 73, 227)",
    fontSize: 40,
    fontWeight: "bold",
    marginTop: 20,
  },
  passwordField: {
    flexDirection: "row",
  },
  titleContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  fieldTitle: {
    marginLeft: 10,
    fontSize: 14,
  },
  icon1: {
    padding: 10,
    marginLeft: 10,
    marginTop: 5,
    // alignSelf: "flex-end",
  },
  textField: {
    borderStyle: "solid",
    borderColor: "grey",
    borderWidth: 1,
    borderRadius: 8,
    margin: 10,
    paddingLeft: 20,
    height: 48,
    opacity: 0.8,
    color: "#000",
  },
  h1: {
    fontSize: 25,
    opacity: 0.75,
  },
  h2: {
    fontSize: 15,
    textAlign: "center",
    marginTop: 16,
    opacity: 0.7,
    marginHorizontal: 32,
  },
  form: {
    width: Dimensions.get("window").width - 32,
    marginTop: 30,
    marginBottom: 30,
  },
  button: {
    borderRadius: 8,
    borderWidth: 1,
    backgroundColor: "#000",
    borderColor: "#000",
    width: Dimensions.get("window").width - 32,
    height: 48,
    marginTop: 5,
    // marginBottom: 93,
    alignItems: "center",
  },
  fieldContainer: {
    marginBottom: 5,
  },
  error: {
    color: "red",
    fontWeight: "bold",
    marginVertical: 15,
    fontSize: 15,
  },
  textFieldError: {
    //flex: 1,
    flexDirection: "row",
    borderStyle: "solid",
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "red",
    margin: 10,
    paddingLeft: 20,
    height: 48,
  },
  buttonText: {
    paddingTop: 13,
    fontWeight: "bold",
    color: "#fff",
    fontSize: 15,
  },
  passwordTextField: {
    // flex: 1,
    flexDirection: "row",
    borderStyle: "solid",
    borderColor: "grey",
    borderWidth: 1,
    borderRadius: 8,
    margin: 10,
    paddingLeft: 20,
    height: 48,
    opacity: 1,
  },
  passwordTextInput: {
    width: "85%",
    color: "#000",
  },
});
export default Register;
