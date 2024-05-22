const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import ProductDetailLanding from "./screens/ProductDetailLanding";
import StylestandardStatefocused from "./components/StylestandardStatefocused";
import SizeXLargeStateActiveTy from "./components/SizeXLargeStateActiveTy";
import DarkModefalse1 from "./components/DarkModefalse1";
import BackgroundtransparentTypeW from "./components/BackgroundtransparentTypeW";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  const [fontsLoaded, error] = useFonts({
    "Nunito-Regular": require("./assets/fonts/Nunito-Regular.ttf"),
    "Nunito-Medium": require("./assets/fonts/Nunito-Medium.ttf"),
    "Nunito-SemiBold": require("./assets/fonts/Nunito-SemiBold.ttf"),
    "Nunito-Bold": require("./assets/fonts/Nunito-Bold.ttf"),
    "Nunito-ExtraBold": require("./assets/fonts/Nunito-ExtraBold.ttf"),
    "NunitoSans12pt-Bold": require("./assets/fonts/NunitoSans12pt-Bold.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="ProductDetailLanding"
              component={ProductDetailLanding}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
