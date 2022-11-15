import React, { useState, useEffect } from 'react';
import { View, PermissionsAndroid, Alert, requestLocationPermissionAsync, watchPositionAsync, Accuracy, StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import Map from '../components/Map';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const CreateTrackScreen = () => {
    const [err, setErr] = useState(null);
    const requestLocationPermission = async () => {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                {
                    title: "Cool Track App Camera Permission",
                    message:
                        "Cool Track App needs access to your Location " +
                        "so you can create Tracks.",
                    buttonNeutral: "Ask Me Later",
                    buttonNegative: "Cancel",
                    buttonPositive: "OK"
                }
            );

            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                Alert.alert("Location Access")
            } else {
                Alert.alert("Location Denied")
            }
            // await watchPositionAsync(
            //     {
            //         accuracy: Accuracy.BestForNavigation,
            //         timeInterval: 1000,
            //         distanceInterval: 10,
            //     },
            //     (location) => {
            //         console.log(location);
            //     }
            // );
            // );
        } catch (err) {
            setErr(err);
        }
    };

    useEffect(() => {
        requestLocationPermission();
    }, [])

    return (
        <View>
            <Text style={styles.Text} h2>Create a Track</Text>
            <Map />
            {/* {err ? <Text>Please Enable location Services</Text> : null} */}
            {/* <Button title="request permissions" onPress={requestLocationPermission} /> */}
        </View>

    )
}


const styles = StyleSheet.create({
    Text: {
        textAlign: 'center',
        marginTop: hp(5)
    }
})

export default CreateTrackScreen;