import React, { useContext } from 'react';
import { ActivityIndicator, StyleSheet } from 'react-native';
import MapView, { Polyline } from 'react-native-maps';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Context as LocationContext } from '../context/LocationContext';

const Map = () => {
    const { state } = useContext(LocationContext);
    console.log('This is a location state', state)

    return (
        <MapView
            style={styles.map}
            initialRegion={{
                latitude: 37.33233,
                longitude: -122.03121,
                // ...currentLocation.coords,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01
            }}
        >
        </MapView>
    );
};

const styles = StyleSheet.create({
    map: {
        height: hp('30%'),
        marginTop: hp(3)
    }
})

export default Map;