import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import MapView, { Polyline } from 'react-native-maps';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const Map = () => {
    let points = []
    for (let i = 0; i < 20; i++) {
        if (i % 2 === 0) {
            points.push({
                latitude: 37.33233 + i * 0.001,
                longitude: -122.03121 + i * 0.001
            })
        } else {
            points.push({
                latitude: 37.33233 - i * 0.001,
                longitude: -122.03121 - i * 0.001
            })
        }

    }
    return (
        <View>
            <MapView
                style={styles.map}
                initialregion={{
                    // latitude: 24.8607,
                    latitude: 37.33233,
                    // longitude: 67.0011,
                    longitude: -122.03121,
                    latitudeDelta: 0.015,
                    longitudeDelta: 0.0121,
                }}
            >
                <Polyline
                    coordinates={points}
                />
            </MapView>
        </View>
    )
}

const styles = StyleSheet.create({
    map: {
        height: hp('30%'),
        marginTop: hp(3)
    }
})

export default Map;