import React, {useEffect, useState} from 'react';
import {Text, StyleSheet, SafeAreaView} from 'react-native';
import {StorageClient} from '../../storage/storageClient';

const Home = () => {
  const [userInfo, setUserInfo] = useState<any>(null);
  const storageClient = new StorageClient();

  useEffect(() => {
    (async () => {
      const result = await storageClient.getData();
      if (!result) {
        console.log('deu ruim!');
        return;
      }

      setUserInfo(JSON.parse(result));
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>
        Olá, {userInfo !== null ? userInfo.email : ''}
      </Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 30,
    paddingVertical: 70,
  },

  title: {
    color: '#000',
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default Home;
