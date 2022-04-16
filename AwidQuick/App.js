import React, { useEffect } from "react";
import { Provider } from "react-redux";
import SplashScreen from "react-native-splash-screen";
import Navigation from "./src/navigation/Navigation";
import store from "./src/store/configureStore";

export default function App() {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}
