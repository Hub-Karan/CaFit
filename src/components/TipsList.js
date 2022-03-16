import { View, Text, Pressable, StyleSheet } from "react-native";
import React from "react";

import color from "../constants/colors/color";
import fonts from "../constants/font-layout/font";
import RightArrows from "./svg-components/RightArrow";

const TipsList = (props) => {
    return (
        <Pressable
            children={({ pressed }) => {
                return (
                    <View style={Styles.listContainer}>
                        <View>
                            <Text
                                style={{
                                    ...fonts.regularBoldFont4x,
                                    color: pressed
                                        ? color.primaryColor
                                        : color.textGrey,
                                }}
                            >
                                {props.title}
                            </Text>
                        </View>
                        <View>
                            <RightArrows
                                width={20}
                                height={20}
                                fill={
                                    pressed
                                        ? color.primaryColor
                                        : color.textGrey
                                }
                            />
                        </View>
                    </View>
                );
            }}
            onPress={() => props?.onPress()}
        />
    );
};

const Styles = StyleSheet.create({
    listContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",

        padding: 10,
        marginVertical: 10,
        borderBottomWidth: 1,
        borderColor: "#E6E6E6",
    },
});

export default TipsList;
