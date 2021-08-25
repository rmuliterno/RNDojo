import React, {useContext, useState} from 'react';
import {Alert} from 'react-native';
import {Container, Header, Title, Form} from './styles';
import Input from '../../components/Input';
import Button from '../../components/Button';
import {AuthContext} from '../../contexts/AuthProvider';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {login} = useContext(AuthContext);

  const handleLogin = async () => {
    if (!email) {
      Alert.alert('Campo obrigatório', 'Por favor, informe o email.');
      return;
    }

    if (!password) {
      Alert.alert('Campo obrigatório', 'Por favor, informe a senha.');
      return;
    }

    try {
      login(email, password);
    } catch (error) {
      Alert.alert('Error: ' + JSON.stringify(error));
    }
  };

  return (
    <Container>
      <Form>
        <Input
          placeholder="email"
          value={email}
          onChangeText={value => setEmail(value)}
        />
        <Input
          placeholder="password"
          value={password}
          onChangeText={value => setPassword(value)}
          secureTextEntry={true}
        />
        <Button title="Entrar" activeOpacity={0.5} onPress={handleLogin} />
      </Form>
    </Container>
  );
};

export default Login;
