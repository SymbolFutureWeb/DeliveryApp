import React from "react";
import { connect } from "react-redux";

import Login from "../pages/login/Login";

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
// import {
//   faHome,
//   faUtensils,
//   faDumbbell,
//   faChartPie,
//   faUser,
// } from "@fortawesome/free-solid-svg-icons";
import Register from "../pages/register/Register";

const mapStateToProps = (state) => ({
  token: state.authReducer.userToken,
  isSignedOut: state.authReducer.isSignedOut,
  user: state.authReducer.user,
});

// const bottomTabNavigator = createBottomTabNavigator();
const mainStackNavigator = createStackNavigator();
const signUpStackNavigator = createStackNavigator();

// function profilStack() {
//   return (
//     <profilStackNavigator.Navigator
//       initialRouteName="Profil"
//       screenOptions={{ headerShown: false }}
//     >
//       <profilStackNavigator.Screen name="Profil" component={Profil} />
//     </profilStackNavigator.Navigator>
//   );
// }

function signUpStack() {
  return (
    <signUpStackNavigator.Navigator
      initialRouteName="Login"
      screenOptions={{ headerShown: false }}
    >
      <signUpStackNavigator.Screen name="Register" component={Register} />
      <signUpStackNavigator.Screen name="Login" component={Login} />
    </signUpStackNavigator.Navigator>
  );
}

// function bottomTabNav() {
//   return (
//     <bottomTabNavigator.Navigator
//       initialRouteName="Home"
//       screenOptions={
//         // { headerShown: false },
//         ({ route }) => ({
//           tabBarIcon: ({ focused, color = "#3a3b3c", size = 20 }) => {
//             let iconName;

//             if (route.name === "Home") {
//               iconName = focused ? faHome : faHome;
//             }

//             // You can return any component that you like here!
//             return <FontAwesomeIcon icon={iconName} color="#000" size={20} />;
//           },
//           tabBarActiveTintColor: "#000",
//           tabBarInactiveTintColor: "gray",
//           headerShown: false,
//         })
//       }
//       // screenOptions={{ headerShown: false }}
//     >
//       {/* <bottomTabNavigator.Screen name="Home" component={calendarStack} />
//       <bottomTabNavigator.Screen name="Profile" component={profilStack} /> */}
//     </bottomTabNavigator.Navigator>
//   );
// }

function Navigation({ isSignedOut, user }) {
  if (isSignedOut) {
    return (
      <NavigationContainer>
        <mainStackNavigator.Navigator
          initialRouteName="loginScreen"
          screenOptions={{ headerShown: false }}
        >
          <mainStackNavigator.Screen
            name="RegisterStack"
            component={signUpStack}
          />
          {/* <mainStackNavigator.Screen name="TabNav" component={bottomTabNav} /> */}
          {/* <mainStackNavigator.Screen name="AdminDash" component={adminStack} /> */}
        </mainStackNavigator.Navigator>
      </NavigationContainer>
    );
  }
  //   else {
  //     if (user && user.Role === "Admin") {
  //       return (
  //         <NavigationContainer>
  //           <mainStackNavigator.Navigator
  //             initialRouteName="TabNav"
  //             screenOptions={{ headerShown: false }}
  //           >
  //             <mainStackNavigator.Screen
  //               name="AdminDash"
  //               component={adminStack}
  //             />
  //             <mainStackNavigator.Screen name="TabNav" component={bottomTabNav} />
  //           </mainStackNavigator.Navigator>
  //         </NavigationContainer>
  //       );
  //     }
  //   }
}

export default connect(mapStateToProps)(Navigation);
