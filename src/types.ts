export interface DeviceData {
  HeartBeat: number;
  SpO2: number;
  Temperature: number;
}

export interface ProductData {
  id: string;
  idIAP: {
    android: string;
    ios: string;
  };
  name: string;
  hasPurchased: boolean;
}
