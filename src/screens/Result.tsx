import React, { FC, useEffect, useState } from 'react'
import Paragraph from '../components/Paragraph';
import ScreenLayout from '../components/ScreenLayout';
import Title from '../components/Title';
import Wrapper from '../components/Wrapper';
import { useGlobalContext } from '../state/Context'
import { rotateArray } from '../utils/Array';
import { IScreen } from '../utils/interfaces';

const Result: FC<IScreen> = () => {
  const { state: {
    appState: { grifos, costos }
  } } = useGlobalContext();

  const [parametro, setParametro] = useState(-1);

  useEffect(() => {
    if (grifos && costos) {
      if (grifos?.length > 0 && costos?.length > 0) {
        let newGrifos = grifos;
        let newCostos = costos;
        let newCalculare = [];
        let canToCalculate = [];
        for (let i = 0; i < grifos.length; i++) {

          let tanque: number = 0 + Number(newGrifos[0]);
          let valor: number = 0;

          if (newGrifos[0] >= newCostos[0]) {

            newCalculare = newGrifos.map((grifo: number, index: number) => {

              const index_grifos = index + 1 === newGrifos.length ? 0 : index + 1;
              const index_costos = index === newCostos.length ? 0 : index;
              valor = tanque - Number(newCostos[index_costos]) + Number(newGrifos[index_grifos]);
              tanque = valor;
              return valor;

            });

            canToCalculate.push({ index: i, calculate: newCalculare, costo: newCostos });
            
          } else {
            console.log("insuficienteee");
          }

          newGrifos = rotateArray(newGrifos);
          newCostos = rotateArray(newCostos);

        }

        if (canToCalculate.length > 0) {
          for (let i = 0; i < canToCalculate.length; i++) {
            console.log(canToCalculate[i].costo, canToCalculate[i].calculate)
            if (canToCalculate[i].costo[costos.length - 1] <= canToCalculate[i].calculate[costos.length - 2]) {
              setParametro(canToCalculate[i].index);
              } else {
              setParametro(-1); 
            }
          }
        }
      }
    }

  }, []);

  return (
    <ScreenLayout>
      <Wrapper>
        <Title text={'Resultado'} bold={true} />
      </Wrapper>
      <Wrapper>
        <Paragraph>
          Parametros de Entrada.
        </Paragraph>
        <Paragraph>
          Grifos: { JSON.stringify(grifos) }
        </Paragraph>
        <Paragraph>
          Costos: { JSON.stringify(costos) }
        </Paragraph>
      </Wrapper>
      <Wrapper>
        <Paragraph> Parametro devuelto: {parametro}</Paragraph>
      </Wrapper>
    </ScreenLayout>
  )
}

export default Result;
