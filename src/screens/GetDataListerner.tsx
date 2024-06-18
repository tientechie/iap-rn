import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";

import { onValue, ref } from "firebase/database";
import { realtimeDb } from "../config/firebase";
import { DeviceData } from "../types";

const GetDataListerner = () => {
  const [data, setData] = useState<DeviceData>();

  useEffect(() => {
    const query = ref(realtimeDb, "Device1");

    // cleanUP
    return onValue(query, (snapshot) => {
      const dataSnap = snapshot.val();

      // has data
      if (snapshot.exists()) {
        setData(dataSnap);
      }
      // no data
      else {
      }
    });
  }, []);

  return (
    <View style={{ padding: 20 }}>
      <Text>HeartBeat: {data?.HeartBeat}</Text>
      <Text>SpO2: {data?.SpO2}</Text>
      <Text>Temperature: {data?.Temperature}</Text>
    </View>
  );
};

export default GetDataListerner;
