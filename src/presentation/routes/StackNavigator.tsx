import React, { useEffect } from 'react';

import {useNavigation} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { HomeScreen } from '../screens/home/HomeScreen';
import { ProductsScreen } from '../screens/products/ProductsScreen';
import { SettingsScreen } from '../screens/settings/SettingsScreen';
import { ProductScreen } from '../screens/products/ProductScreen';


//* Tipado de las rutas del Stack y sus parametros
export type RootStackParams = {
  Home: undefined;
  Product: { id: number; name: string };
  Products: undefined;
  Settings: undefined;
};


const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () => {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      //* Deshabilita el header de del StackNavigator
      headerShown: false,
    });
  });

  return (
    // 'screenOptions' es un objeto que permite definir opciones para todas las pantallas del Stack
    <Stack.Navigator
      screenOptions={{
        // 'headerShown' permite mostrar u ocultar el header de la pantalla
        headerShown: true,
        headerStyle: {
          // 'elevation' permite definir la elevacion del header(quita el border shadow por default)
          elevation: 0,
          // 'shadowColor' permite definir el color de la sombra del header
          shadowColor: 'transparent',
        },
      }}>
      {/* Esta pantalla aparecera 1ro al correr la app porque es la primera que se define en el Stack */}
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Product" component={ProductScreen} />
      <Stack.Screen name="Products" component={ProductsScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
    </Stack.Navigator>
  );
};
