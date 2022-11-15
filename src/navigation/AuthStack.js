import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import * as screens from '../screens/index';

export default function (Stack) {
    return (
        <>
            <Stack.Screen name='Signup' component={screens.SignupScreen} />
            <Stack.Screen name='Signin' component={screens.SigninScreen} />
        </>
    )
}