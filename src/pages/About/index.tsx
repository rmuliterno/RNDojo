import React from 'react';
import {Text, StyleSheet, SafeAreaView} from 'react-native';
import Button from '../../components/Button';
import {Container} from './styles';

const About = ({navigation}: any) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>About</Text>
      <Container>
        Next-gen banking and payments at hyperscale Build financial products
        fast and reliably with our all-in-one, cloud-native platform
      </Container>
      <Button
        title="Home"
        activeOpacity={0.5}
        onPress={() => {
          navigation.navigate('Home');
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

export default About;
