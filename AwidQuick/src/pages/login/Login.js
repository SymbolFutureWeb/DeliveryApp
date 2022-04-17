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
import LinearGradient from "react-native-linear-gradient";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faEnvelope,
  faLock,
  faPhone,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
import JwtDecode from "jwt-decode";
import { connect } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";

import i18n from "../../translation/index";
import { authenticateUser } from "../../services/auth.service";

const mapStateToProps = (state) => ({
  token: state.authReducer.userToken,
  isSignedOut: state.authReducer.isSignedOut,
  user: state.authReducer.user,
});

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

_saveToken = async (token, user) => {
  try {
    console.log("saving user");
    await AsyncStorage.setItem("token", JSON.stringify({ token, user }));
  } catch (e) {
    // saving error
    console.log(e);
  }
};

_authenticate = async (navigation) => {
  const user = {
    Email: email,
    Password: password,
  };
  if (email === "" || password === "") {
    Alert.alert(i18n.t("fitnessLoginAlert2"), i18n.t("fitnessLoginAlert"), [
      {
        text: "OK",
      },
    ]);
  } else {
    await authenticateUser(user).then((data) => {
      // console.log(data);
      if (!data.success && data.msg === " email  is incorrect") {
        Alert.alert(
          i18n.t("fitnessLoginAlert2"),
          i18n.t("fitnessLoginAlert3"),
          [
            {
              text: "OK",
            },
          ]
        );
      }
      if (!data.success && data.msg === " email  is already used") {
        Alert.alert(
          i18n.t("fitnessLoginAlert4"),
          i18n.t("fitnessLoginAlert5"),
          [
            {
              text: "OK",
            },
          ]
        );
      }
      if (!data.success && data.msg === " password is incorrect.") {
        Alert.alert(
          i18n.t("fitnessLoginAlert2"),
          i18n.t("fitnessLoginAlert6"),
          [
            {
              text: "OK",
            },
          ]
        );
      }
      if (typeof data !== "undefined") {
        if (data) {
          const decoded = JwtDecode(data.token.toString());
          const authUser = {
            _id: decoded._id,
            name: decoded.name,
            sex: decoded.sex,
            tel: decoded.tel,
            Role: decoded.Role,
            mail: decoded.mail,
            interest: decoded.interest,
            address: decoded.address,
            source: decoded.source,
          };
          console.log(JSON.stringify(decoded));
          this._saveToken(data.token, authUser);
          this.toggleAuth(data.token, authUser);
          this.loginInput.clear();
          this.passwordInput.clear();
          navigation.navigate("Home");
        }
      } else {
        Alert.alert(
          i18n.t("fitnessLoginAlert2"),
          i18n.t("fitnessLoginAlert2"),
          [
            {
              text: "OK",
            },
          ]
        );
        navigation.navigate("Login");
      }
    });
  }
};

function Login({ navigation, dispatch }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passBoolean, setPassBoolean] = useState(true);
  const [showPassword, setShowPassword] = useState(true);

  _saveToken = async (token, user) => {
    try {
      console.log("saving user");
      await AsyncStorage.setItem("token", JSON.stringify({ token, user }));
    } catch (e) {
      // saving error
      console.log(e);
    }
  };

  _authenticate = async () => {
    const user = {
      Email: email,
      Password: password,
    };
    if (email === "" || password === "") {
      Alert.alert(i18n.t("fitnessLoginAlert2"), i18n.t("fitnessLoginAlert"), [
        {
          text: "OK",
        },
      ]);
    } else {
      await authenticateUser(user).then((data) => {
        // console.log(data);
        if (!data.success && data.msg === " email  is incorrect") {
          Alert.alert(
            i18n.t("fitnessLoginAlert2"),
            i18n.t("fitnessLoginAlert3"),
            [
              {
                text: "OK",
              },
            ]
          );
        }
        if (!data.success && data.msg === " email  is already used") {
          Alert.alert(
            i18n.t("fitnessLoginAlert4"),
            i18n.t("fitnessLoginAlert5"),
            [
              {
                text: "OK",
              },
            ]
          );
        }
        if (!data.success && data.msg === " password is incorrect.") {
          Alert.alert(
            i18n.t("fitnessLoginAlert2"),
            i18n.t("fitnessLoginAlert6"),
            [
              {
                text: "OK",
              },
            ]
          );
        }
        if (typeof data !== "undefined") {
          if (data) {
            const decoded = JwtDecode(data.token.toString());
            const authUser = {
              _id: decoded._id,
              name: decoded.name,
              sex: decoded.sex,
              tel: decoded.tel,
              Role: decoded.Role,
              mail: decoded.mail,
              interest: decoded.interest,
              address: decoded.address,
              source: decoded.source,
            };
            console.log(JSON.stringify(decoded));
            _saveToken(data.token, authUser);
            toggleAuth(data.token, authUser);
            setEmail("");
            setPassword("");
            navigation.navigate("Home");
          }
        } else {
          Alert.alert(
            i18n.t("fitnessLoginAlert2"),
            i18n.t("fitnessLoginAlert2"),
            [
              {
                text: "OK",
              },
            ]
          );
          navigation.navigate("Login");
        }
      });
    }
  };

  toggleAuth = (token, user) => {
    console.log("saving user to redux", user);
    const action = {
      type: "SIGN_IN",
      value: { token, isSignedOut: false, user },
    };
    dispatch(action);
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
            marginTop: Dimensions.get("window").height * 0.01,
          }}
        />
        <View style={styles.form}>
          <View style={styles.formHeader}>
            <Text style={styles.formHeaderText}>SIGNIN</Text>
            <View>
              <Text>
                {i18n.t("sdaqLoginLabel7")}{" "}
                <Text
                  style={{ color: "#16be5a", fontWeight: "bold" }}
                  onPress={() => navigation.navigate("loginScreen")}
                >
                  {i18n.t("sdaqLoginLabel8")}
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
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              _authenticate(props.navigation);
            }}
          >
            {/* <Text style={styles.buttonText}>
            {i18n.t("sdaqRegisterLabel6")}
          </Text> */}
            <LinearGradient
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              colors={["#16be5a", "#95e88e", "#fff99a"]}
              style={styles.linearGradient}
            >
              <Text style={styles.buttonTextLinear}>Sign in</Text>
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
          <Text
            style={{
              fontSize: 15,
              fontWeight: "600",
              marginTop: Dimensions.get("window").height * 0.05,
              marginBottom: Dimensions.get("window").height * 0.05,
            }}
          >
            Forgot your password ?
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
    marginTop: Dimensions.get("window").height * 0.01,
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
    marginTop: Dimensions.get("window").height * 0.02,
    marginBottom: Dimensions.get("window").height * 0.03,
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
export default connect(mapStateToProps)(Login);
