import React, { useState } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { Text, Button, Input } from 'react-native-elements';
import colors from '../globalStyles/GlobalColor';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Spacer from './Spacer';

const AuthFrom = ({ headerText, errorMessage, onSubmit, submittButtonText, navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    return (
        <>
            <Spacer>
                <Text style={styles.Text} h3>{headerText}</Text>
            </Spacer>
            <Input
                label="Email"
                value={email}
                onChangeText={setEmail}
                autoCapitalize="none"
                autoCorrect={false}
            />
            <Spacer />
            <Input
                secureTextEntry
                label="Password"
                value={password}
                onChangeText={setPassword}
                autoCapitalize="none"
                autoCorrect={false}
            />
            {errorMessage ? (
                <Text style={styles.errorMessage}>{errorMessage}</Text>
            ) : null}
            <Spacer>
                <Button title={submittButtonText} onPress={() => onSubmit({ email, password }, () => navigation.navigate('TrackCreate'))} />
            </Spacer>
        </>

    )
}


const styles = StyleSheet.create({
    errorMessage: {
        fontSize: hp(2),
        color: colors.red,
        marginLeft: wp(5),
        marginTop: hp(2),
        fontStyle: 'italic'
    },
    Text: {
        textAlign: 'center',
        color: colors.lightblue,
        textAlign: 'center',
        marginTop: hp(3),

    },

})

export default AuthFrom;