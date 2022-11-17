import React, { useContext, useEffect } from 'react';
import { View, StyleSheet, } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import AuthForm from '../components/AuthFrom';
import NavLinks from '../components/NavLinks';
import { Context as AuthContext } from '../context/AuthContext';

const SignupScreen = ({ navigation }) => {
    const { state, signup } = useContext(AuthContext);

    // useEffect(() => {
    //     tryLocalSignin();
    // }, []);

    return (
        <View style={styles.container}>
            <AuthForm
                headerText="SignUp for Tracker"
                errorMessage={state.errorMessage}
                submittButtonText="Sign Up"
                onSubmit={signup}
            />

            <NavLinks
                routeName={() => navigation.navigate('Signin')}
                text="Already have an account? SignIn instead!"
            />
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: hp(50),

    },
})

export default SignupScreen;