import React from 'react';
import {Text, View} from 'react-native';
import {StackActions, useNavigation} from '@react-navigation/native';

import {globalStyles} from '../../theme/theme';
import {PrimaryButton} from '../../components/shared/PrimaryButton';

export const SettingsScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={globalStyles.container}>
      <Text>Settings Screen</Text>

      <PrimaryButton label="Regresar" onPress={() => navigation.goBack()} />
      {/*'navigation.dispatch()' permite habilitar opciones para manejar redirecciones a pantallas de nuestro stack,
        y StackActions contiene los metodos que hacen posible lo anterior comentado*/}
      <PrimaryButton
        label="Regresar al Home"
        //* 'StackActions.popToTop()' nos permite regresar a la pantalla inicial de nuestro stack
        onPress={() => navigation.dispatch(StackActions.popToTop())}
      />
    </View>
  );
};
