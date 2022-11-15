import React, { useContext } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Navlinks from '../components/NavLinks';
import AuthForm from '../components/AuthFrom';
import { Context } from '../context/AuthContext';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


const SigninScreen = ({ navigation }) => {

    const { state, signin } = useContext(Context)

    const Back = () => {
        navigation.goBack('')
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.BackButton} onPress={Back}>
                <Icon name='arrowleft' color='grey' size={30} />
            </TouchableOpacity>

            <AuthForm
                headerText="Sign In to Your Account"
                errorMessage={state.errorMessage}
                onSubmit={signin}
                submittButtonText="Sign In"
            />
            <Navlinks
                routeName={() => navigation.navigate('Signup')}
                text="Dont have an account? SignUp instead!"
            />

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: hp(50),
    },

    BackButton: {
        marginLeft: wp(5)
    }
})

export default SigninScreen;