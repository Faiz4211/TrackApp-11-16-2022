import { useState, useEffect } from "react";
import { PermissionsAndroid } from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import Toast from 'react-native-simple-toast';

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
