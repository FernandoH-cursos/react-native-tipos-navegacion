/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {View, useWindowDimensions} from 'react-native';

import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItemList,
  createDrawerNavigator,
} from '@react-navigation/drawer';

import {BottomTabNavigator} from './BottomTabsNavigator';
import {ProfileScreen} from '../screens/profile/ProfileScreen';

import {globalColors} from '../theme/theme';
import {IonIcon} from '../components/shared/IonIcon';

const Drawer = createDrawerNavigator();

export const SideMenuNavigator = () => {
  const dimentions = useWindowDimensions();

  return (
    <Drawer.Navigator
      //* Este prop nos permite personalizar el contenido del Drawer(Agregar un header, un footer, etc.)
      drawerContent={props => <CustomDrawerContent {...props} />}
      screenOptions={{
        //* Quita el header de la pantalla del Drawer
        headerShown: false,
        //* Esta opcion de 'slide' permite que el Drawer se deslice desde la izquierda de la pantalla y empuje el contenido hacia la derecha. 'permanent' siempre mostrará el drawer.
        drawerType: dimentions.width >= 758 ? 'permanent' : 'slide',
        //* Color de fondo del Drawer
        drawerActiveBackgroundColor: globalColors.primary,
        //* Color de fondo de las opciones del Drawer
        drawerActiveTintColor: 'white',
        //* Estilo de las opciones del Drawer
        drawerItemStyle: {
          borderRadius: 100,
          paddingHorizontal: 20,
        },
      }}>
      {/* Este pantalla del Drawer nos redirecciona a al Stack navigator que tiene sus propias pantallas */}
      {/* <Drawer.Screen name="StackNavigator" component={StackNavigator} /> */}
      <Drawer.Screen
        options={{
          drawerIcon: ({color}) => (
            <IonIcon name="bonfire-outline" color={color} />
          ),
        }}
        name="Tabs"
        component={BottomTabNavigator}
      />
      <Drawer.Screen
        options={{
          drawerIcon: ({color}) => (
            <IonIcon name="person-circle-outline" color={color} />
          ),
        }}
        name="Profile"
        component={ProfileScreen}
      />
    </Drawer.Navigator>
  );
};

const CustomDrawerContent = (props: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView>
      <View
        style={{
          height: 200,
          backgroundColor: globalColors.primary,
          margin: 30,
          borderRadius: 50,
        }}
      />
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};
