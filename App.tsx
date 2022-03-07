import React, { useReducer } from 'react';

import Main from './src/screens/Main';
import { colors } from './src/theme/base';
import Route from './src/navigation/Route';
import Result from './src/screens/Result';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import GlobalContext from './src/state/Context';
import { rootReducer } from './src/state/Reducers';
import initialState from './src/state/State';

const Stack = createNativeStackNavigator();

const optionsDefault = {
  title: '',
  headerStyle: {
    backgroundColor: colors.white,
  },
  headerTintColor: colors.black,
  headerShadowVisible: false,
  headerBackTitleVisible: false,
};

export default function App() {
  const [state, dispatch] = useReducer(rootReducer, initialState);
  
  return (
    <GlobalContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      <NavigationContainer >
      <Stack.Navigator>
        <Stack.Screen name={Route.Main} component={Main} options={optionsDefault} />
        <Stack.Screen
          name={Route.Result}
          component={Result}
          options={{ headerShown: true }}
        />
      </Stack.Navigator>
    </NavigationContainer>
    </GlobalContext.Provider>
    
  );
}
