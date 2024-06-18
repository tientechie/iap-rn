import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Button, Text, View } from "react-native";

const HomeScreen = () => {
  const navigation = useNavigation();

  const getOne = () => {
    navigation.navigate("GetOne");
  };

  const getDataListerner = () => {
    navigation.navigate("GetDataListerner");
  };

  const iap = () => {
    navigation.navigate("IAP");
  };

  return (
    <View>
      <Button title="Lấy dữ liệu 1 lần" onPress={getOne} />
      <Button title="Lấy dữ liệu mỗi lần thay đổi" onPress={getDataListerner} />
      <Button title="IAP" onPress={iap} />
    </View>
  );
};

export default HomeScreen;
