import React from 'react';
import { View, StyleSheet } from 'react-native';
import Routes from './src/navigation/Routes';
import { Provider as AuthProvider } from './src/context/AuthContext';

export default function App() {
  return (
    <AuthProvider>
      <View style={styles.container} >
        <Routes />
      </View>
    </AuthProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})
