import React, { useContext } from 'react';
import { Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import { Context as AuthContext } from '../context/AuthContext';

const AccountScreen = ({ navigation }) => {
  const { signout } = useContext(AuthContext)
  return (
    <View>
      <Text>AccountScreen</Text>
      <Button onPress={signout}
        title='Sign Out' />
    </View>
  )
}

export default AccountScreen;