
import React from 'react';
import {
    StyleSheet,
    View,
    Image,
    Text,
    TouchableOpacity,
    FlatList
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { images, icons, COLORS, FONTS, SIZES } from '../constants';
import Flight from "../screens/Flight";
import Beach from "../screens/Beach";
import Train from "../screens/Train";
import Bus from "../screens/Bus";
import Taxi from "../screens/Taxi";
import Hotel from "../screens/Hotel";
import Food from "../screens/Food";
import Tour from "../screens/Tour";
import Event from "../screens/Event";
//USER DEFINED COMPONENT
const OptionItem = ({bgColor,  icon, label, onPress}) => {
    return (
        <TouchableOpacity
            style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
            onPress={onPress}
        >
            <View style={[styles.shadow, { width: 60, height: 60 }]}>
                <LinearGradient
                    style={[{ flex: 1, alignItems: 'center', justifyContent: 'center', borderRadius:30 ,backgroundColor: 'white',  borderColor: 'black', borderWidth:0.8 }]}
                    colors={bgColor}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 0, y: 1 }}
                >
                    <Image
                        source={icon}
                        resizeMode="cover"
                        style={{
                            width: 30,
                            height: 30,
                        }}
                    />
                </LinearGradient>
            </View>
            <Text style={{ marginTop: SIZES.base, color: COLORS.black, ...FONTS.body3 }}>{label}</Text>
        </TouchableOpacity>
    )
}


const Home = ({ navigation }) => {

    //Simple declaration of flatlist and use state.

    const [destinations, setDestinations] = React.useState([
        {
            id: 0,
            name: "Hunza Valley",
            img: images.hunzaValley,
        },
        {
            id: 1,
            name: "Nanga Parbat",
            img: images.fairyMeadows,
        },
        {
            id: 2,
            name: "Malam Jabba",
            img: images.malamJabba,
        },
        {
            id: 3,
            name: "Clifton Beach",
            img: images.beach,
        },
    ]);

    //For rendering flatlist

    function renderDestinations(item, index) {
        var destinationStyle = {};

        if (index == 0) {
            destinationStyle = { marginLeft: SIZES.padding, }
            return (
                <TouchableOpacity
                    style={{ justifyContent: 'center', marginHorizontal: SIZES.base, ...destinationStyle }}
                    onPress={() => { navigation.navigate("DestinationDetail") }}
                >
                    <Image
                        source={item.img}
                        resizeMode="cover"
                        style={{
                            width: SIZES.width * 0.28,
                            height: '82%',
                            borderRadius: 15
                        }}
                    />
    
                    <Text style={{ marginTop: SIZES.base / 2, ...FONTS.h4 }}>{item.name}</Text>
                </TouchableOpacity>
            )
        }

        if (index == 1) {
            destinationStyle = { marginLeft: SIZES.padding, }
            return (
                <TouchableOpacity
                    style={{ justifyContent: 'center', marginHorizontal: SIZES.base, ...destinationStyle }}
                    onPress={() => { navigation.navigate("DestinationDetails2") }}
                >
                    <Image
                        source={item.img}
                        resizeMode="cover"
                        style={{
                            width: SIZES.width * 0.28,
                            height: '82%',
                            borderRadius: 15
                        }}
                    />
    
                    <Text style={{ marginTop: SIZES.base / 2, ...FONTS.h4 }}>{item.name}</Text>
                </TouchableOpacity>
            )
        }

        if (index == 2) {
            destinationStyle = { marginLeft: SIZES.padding, }
            return (
                <TouchableOpacity
                    style={{ justifyContent: 'center', marginHorizontal: SIZES.base, ...destinationStyle }}
                    onPress={() => { navigation.navigate("DestinationDetails3") }}
                >
                    <Image
                        source={item.img}
                        resizeMode="cover"
                        style={{
                            width: SIZES.width * 0.28,
                            height: '82%',
                            borderRadius: 15
                        }}
                    />
    
                    <Text style={{ marginTop: SIZES.base / 2, ...FONTS.h4 }}>{item.name}</Text>
                </TouchableOpacity>
            )
        }

        if (index == 3) {
            destinationStyle = { marginLeft: SIZES.padding, }
            return (
                <TouchableOpacity
                    style={{ justifyContent: 'center', marginHorizontal: SIZES.base, ...destinationStyle }}
                    onPress={() => { navigation.navigate("Beach") }}
                >
                    <Image
                        source={item.img}
                        resizeMode="cover"
                        style={{
                            width: SIZES.width * 0.28,
                            height: '82%',
                            borderRadius: 15
                        }}
                    />
    
                    <Text style={{ marginTop: SIZES.base / 2, ...FONTS.h4 }}>{item.name}</Text>
                </TouchableOpacity>
            )
        }
    }

    //Actual work.

    return (
        <View style={styles.container}>
            {/*Top picture*/}
            <View style={{ flex: 1, marginTop: SIZES.base, paddingHorizontal: SIZES.padding, }}>
                <Image
                    source={images.splashBanner}
                    resizeMode="cover"
                    style={{
                        width: "100%",
                        height: "100%",
                        borderRadius: 15,
                    }}
                />
            </View>

            {/* Options */}
            <View style={{ flex: 1, justifyContent: 'center' }}>
                <View style={{ flexDirection: 'row', marginTop: SIZES.padding, paddingHorizontal: SIZES.base, }}>
                    <OptionItem 
                        icon={icons.aeroplane}
                        bgColor={['white', 'white']}
                        label="Flight"
                        onPress={() => {navigation.navigate(Flight)} }
                    />
                    <OptionItem
                        icon={icons.train}
                        bgColor={['white', 'white']}
                        label="Train"
                        onPress={() => { navigation.navigate(Train) }}
                    />
                    <OptionItem
                        icon={icons.bus}
                        bgColor={['white', 'white']}
                        label="Bus"
                        onPress={() => { navigation.navigate(Bus) }}
                    />
                    <OptionItem
                        icon={icons.taxi}
                        bgColor={['white', 'white']}
                        label="Taxi"
                        onPress={() => { navigation.navigate(Taxi)}}
                    />
                </View>

                <View style={{ flexDirection: 'row', marginTop: SIZES.radius, paddingHorizontal: SIZES.base }}>
                    <OptionItem
                        icon={icons.bed}
                        bgColor={['white', 'white']}
                        label="Hotel"
                        onPress={() => { navigation.navigate(Hotel) }}
                    />
                    <OptionItem
                        icon={icons.eat}
                        bgColor={['white', 'white']}
                        label="Food"
                        onPress={() => { navigation.navigate(Food) }}
                    />
                    <OptionItem
                        icon={icons.compass}
                        bgColor={['white', 'white']}
                        label="Tour"
                        onPress={() => { navigation.navigate(Tour) }}
                    />
                    <OptionItem
                        icon={icons.event}
                        bgColor={['white', 'white']}
                        label="Event"
                        onPress={() => { navigation.navigate(Event) }}
                    />
                </View>
            </View>

            
            {/*Destination.*/}
            {/*THIS IS WHERE FLATLIST IS USED.*/}
            <View style={{ flex: 1 }}>
                <Text style={{ marginTop: SIZES.base, marginHorizontal: SIZES.padding, ...FONTS.h2 }}>Destination</Text>
                <FlatList
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={destinations}
                    keyExtractor={item => item.id.toString()}
                    renderItem={({ item, index }) => renderDestinations(item, index)}
                />
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

export default Home;
