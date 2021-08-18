import AsyncStorage from '@react-native-async-storage/async-storage';

class StorageClient {
  storeData = async (value: string) => {
    try {
      const result = await AsyncStorage.setItem('my_key', value);
      return result;
    } catch (e) {
      console.log('Houve um erro ao persistir o valor no storage.');
    }
  };

  getData = async () => {
    let value = null;
    try {
      value = await AsyncStorage.getItem('my_key');
    } catch (e) {
      console.log('Houve um erro ao recuperar o valor do storage.');
    }

    return value;
  };

  clear = async () => {
    await AsyncStorage.removeItem('my_key');
  };
}

export {StorageClient};
