import React, {useContext} from 'react';
import {Text, StyleSheet, SafeAreaView} from 'react-native';
import {AuthContext} from '../../contexts/AuthProvider';
import Button from '../../components/Button';

const Home = ({navigation}: any) => {
  const {user, logout} = useContext(AuthContext);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Olá, {user ? user.email : ''}</Text>
      <Button title="Sair" activeOpacity={0.5} onPress={logout} />
      <Button
        title="About"
        activeOpacity={0.5}
        onPress={() => {
          navigation.navigate('About');
        }}
      />
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
