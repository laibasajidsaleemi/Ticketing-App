
import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { images, icons, COLORS, FONTS, SIZES } from '../constants';

//User defined component
const IconLabel = ({ icon, label }) => {
    return (
        <View style={{ alignItems: 'center' }}>
            <Image
                source={icon}
                resizeMode="cover"
                style={{
                    width: 50,
                    height: 50,
                }}
            />
            <Text style={{ marginTop: SIZES.padding, color: COLORS.gray, ...FONTS.h3 }}>{label}</Text>
        </View>
    )
}

const Beach = ({ navigation }) => {

    // Render

    return (
        <View style={styles.container}>
            {/*Background big picture*/}
            <View style={{ flex: 2 }}>
                <Image
                    source={images.beachBanner}
                    resizeMode="cover"
                    style={{
                        width: '100%',
                        height: '80%',
                    }}
                />

                {/*After banner parent view*/}
                <View
                    style={[{
                        position: 'absolute',
                        bottom: "5%",
                        left: "5%",
                        right: "5%",
                        borderRadius: 15,
                        padding: SIZES.padding,
                        backgroundColor: COLORS.white
                    }, styles.shadow]}
                >   
                    {/*child view*/}
                    <View style={{ flexDirection: 'row' }}>
                        <View style={styles.shadow}>
                            <Image
                                source={images.beach}
                                resizeMode="cover"
                                style={{
                                    width: 70,
                                    height: 70,
                                    borderRadius: 15,
                                }}
                            />
                        </View>

                        <View style={{ marginHorizontal: SIZES.radius, justifyContent: 'space-around' }}>
                            <Text style={{ ...FONTS.h3 }}>Clifton Beach</Text>
                            <Text style={{ color: COLORS.gray, ...FONTS.body3 }}>Pakistan</Text>
                        </View>
                    </View>

                    <View style={{ marginTop: SIZES.radius }}>
                        <Text style={{ color: COLORS.gray, ...FONTS.body3 }}>
                            Clifton Beach, also known as Sea View in Karachi , Sindh , Pakistan, is located on the Arabian Sea. It stretches from Karachi to Ormara (Balochistan).
                        </Text>
                    </View>
                </View>

                {/*Booking button*/}
                <View
                    style={{
                        position: 'absolute',
                        top: 50,
                        left: 20,
                        right: 20,
                        //height: 50,
                        flexDirection: 'row',
                    }}
                >
                    {/*For the back arrow at top left corner*/}
                    <View style={{ flex: 1 }}>
                        <TouchableOpacity
                            onPress={() => { navigation.navigate('Home') }}
                        >
                            <Image
                                source={icons.back}
                                resizeMode="cover"
                                style={{
                                    width: 30,
                                    height: 30,
                                }}
                            />
                        </TouchableOpacity>
                    </View>

                    {/*For menu button at top right corner*/}
                    <View style={{ flex: 1, alignItems: 'flex-end' }}>
                        <TouchableOpacity
                            onPress={() => { console.log("Menu on pressed") }}
                        >
                            {/*For rendering the menu icon image (3 vertical dots)*/}
                            <Image
                                source={icons.menu}
                                resizeMode="cover"
                                style={{
                                    width: 30,
                                    height: 30,
                                }}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

            {/* Body */}
            <View style={{ flex: 1.5 }}>
                {/* Icons */}
                <View style={{ flexDirection: 'row', marginTop: SIZES.base, paddingHorizontal: SIZES.padding * 2, justifyContent: 'space-between' }}>
                    <IconLabel
                        icon={icons.villa}
                        label="Villa"
                    />

                    <IconLabel
                        icon={icons.parking}
                        label="Parking"
                    />

                    <IconLabel
                        icon={icons.wind}
                        label="4 °C"
                    />
                </View>

                {/* About */}
                <View style={{ marginTop: SIZES.padding, paddingHorizontal: SIZES.padding }}>
                    <Text style={{ ...FONTS.h2 }}>About</Text>
                    <Text style={{ marginTop: SIZES.radius, color: COLORS.gray, ...FONTS.body3 }}>
                        Clifton Beach, also known as Sea View in Karachi , Sindh , Pakistan, is located on the Arabian Sea. It stretches from Karachi to Ormara (Balochistan). The beach is very popular in Pakistan.
                    </Text>
                </View>
            </View>

            {/* Footer */}
            <View style={{ flex: 0.5, paddingHorizontal: SIZES.padding }}>
                <LinearGradient
                    style={[{ height: 70, width: '100%', borderRadius: 15 }]}
                    colors={['#edf0fc', '#d6dfff']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                >
                    <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                        <View style={{ flex: 1, marginHorizontal: SIZES.padding, justifyContent: 'center' }}>
                            <Text style={{ ...FONTS.h1 }}>Rs.30,000/-</Text>
                        </View>

                        <TouchableOpacity
                            style={{ width: 130, height: '80%', marginHorizontal: SIZES.radius }}
                            onPress={() => { console.log("Booked") }}
                        >
                            <LinearGradient
                                style={[{ flex: 1, alignItems: 'center', justifyContent: 'center', borderRadius: 10 }]}
                                colors={['#46aeff', '#5884ff']}
                                start={{ x: 0, y: 0 }}
                                end={{ x: 1, y: 0 }}
                            >
                                <Text style={{ color: COLORS.white, ...FONTS.h2 }}>BOOK</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>
                </LinearGradient>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    }
});

export default Beach;
