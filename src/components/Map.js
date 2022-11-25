import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import MapView, { Circle, Marker } from 'react-native-maps';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const Map = () => {
    initialLocation = {
        latitude: 24.860966,
        longitude: 66.990501,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
    }
    return (
        <MapView
            style={styles.map}
            initialRegion={{
                ...initialLocation,
            }}
        >
            <Marker
                coordinate={initialLocation}
                pinColo={'red'}
            />
            {/* <Circle
                center={initialLocation}
                radius={40}
                strokeColor="rgba(158 , 158, 255, 1.0)"
                fillColor='rgba(158,158,255, 0.3)'
            /> */}
        </MapView>
    );
};

const styles = StyleSheet.create({
    map: {
        height: hp('40%'),
        marginTop: hp(3),
    }
})

export default Map;