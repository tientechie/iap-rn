import { Platform, StyleSheet } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./src/screens/HomeScreen";

import { createStackNavigator } from "@react-navigation/stack";
import GetDataListerner from "./src/screens/GetDataListerner";
import GetOne from "./src/screens/GetOne";
import IAPScreen from "./src/screens/IAPScreen";

import {
  endConnection,
  flushFailedPurchasesCachedAsPendingAndroid,
  initConnection,
} from "react-native-iap";
import { useEffect } from "react";

const Stack = createStackNavigator();

export default function App() {
  useEffect(() => {
    const init = async () => {
      try {
        await initConnection();
        if (Platform.OS === "android") {
          flushFailedPurchasesCachedAsPendingAndroid();
        }
      } catch (error) {
        console.error("Error occurred during initilization", error.message);
      }
    };
    init();

    // cleanUP
    return () => {
      endConnection();
    };
  }, []);

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="GetOne" component={GetOne} />
          <Stack.Screen name="GetDataListerner" component={GetDataListerner} />
          <Stack.Screen name="IAP" component={IAPScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
