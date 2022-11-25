import React, { useContext, useCallback } from 'react';
import { View, StyleSheet, } from 'react-native';
import { Text } from 'react-native-elements';
import Map from '../components/Map';
import Spacer from '../components/Spacer';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Context as LocationContext } from '../context/LocationContext';
import TrackForm from '../components/TrackForm';
import useLocation from '../hooks/useLocation';
import { useIsFocused } from '@react-navigation/native';

const CreateTrackScreen = () => {

    const { state, addLocation } = useContext(LocationContext);
    const callback = useCallback(
        location => {
            addLocation(location, state.recording);
        },
        [state.recording]
    );
    const [err] = useLocation(useIsFocused, callback);

    return (
        <View>
            <Text style={styles.Text} h2>Create a Track</Text>
            <Map />
            <Spacer />
            {err ? <Text>Please enable location services</Text> : null}
            <TrackForm />
        </View>

    )
}

const styles = StyleSheet.create({
    Text: {
        textAlign: 'center',
        marginTop: hp(2)
    }
})

export default CreateTrackScreen;