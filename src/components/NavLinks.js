import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import Spacer from './Spacer';
import colors from '../globalStyles/GlobalColor';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const NavLinks = ({ text, routeName }) => {
    return (
        <TouchableOpacity onPress={routeName}>
            <Spacer>
                <Text style={styles.linkText}>{text}</Text>
            </Spacer>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    linkText: {
        color: colors.lightblue,
        fontSize: hp(3),
    }
})

export default NavLinks;