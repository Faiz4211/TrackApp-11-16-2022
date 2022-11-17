import React from 'react';
import { View, StyleSheet } from 'react-native';
import Routes from './src/navigation/Routes';
import { Provider as AuthProvider } from './src/context/AuthContext';
import { setNavigator } from './src/navigationRef';
import { Provider as LocationProvider } from './src/context/LocationContext';

export default function App() {
  return (
    <LocationProvider>
      <AuthProvider>
        <View style={styles.container} >
          <Routes innerRef={(navigator) => setNavigator(navigator)} />
        </View>
      </AuthProvider>
    </LocationProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})

