import React, {useState} from 'react';
import {Alert} from 'react-native';
import {Container, Header, Title, Form} from './styles';
import Input from '../../components/Input';
import Button from '../../components/Button';
import {HttpClient} from '../../client/httpClient';
import {StorageClient} from '../../storage/storageClient';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const httpClient = new HttpClient();
  const storageClient = new StorageClient();

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
      const result = await httpClient.request({
        url: 'https://api-sandbox.pismolabs.io/auth/v1/users/login',
        method: 'POST',
        data: {
          email,
          password,
        },
        headers: {'content-type': 'application/json'},
      });

      await storageClient.clear();
      const userInfo = JSON.stringify(result.body);
      await storageClient.storeData(userInfo);

      Alert.alert(userInfo);
    } catch (error) {
      Alert.alert('Error: ' + JSON.stringify(error));
    }
  };

  return (
    <Container>
      <Header>
        <Title>Login</Title>
      </Header>

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
