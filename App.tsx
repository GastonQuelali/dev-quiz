import React from 'react';
import { SafeAreaView } from 'react-native';
import Main from './src/screens/Main';
import { colors } from './src/theme/base';
import Route from './src/navigation/Route';
import { Result } from './src/screens/Result';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

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
  return (
    <NavigationContainer >
      <Stack.Navigator>
        <Stack.Screen name={Route.Main} component={Main} options={optionsDefault} />
        <Stack.Screen
          name={Route.Result}
          component={Result}
          options={optionsDefault}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
