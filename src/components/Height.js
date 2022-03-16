import { View, Text, StyleSheet, TextInput } from "react-native";
import React from "react";

import fonts from "../constants/font-layout/font";
import color from "../constants/colors/color";

const Height = (props) => {
    return (
        <>
            <View>
                <Text style={{ ...fonts.secondaryFont, color: color.textGrey }}>
                    {props.text}
                </Text>
            </View>
            <View>
                {props.units ? (
                    <Text
                        style={{
                            ...fonts.regularFont4x,
                            color: color.primaryColor,
                        }}
                    >
                        {props.units}
                    </Text>
                ) : (
                    <Text
                        style={{
                            ...fonts.regularFont4x,
                            color: color.primaryColor,
                        }}
                    >
                        Aug 25, 1990
                    </Text>
                )}
            </View>
        </>
    );
};

const Styles = StyleSheet.create({
    customSwitchContainer: {
        padding: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        // justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 17,
        borderBottomWidth: 0.2,
        marginHorizontal: 10,
    },
    userInfoContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
});

export default Height;
