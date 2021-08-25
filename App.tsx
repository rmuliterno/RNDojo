import React, {useContext} from 'react';
import Home from './src/pages/Home';

import Login from './src/pages/Login';
import {AuthContext} from './src/contexts/AuthProvider';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {StoreProvider} from './src/contexts/StoreProvider';
import About from './src/pages/About';

const Stack = createStackNavigator();

const Navigation = () => {
  const {isAuthenticate} = useContext(AuthContext);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {!isAuthenticate && <Stack.Screen name="Login" component={Login} />}
        {isAuthenticate && (
          <>
            <Stack.Screen name="About" component={About} />
            <Stack.Screen name="Home" component={Home} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const App = () => {
  return (
    <StoreProvider>
      <Navigation />
    </StoreProvider>
  );
};

export default App;
