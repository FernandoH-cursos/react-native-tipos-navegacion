import React from 'react';
import {Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {PrimaryButton} from '../../components/shared/PrimaryButton';
import {DrawerActions, useNavigation} from '@react-navigation/native';

export const ProfileScreen = () => {
  //* Este hook es muy util para obtener el espacio seguro en la parte superior de la pantalla para evitar que el contenido se solape con la barra de estado en los celulares con notch(iphone X, 11, 12, etc.)
  const {top} = useSafeAreaInsets();
  const navigation = useNavigation();

  return (
    <View
      style={{
        flex: 1,
        paddingHorizontal: 20,
        marginTop: top + 20,
      }}>
      <Text style={{marginBottom: 10}}>ProfileScreen</Text>

      <PrimaryButton
        onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
        label="Abrir menú"
      />
    </View>
  );
};
