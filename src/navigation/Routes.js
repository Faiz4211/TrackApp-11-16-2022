import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthStack from './AuthStack';
import MainStack from './MainStack';
import { Context as AuthContext } from '../context/AuthContext';

const Stack = createNativeStackNavigator();

function Routes() {
    // const { signup, signin } = useContext(AuthContext);

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                {/* {signup || signin == true ? <React.Fragment>{MainStack(Stack)}</React.Fragment> : <React.Fragment>{AuthStack(Stack)}</React.Fragment>} */}
                {false ? <React.Fragment>{MainStack(Stack)}</React.Fragment> : <React.Fragment>{AuthStack(Stack)}</React.Fragment>}

                {/* {signup.useContext(AuthContext) ? <React.Fragment>{MainStack(Stack)}</React.Fragment> : <React.Fragment>{AuthStack(Stack)}</React.Fragment>} */}
            </Stack.Navigator>
        </NavigationContainer >
    );
}

export default Routes;