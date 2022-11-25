import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import colors from '../globalStyles/GlobalColor';

const TrackListScreen = () => {

    return (
        <View>
            <Text style={styles.Text}>This is TrackList Screen Where all Tracks are listed</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    Text: {
        color: colors.black,
        marginTop: hp(5),
        fontSize: hp(3),
        width: wp('90%'),
        alignSelf: 'center',
        textAlign: 'center'
    }
})

export default TrackListScreen;