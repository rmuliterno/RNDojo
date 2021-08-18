import React, {useEffect, useState} from 'react';
import Home from './src/pages/Home';

import Login from './src/pages/Login';
import {StorageClient} from './src/storage/storageClient';

const App = () => {
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

  if (userInfo !== null) {
    return <Home />;
  }

  return <Login />;
};

export default App;
