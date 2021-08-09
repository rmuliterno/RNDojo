import React, {useState} from 'react';
import {
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';

const Home = () => {
  const [email, setEmail] = useState('asd');

  const createTwoButtonAlert = () =>
    Alert.alert('Alert Title', email, [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>React Native Dojo</Text>

      <TextInput
        style={styles.input}
        placeholder="email"
        placeholderTextColor="#666"
        value={email}
        onChange={e => setEmail(e.nativeEvent.text)}
      />

      <TouchableOpacity
        activeOpacity={0.5}
        style={styles.button}
        onPress={createTwoButtonAlert}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121015',
    paddingHorizontal: 30,
    paddingVertical: 70,
  },

  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },

  input: {
    backgroundColor: '#1f1e25',
    color: '#fff',
    fontSize: 18,
    padding: 15,
    marginTop: 30,
    borderRadius: 8,
  },

  button: {
    backgroundColor: '#70d2f7',
    padding: 20,
    borderRadius: 7,
    alignItems: 'center',
    marginTop: 18,
  },

  buttonText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: 'bold',
  },
});

export default Home;
