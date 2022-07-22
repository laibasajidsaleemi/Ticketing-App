import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity, } from "react-native";
import { images, COLORS, FONTS, SIZES } from '../constants';
import { LinearGradient } from 'expo-linear-gradient';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from "react-native-responsive-screen";
import { MaterialIcons } from "@expo/vector-icons";

const Tour = () => {
    let headerText = "Tour";
    return (
    <View style={style.mainViewStyle}>
      <View>
        <Image
          style={style.imageStyle}
          source={images.tour}
        />
        <Text style={style.textStyle}>{headerText}</Text>
      </View>

      <View style={style.mainViewStyle2}>
        <SelectFlightCard
            iconName="tour"
            title="Place"
            location="Kumrat"
            disable={false}
        />
      </View>
      <View style={{ flex: 2, alignItems: 'center', justifyContent: 'center', backgroundColor:"white" }}>
        <TouchableOpacity
          style={[style.shadow, {marginTop: SIZES.padding * 2, width: '70%', height: 50, alignItems: 'center', justifyContent: 'center',  }]}
          onPress={() => {console.log("Booked")}}
        >
          <LinearGradient
            style={{ height: '100%', width: '100%', alignItems: 'center', justifyContent: 'center', borderRadius: 15, backgroundColor:"white"}}
            colors={['#46aeff', '#5884ff']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
          >
            <Text style={{ color: COLORS.white, ...FONTS.h3 }}>Book</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const SelectFlightCard = (props) => {
    return (
      <View style={cardStyle(props.disable)}>
        <View style={style.iconStyleView}>
          <MaterialIcons name={props.iconName} size={24} color="black" />
          <Text style={style.textStyleMin}>{props.title}</Text>
        </View>
        <Text style={style.textStyleLocation}>{props.location}</Text>
      </View>
    );
  };

const cardStyle = (cardFlag) => {
    let bgColor = cardFlag ? "#ffff" : "#ffffff";
    let shadowLevel = cardFlag ? 2.27 : 6.27;
    let shadowOpacityLevel = cardFlag ? 0.2 : 0.44;
    let shadowLvelAndroid = cardFlag ? 6 : 10;
    return {
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 5,
      },
      shadowOpacity: shadowOpacityLevel,
      shadowRadius: shadowLevel,
  
      elevation: shadowLvelAndroid,
      height: hp("12%"),
      width: wp("80%"),
      backgroundColor: bgColor,
      borderRadius: 17,
      marginBottom: 18,
      alignSelf: "center",
      padding: 11,
    };
  };
  

const style = StyleSheet.create({
  mainViewStyle: {
    flex:3,
    alignContent: "flex-start",
    backgroundColor: "white",
  },
  mainViewStyle2:{
      marginTop: 20,
      backgroundColor:"white"
  },
  imageStyle: {
    resizeMode: "contain",
    width: wp("100%"),
    height: hp("24%"),
    marginTop: 100,
  },
  textStyle: {
    fontWeight: "bold",
    fontSize: 33,
    color: "#1B1C1C",
    marginLeft: 10,
    textAlign: "center",
  },
  cardStyle: {},
  iconStyleView: {
    flexDirection: "row",
  },
  textStyleMin: {
    fontWeight: "500",
    fontSize: 15,
    color: "#9F9F9F",
    marginLeft: 8,
  },
  textStyleLocation: {
    fontWeight: "500",
    fontSize: 18,
    color: "#000000",
    marginTop: 10,
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
  },
});

export default Tour;
