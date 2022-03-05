import { convertAbsoluteToRem } from 'native-base/lib/typescript/theme/tools';
import React, { useEffect } from 'react'
import { View, Text } from 'react-native'
import { useGlobalContext } from '../state/Context'

const Result = () => {
  const { state: {
    appState: { grifos, costos }
  } } = useGlobalContext();

  const rotateArray = ( array: number[] )=> {
    const rotatedArr = array.slice(1, array.length);
    return [...rotatedArr, array[0]];
  };

  useEffect(() => {
    const arr = [1, 3, 6, 5, 4];
    const rotatedArr = arr.slice(1, arr.length);
    console.log('NEW ROTATE', [...rotatedArr, arr[0]]);

    const suficiente:boolean = true;

    if (grifos && costos) {
      if (grifos?.length > 0 && costos?.length > 0) {
        let newGrifos = grifos;
        let newCostos = costos;

        for ( let i =0; i < grifos.length; i++ ) {
          console.log('----------- GRIFO ', i, '-----------');
          newGrifos = rotateArray(newGrifos);
          console.log('new grifos', newGrifos);
          
          newCostos = rotateArray(newCostos);
          console.log('new costos', newCostos);

          let tanque: number = 0 + Number(newGrifos[0]);
          console.log('TANQUE', tanque);
          let valor: number = 0;

          console.log(newGrifos.map((grifo: number, index: number) => {
            const index_grifos = index + 1 === newGrifos.length ? 0 : index + 1;
            const index_costos = index === newCostos.length ? 0 : index;
            valor = tanque - Number(newCostos[index_costos]) + Number(newGrifos[index_grifos]);
            tanque = valor;
            return valor;
          }));
        }
      }
    }

  }, []);

  return (
    <View>
      <Text>Result</Text>
    </View>
  )
}

export default Result;
