import React, { useEffect } from 'react';
import { Text, View } from 'react-native';

import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { RootStackParams } from '../../routes/StackNavigator';

import { globalStyles } from '../../theme/theme';


export const ProductScreen = () => {
  //* Tipado de la ruta para acceder a los parametros usando useRoute() que permite obtener los parametros de la ruta
  //* entre otras cosas.
  const { params } = useRoute<RouteProp<RootStackParams, 'Product'>>();
  const navigation = useNavigation();

  //* useEffect para cambiar el titulo del header de la pantalla
  useEffect(() => {
    navigation.setOptions({
      title: params.name,
    });
  });

  return (
    <View style={globalStyles.container}>
      <Text>ProductScreen.tsx</Text>

      <Text style={{
        fontSize: 20,
        textAlign: 'center',
        marginTop: 20,
      }}>{params.id} - {params.name}</Text>
    </View>
  );
};
