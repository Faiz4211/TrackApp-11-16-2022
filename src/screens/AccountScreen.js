import React, { useContext, useEffect, useState } from 'react';
import { Context as AuthContext } from '../context/AuthContext';
import CustomButton from '../components/CustomButton';

const AccountScreen = ({ navigation }) => {
  const { signout } = useContext(AuthContext)

  return (
    <CustomButton
      headingText={'Account Screen'}
      bgColor={colors.lightgrey}
      buttonText={'SignOut'}
      onPress={() => navigation.navigate('AuthStack')}
    />
  )
}

export default AccountScreen;