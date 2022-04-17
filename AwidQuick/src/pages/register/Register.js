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
  StatusBar,
} from "react-native";
import CheckBox from "@react-native-community/checkbox";
import LinearGradient from "react-native-linear-gradient";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faEnvelope,
  faLock,
  faPhone,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
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
  const [terms, setTerms] = useState(false);

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
      <StatusBar backgroundColor="#16be5a" barStyle="light-content" />
      <View style={styles.mainContainer}>
        <Image
          source={require("../../assets/images/plat.jpg")}
          style={{
            height: Dimensions.get("window").height * 0.3,
            width: Dimensions.get("window").height * 0.4,
          }}
        />
        <View style={styles.form}>
          <View style={styles.formHeader}>
            <Text style={styles.formHeaderText}>SIGNUP</Text>
            <View>
              <Text>
                {i18n.t("sdaqRegisterLabel7")}{" "}
                <Text
                  style={{ color: "#16be5a", fontWeight: "bold" }}
                  onPress={() => navigation.navigate("Login")}
                >
                  {i18n.t("sdaqRegisterLabel8")}
                </Text>{" "}
              </Text>
            </View>
          </View>
          <View style={styles.fieldContainer}>
            <View style={styles.fieldView}>
              <TextInput
                style={styles.fieldInput}
                placeholder="Enter your email"
                onChangeText={(text) => setEmail(text.toLowerCase())}
              />
              <TouchableOpacity
                style={styles.icon1}
                onPress={() => {
                  setShowPassword(!showPassword);
                }}
              >
                <FontAwesomeIcon
                  style={styles.icon}
                  icon={faEnvelope}
                  color="#43ef98"
                  size={20}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.fieldContainer}>
            <View style={styles.passwordTextField}>
              <TextInput
                style={styles.passwordTextInput}
                secureTextEntry={showPassword}
                placeholder="Enter your password"
                onChangeText={(text) => setPassword(text)}
              />
              <TouchableOpacity
                style={styles.icon1}
                onPress={() => {
                  setShowPassword(!showPassword);
                }}
              >
                <FontAwesomeIcon
                  style={styles.icon}
                  icon={faLock}
                  color="#43ef98"
                  size={20}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.fieldContainer}>
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
              <TouchableOpacity
                style={styles.icon1}
                onPress={() => {
                  setShowPassword(!showPassword);
                }}
              >
                <FontAwesomeIcon
                  style={styles.icon}
                  icon={faLock}
                  color="#43ef98"
                  size={20}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.fieldContainer}>
            <View style={styles.fieldView}>
              <TextInput
                style={styles.fieldInput}
                placeholder="Votre numero de tel"
                onChangeText={(text) => setEmail(text.toLowerCase())}
              />
              <TouchableOpacity
                style={styles.icon1}
                onPress={() => {
                  setShowPassword(!showPassword);
                }}
              >
                <FontAwesomeIcon
                  style={styles.icon}
                  icon={faPhone}
                  color="#43ef98"
                  size={20}
                />
              </TouchableOpacity>
            </View>
          </View>
          <Text>{error && <Text style={styles.error}> {error} </Text>} </Text>
          <TouchableOpacity style={styles.button} onPress={submitAction}>
            {/* <Text style={styles.buttonText}>
              {i18n.t("sdaqRegisterLabel6")}
            </Text> */}
            <LinearGradient
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              colors={["#16be5a", "#95e88e", "#fff99a"]}
              style={styles.linearGradient}
            >
              <Text style={styles.buttonTextLinear}>Sign up</Text>
              <TouchableOpacity
                style={styles.icon1}
                onPress={() => {
                  setShowPassword(!showPassword);
                }}
              >
                <FontAwesomeIcon
                  style={styles.icon}
                  icon={faPaperPlane}
                  color="#16be5a"
                  size={20}
                />
              </TouchableOpacity>
            </LinearGradient>
          </TouchableOpacity>
        </View>
        <View style={styles.checkboxContainer}>
          <CheckBox
            value={terms}
            onValueChange={setTerms}
            style={styles.checkbox}
          />
          <Text style={{ fontSize: 15, marginTop: 4 }}>
            Accept terms and conditions
          </Text>
        </View>

        <Image
          source={require("../../assets/images/foodGrey.jpg")}
          style={{
            height: Dimensions.get("window").height * 0.3,
            width: Dimensions.get("window").width,
            opacity: 0.3,
          }}
        />
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
    // marginRight: 2,
    // marginTop: 5,
    // alignSelf: "flex-end",
  },
  textField: {
    borderStyle: "solid",
    borderColor: "grey",
    borderWidth: 1,
    borderRadius: 22,
    margin: 10,
    paddingLeft: 20,
    height: 48,
    opacity: 0.8,
    color: "#000",
    // elevation: 1,
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
    marginBottom: 3,
  },
  button: {
    borderRadius: 22,
    borderWidth: 0.2,
    backgroundColor: "#000",
    borderColor: "#000",
    width: Dimensions.get("window").width - 32,
    height: Dimensions.get("window").height * 0.07,
    marginTop: 5,
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
  fieldView: {
    flexDirection: "row",
    borderStyle: "solid",
    borderColor: "grey",
    borderWidth: 1,
    borderRadius: 22,
    margin: 10,
    paddingLeft: 20,
    height: 48,
    opacity: 1,
  },
  fieldInput: {
    width: "85%",
    color: "#000",
  },
  passwordTextField: {
    flexDirection: "row",
    borderStyle: "solid",
    borderColor: "grey",
    borderWidth: 1,
    borderRadius: 22,
    margin: 10,
    paddingLeft: 20,
    height: 48,
    opacity: 1,
  },
  passwordTextInput: {
    width: "85%",
    color: "#000",
  },
  formHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  formHeaderText: {
    fontWeight: "bold",
  },
  linearGradient: {
    height: "100%",
    width: "100%",
    borderRadius: 22,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  buttonTextLinear: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    margin: 10,
    // marginRight: 25,
    color: "#fff",
    backgroundColor: "transparent",
  },
  icon: {
    alignSelf: "flex-end",
    opacity: 0.9,
  },
  checkboxContainer: {
    flexDirection: "row",
    // marginBottom: 3,
    alignSelf: "flex-start",
    marginLeft: 20,
  },
  checkbox: {
    // alignSelf: "center",
    borderRadius: 40,
  },
});
export default Register;
