import React, { FC, useState } from 'react'
import Button from '../components/Button';

import Paragraph from '../components/Paragraph';
import ScreenLayout from '../components/ScreenLayout';
import TextInput from '../components/TextInput';
import Title from '../components/Title';
import Wrapper from '../components/Wrapper';
import Route from '../navigation/Route';
import { setData } from '../state/Actions';
import { useGlobalContext } from '../state/Context';

import { IScreen } from '../utils/interfaces';

const Main: FC<IScreen> = ({ navigation }) => {
  
  const {dispatch} = useGlobalContext();

  const [grifo, setGrifo] = useState('1, 2, 3, 4, 5');
  const [costo, setCosto] = useState('3, 4, 5, 1, 2');

  const changeGrifoText = (text: string) => {
    setGrifo(text);
  }
  const changeCostoText = (text: string) => {
    setCosto(text);
  }

  const handleSubmit = () => {
    const grifos = grifo.split(',').map(item => Number(item.trim()));
    const costos = costo.split(',').map(item => Number(item.trim()));
    
    dispatch(setData({ grifos, costos }));
    navigation.navigate(Route.Result);
  }

  return (
    <ScreenLayout>
    <Wrapper>
      <Title text={'Ingresar'} bold={false} />
      <Paragraph>Datos para ingresar</Paragraph>
    </Wrapper>
    <Wrapper>
      <TextInput
        value={grifo}
        defaultValue={''}
        // maxLength={14}
        label={'Grifo'}
        onChangeText={changeGrifoText}
      />
      <TextInput
        value={costo}
        defaultValue={''}
        // maxLength={14}
        label={'Costo'}
        onChangeText={changeCostoText}
      />
      <Button
        filled={false}
        loading={true}
        text={'Aceptar'}
        onPress={handleSubmit}
      />
    </Wrapper>
  </ScreenLayout>
  )
}

export default Main;
