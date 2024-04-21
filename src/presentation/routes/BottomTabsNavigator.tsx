/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import {Tab1Screen} from '../screens/tabs/Tab1Screen';
import { TopTabsNavigator } from './TopTabsNavigator';
import { StackNavigator } from './StackNavigator';

import { globalColors } from '../theme/theme';
import { IonIcon } from '../components/shared/IonIcon';


const Tab = createBottomTabNavigator();

export const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      //* Estilo del contenedor de las pantallas del TabNavigator
      sceneContainerStyle={{
        backgroundColor: globalColors.background,
      }}
      screenOptions={{
        //* Personalización de tab que permite cambiar el color del icono y el texto del tab
        tabBarActiveTintColor: globalColors.primary,
        // headerShown: false,
        //* Personalización de las opciones del TabNavigator
        tabBarLabelStyle: {
          marginBottom: 5,
        },
        //* Personalizacion del header de las pantallas del TabNavigator
        headerStyle: {
          elevation: 0,
          borderColor: 'transparent',
          shadowColor: 'transparent',
        },
        //* Personalizacion de los tabs del TabNavigator
        tabBarStyle: {
          borderTopWidth: 0,
          elevation: 0,
        },
      }}>
      <Tab.Screen
        name="Tab1"
        //* Personalización de las opciones de los tabs como el titulo y el icono del tab
        options={{
          title: 'Tab1',
          tabBarIcon: ({color}) => (
            <IonIcon name="camera-outline" color={color} />
          ),
        }}
        component={Tab1Screen}
      />
      <Tab.Screen
        name="Tab2"
        options={{
          title: 'Tab2',
          tabBarIcon: ({color}) => (
            <IonIcon name="call-outline" color={color} />
          ),
        }}
        component={TopTabsNavigator}
      />
      <Tab.Screen
        name="Tab3"
        options={{
          title: 'Tab3',
          tabBarIcon: ({color}) => (
            <IonIcon name="chatbox-outline" color={color} />
          ),
        }}
        component={StackNavigator}
      />
    </Tab.Navigator>
  );
};
