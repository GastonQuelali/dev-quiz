import { convertAbsoluteToRem } from 'native-base/lib/typescript/theme/tools';
import React, { useEffect } from 'react'
import { View, Text } from 'react-native'
import { useGlobalContext } from '../state/Context'

const Result = () => {
  const { state: {
    appState: { grifos, costos}
  }} = useGlobalContext();

  useEffect(() => {
    console.log('****** ');
  }, []);

  return (
    <View>
      <Text>Result</Text>
    </View>
  )
}

export default Result;
