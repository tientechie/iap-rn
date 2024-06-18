import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";

import { get, ref } from "firebase/database";
import { realtimeDb } from "../config/firebase";
import { DeviceData } from "../types";

const GetOne = () => {
  const [data, setData] = useState<DeviceData>();
  const getData = async () => {
    const deviceRef = ref(realtimeDb, "Device1");

    const dataSnap = await get(deviceRef);

    // has data
    if (dataSnap.exists) {
      const deviceData = dataSnap.val();
      setData(deviceData);
    }
    // no data
    else {
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <View style={{ padding: 20 }}>
      <Text>HeartBeat: {data?.HeartBeat}</Text>
      <Text>SpO2: {data?.SpO2}</Text>
      <Text>Temperature: {data?.Temperature}</Text>
    </View>
  );
};

export default GetOne;
