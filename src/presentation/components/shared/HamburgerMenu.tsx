/* eslint-disable react/no-unstable-nested-components */
import React, { useEffect } from 'react'
import {Pressable} from 'react-native';
import {DrawerActions, useNavigation} from '@react-navigation/native';
import { IonIcon } from './IonIcon';
import { globalColors } from '../../theme/theme';

export const HamburgerMenu = () => {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      //* Permite agregar un boton en el header de la pantalla
      headerLeft: () => (
        <Pressable
          style={{marginLeft: 5}}
          onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>
          <IonIcon name="menu-outline" color={globalColors.primary} />
        </Pressable>
      ),
    });
  });

  return <></>;
}
