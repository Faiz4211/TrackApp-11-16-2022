import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const ResolveAuthScreen = () => {
  const location = useContext(useLocation);
  let emitter = React.createContext();
  return (
    <View>
      <Text>ResolveAuth</Text>
    </View>
  )
}

const styles = StyleSheet.create({

})

export default ResolveAuthScreen;