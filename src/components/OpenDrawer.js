import { View, Text, TouchableNativeFeedback } from "react-native";
import React from "react";
import SvgHamburger from "./svg-components/SvgHamburger";
import { useNavigation } from "@react-navigation/native";
import HeaderLeft from "./HeaderLeft";
import color from "../constants/colors/color";

const OpenDrawer = (props) => {
    const navigation = useNavigation();

    return (
        <TouchableNativeFeedback onPress={() => navigation.openDrawer()}>
            <View style={{ marginLeft: 10, height: "100%" }}>
                <SvgHamburger />
            </View>
        </TouchableNativeFeedback>
    );
};

export const DrawerNBack = (props) => {
    const navigation = useNavigation();

    return (
        <View
            style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <OpenDrawer />
            <HeaderLeft fill={color.secondaryColor} />
        </View>
    );
};

export default OpenDrawer;
