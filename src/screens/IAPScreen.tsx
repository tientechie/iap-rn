import { View, Text, FlatList, Button, Alert, Platform } from "react-native";
import React, { useEffect, useState } from "react";
import { ProductData } from "../types";
import { requestPurchase } from "react-native-iap";

const IAPScreen = () => {
  const [data, setData] = useState<ProductData[]>([]);

  const fetchData = async () => {
    // giả sử data có dạng sau
    const responseData: ProductData[] = [
      {
        id: "1",
        idIAP: {
          android: "family_3month",
          ios: "family_3month",
        },
        name: "3 Monthly",
        hasPurchased: true,
      },
      {
        id: "2",
        idIAP: {
          android: "family_6month",
          ios: "family_6month",
        },
        name: "6 Monthly",
        hasPurchased: false,
      },
      {
        id: "3",
        idIAP: {
          android: "family_1year",
          ios: "family_1year",
        },
        name: "12 Monthly",
        hasPurchased: false,
      },
    ];
    setData(responseData);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handlePurchase = async (productId: string) => {
    try {
      await requestPurchase({ skus: [productId] });
    } catch (error) {
      Alert.alert("Error occurred while making purchase");
    } finally {
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <FlatList
        data={data}
        renderItem={({ item }) => {
          return (
            <View
              key={item.id}
              style={{
                backgroundColor: "skyblue",
                marginBottom: 10,
              }}
            >
              <Text>Name: {item.name}</Text>
              {!item.hasPurchased && (
                <Button
                  title="BUY"
                  onPress={() => {
                    handlePurchase(item.idIAP[Platform.OS]);
                  }}
                />
              )}
            </View>
          );
        }}
      />
    </View>
  );
};

export default IAPScreen;
