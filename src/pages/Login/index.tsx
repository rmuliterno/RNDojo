import React, {useState} from 'react';
import {Alert} from 'react-native';
import {Container, Header, Title, Form} from './styles';
import Input from '../../components/Input';
import Button from '../../components/Button';

const Login = () => {
  const [email, setEmail] = useState('');

  const handlePress = () => {
    Alert.alert('title', email);
  };

  const handleChange = (value: string) => {
    setEmail(value);
  };

  return (
    <Container>
      <Header>
        <Title>Login</Title>
      </Header>

      <Form>
        <Input placeholder="email" value={email} onChangeText={handleChange} />
        <Button title="Entrar" activeOpacity={0.5} onPress={handlePress} />
      </Form>
    </Container>
  );
};

export default Login;
