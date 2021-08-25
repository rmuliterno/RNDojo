import React, {createContext, useEffect, useState} from 'react';
import {StorageClient} from '../storage/storageClient';
import {auth} from '../helpers/api';

type AuthContextContract = {
  user: any;
  login: (email: string, password: string) => void;
  logout: () => void;
  isAuthenticate: boolean;
};

const DefaultValue: AuthContextContract = {
  user: null,
  login: () => {},
  logout: () => {},
  isAuthenticate: false,
};

const AuthContext = createContext<AuthContextContract>(DefaultValue);

const AuthProvider = ({children}: {children: JSX.Element}) => {
  const [user, setUser] = useState(null);
  const [isAuthenticate, setIsAuthenticate] = useState(false);

  const login = async (email: string, password: string) => {
    const storageClient = new StorageClient();
    const result = await auth(email, password);

    if (result.statusCode !== 201) {
      setUser(null);
      return;
    }

    const userInfo = result.body;
    await storageClient.storeData('pismo-auth', JSON.stringify(userInfo));

    setUser(userInfo);
    setIsAuthenticate(true);
  };

  const logout = async () => {
    const storageClient = new StorageClient();
    await storageClient.clearData('pismo-auth');
    setUser(null);
    setIsAuthenticate(false);
  };

  useEffect(() => {
    (async () => {
      const storageClient = new StorageClient();
      const result = await storageClient.getData('pismo-auth');

      if (result) {
        setUser(JSON.parse(result));
        setIsAuthenticate(true);
      }
    })();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        isAuthenticate,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export {AuthContext, AuthProvider};
