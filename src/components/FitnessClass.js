import { View, Text, StyleSheet } from "react-native";
import React from "react";

import Tick from "./svg-components/Tick";
import fonts from "../constants/font-layout/font";
import color from "../constants/colors/color";

const FitnessClass = (props) => {
    // console.log(props.isSelect, props.text, "class");
    return (
        <>
            <View style={Styles.levelTextContainer}>
                <Text style={{ ...fonts.secondaryFont, ...Styles.levelText }}>
                    {props.text}
                </Text>
            </View>
            {props.isSelect ? (
                <View style={Styles.levelDescripContainer}>
                    <Text style={Styles.levelSelectDescrip}>
                        {props.description}
                    </Text>
                    <Tick width={20} height={20} />
                </View>
            ) : (
                <View style={Styles.levelDescripContainer}>
                    <Text style={Styles.levelDescrip}>{props.description}</Text>
                </View>
            )}
        </>
    );
};

const Styles = StyleSheet.create({
    levelText: {
        color: color.textGrey,
    },
    levelTextContainer: {
        // paddingLeft: 14,
    },
    levelDescripContainer: {
        marginHorizontal: 10,
        marginTop: 15.5,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    levelDescrip: {
        fontSize: 18,
        fontFamily: "Quicksand-Regular",
        color: color.textGrey,
        // marginBottom: 20
    },
    levelSelectDescrip: {
        fontSize: 18,
        fontFamily: "Quicksand-Regular",
        color: color.primaryColor,
        paddingRight: 30,

        // marginBottom: 20
    },
});

export default FitnessClass;
