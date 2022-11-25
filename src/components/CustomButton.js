import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import colors from '../globalStyles/GlobalColor';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

const CustomButton = ({ buttonText, bgColor, onPress, headingText }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.headingText}>{headingText}</Text>
            <TouchableOpacity
                onPress={onPress}
                bgColor={bgColor}
                style={styles.Button} >
                <Text style={styles.ButtonText}>{buttonText}</Text>
            </TouchableOpacity>
        </View>

    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    headingText: {
        fontSize: hp(5),
        color: colors.black,
        textAlign: 'center',
        marginTop: hp(5)
    },

    Button: {
        width: wp('70%'),
        borderRadius: 10,
        borderWidth: 1,
        marginTop: hp(5),
        backgroundColor: colors.lightgrey,
        alignSelf: 'center'
    },
    ButtonText: {
        textAlign: 'center',
        fontSize: hp(4),
        color: colors.black,
    }

})

export default CustomButton;