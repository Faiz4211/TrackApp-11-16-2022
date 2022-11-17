import React, { useEffect, useContext } from 'react';
import { View, PermissionsAndroid, StyleSheet, } from 'react-native';
import { Text } from 'react-native-elements';
import Map from '../components/Map';
import Spacer from '../components/Spacer';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Toast from 'react-native-simple-toast';
// import GetLocation from 'react-native-get-location';
import Geolocation from '@react-native-community/geolocation';
import { Context as LocationContext } from '../context/LocationContext';


const CreateTrackScreen = () => {
    const { addLocation } = useContext(LocationContext);
    const requestLocationPermission = async () => {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                {
                    title: "Cool Track App Needs Location Permission",
                    message:
                        "Cool Track App needs access to your Location " +
                        "so you can create Tracks.",
                    buttonNeutral: "Ask Me Later",
                    buttonNegative: "Cancel",
                    buttonPositive: "OK"
                }
            )

            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                Toast.showWithGravity('Location Access!.', Toast.LONG, Toast.CENTER);
            } else {
                Toast.showWithGravity('Location Denied!.', Toast.LONG, Toast.CENTER);
            }
        } catch (err) {
            console.log("This is an error", setErr)

        }
        Geolocation.getCurrentPosition(location => console.log(location));

    }
    useEffect(() => {
        requestLocationPermission()
    })
    return (
        <View>
            <Text style={styles.Text} h2>Create a Track</Text>
            <Map />
            <Spacer />
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