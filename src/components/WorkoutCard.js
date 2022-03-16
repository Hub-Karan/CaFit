import { View, Text, StyleSheet, TouchableNativeFeedback } from "react-native";
import React from "react";

import CustomButton from "../components/CustomButton";
import color from "../constants/colors/color";
import fonts from "../constants/font-layout/font";
import { useNavigation } from "@react-navigation/native";

const WorkoutCard = (props) => {
    return (
        <View
            style={{
                ...Styles.workoutContainer,
                backgroundColor: props.bgColor,
            }}
        >
            <TouchableNativeFeedback
                onPress={() => props.navigation?.navigate("WorkoutSession")}
            >
                <View style={{ padding: 20, flex: 1 }}>
                    <Text
                        style={{
                            ...fonts.regularFontXs,
                            color: color.primaryColor,
                        }}
                    >
                        {props.tag}
                    </Text>
                    <Text
                        style={{
                            ...fonts.secondaryFont,
                            color: color.secondaryColor,
                        }}
                    >
                        {props.title}
                    </Text>
                    <Text
                        style={{
                            ...fonts.regularBoldFont,
                            color: color.secondaryColor,
                            paddingRight: 118,
                        }}
                    >
                        {props.text}
                    </Text>
                    <View style={Styles.workoutBtnContainer}>
                        <CustomButton
                            title="See More"
                            color="white"
                            fontSize={12}
                            onPress={() =>
                                props.navigation?.navigate(
                                    "ExcerciseDetailsScreen"
                                )
                            }
                        />
                    </View>
                </View>
            </TouchableNativeFeedback>
        </View>
    );
};

const Styles = StyleSheet.create({
    workoutContainer: {
        width: "90%",
        height: 220,
        backgroundColor: "grey",
        alignSelf: "center",
        borderRadius: 12,
        marginVertical: 10,
        position: "relative",
    },
    workoutBtnContainer: {
        backgroundColor: color.primaryColor,
        width: "27%",
        borderRadius: 21,
        position: "absolute",
        bottom: 20,
        right: 20,
        overflow: "hidden",
    },
});

export default WorkoutCard;
