import AsyncStorage from '@react-native-async-storage/async-storage';

class StorageClient {
  storeData = async (key: string, value: string) => {
    try {
      const result = await AsyncStorage.setItem(key, value);
      return result;
    } catch (e) {
      console.log('Houve um erro ao persistir o valor no storage.');
    }
  };

  getData = async (key: string) => {
    let value = null;
    try {
      value = await AsyncStorage.getItem(key);
    } catch (e) {
      console.log('Houve um erro ao recuperar o valor do storage.');
    }

    return value;
  };

  clearData = async (key: string) => {
    await AsyncStorage.removeItem(key);
  };
}

export {StorageClient};
