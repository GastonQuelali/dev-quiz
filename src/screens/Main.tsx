import React, { FC, useState } from 'react'
import Button from '../components/Button';

import Paragraph from '../components/Paragraph';
import ScreenLayout from '../components/ScreenLayout';
import TextInput from '../components/TextInput';
import Title from '../components/Title';
import Wrapper from '../components/Wrapper';

import { IScreen } from '../utils/interfaces';

const Main: FC<IScreen> = () => {

  const [email, setEmail] = useState('');
  const [cellPhone, setCellPhone] = useState('');

  const changeEmailText = (text: string) => {
    setEmail(text);
  }
  const changeCellPhoneText = (text: string) => {
    setCellPhone(text);
  }

  const handleSubmit = () => {
    console.log()
  }

  return (
    <ScreenLayout>
    <Wrapper>
      <Title text={'Ingresar'} bold={false} />
      <Paragraph>Datos para ingresar al sistema</Paragraph>
    </Wrapper>
    <Wrapper>
      <TextInput
        value={email}
        defaultValue={''}
        // maxLength={14}
        label={'Email'}
        onChangeText={changeEmailText}
      />
      <TextInput
        value={cellPhone}
        defaultValue={''}
        // maxLength={14}
        label={'Nro. Celular'}
        onChangeText={changeCellPhoneText}
      />
      <Button
        // filled={isFetching}
        // loading={!isFetching}
        text={'Aceptar'}
        onPress={handleSubmit}
      />
    </Wrapper>
  </ScreenLayout>
  )
}

export default Main;
