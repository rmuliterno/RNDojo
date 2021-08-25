import {HttpClient} from '../client/httpClient';

export const auth = async (email: string, password: string) => {
  const httpClient = new HttpClient();
  const result = await httpClient.request({
    url: 'https://api-sandbox.pismolabs.io/auth/v1/users/login',
    method: 'POST',
    data: {
      email,
      password,
    },
    headers: {'content-type': 'application/json'},
  });

  return result;
};
