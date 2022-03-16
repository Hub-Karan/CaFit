import { View, Text, StyleSheet, TouchableNativeFeedback } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

import SvgRunning from "../../../components/svg-components/SvgRunning";
import Fork from "../../../components/svg-components/Fork";
import SvgHome from "../../../components/svg-components/SvgHome";
import SvgMeter from "../../../components/svg-components/SvgMeter";
import SvgMore from "../../../components/svg-components/SvgMore";
import color from "../../../constants/colors/color";

import { NavigationRef } from "../../../constants/Ref";

const CustomTabItem = (props) => {
    return (
        <TouchableNativeFeedback onPress={() => props.onPress()}>
            <View style={Styles.customTabItemContainer}>
                {props.svgComponent}
            </View>
        </TouchableNativeFeedback>
    );
};

const CustomTab = (props) => {
    // console.log(props, "custom navigation tab");
    const { navigation } = props;

    const currentRoute = NavigationRef.current.getCurrentRoute().name;

    console.log(currentRoute, "current Route");

    // console.log(navigation.getState(), " state");

    return (
        <View style={Styles.customTabContainer}>
            <CustomTabItem
                svgComponent={
                    <SvgRunning
                        color={
                            currentRoute === "Running" ||
                            currentRoute === "RunningScreen"
                                ? color.primaryColor
                                : undefined
                        }
                    />
                }
                onPress={() => navigation.navigate("Running")}
            />
            <CustomTabItem
                svgComponent={
                    <Fork
                        color={
                            currentRoute === "MealPlan" ||
                            currentRoute === "Water" ||
                            currentRoute === "Food"
                                ? color.primaryColor
                                : undefined
                        }
                    />
                }
                onPress={() => navigation.navigate("MealPlan")}
            />
            <CustomTabItem
                svgComponent={<SvgHome />}
                onPress={() => navigation.navigate("Menu")}
            />
            <CustomTabItem
                svgComponent={
                    <SvgMeter
                        color={
                            currentRoute === "Weight"
                                ? color.primaryColor
                                : undefined
                        }
                    />
                }
                onPress={() => navigation.navigate("Weight")}
            />
            <CustomTabItem
                svgComponent={
                    <SvgMore
                        color={
                            currentRoute === "Setting" ||
                            currentRoute === "SettingScreen" ||
                            currentRoute === "SettingLang" ||
                            currentRoute === "SettingSocial"
                                ? color.primaryColor
                                : undefined
                        }
                    />
                }
                onPress={() => navigation.navigate("Setting")}
            />
        </View>
    );
};

const Styles = StyleSheet.create({
    customTabContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        height: 50,
        borderTopWidth: 0.2,
        backgroundColor: color.secondaryColor,
    },
    customTabItemContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
    },
});

export default CustomTab;
