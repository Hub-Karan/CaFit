import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";

import fonts from "../constants/font-layout/font";
import color from "../constants/colors/color";

const MenuHeader = () => {
    return (
        <View style={Styles.child1}>
            <View style={Styles.userProfileContainer}>
                <View style={Styles.userProfileImgContainer}>
                    <Image
                        source={require("../assets/user-profile-circle.png")}
                    />
                </View>
                <View>
                    <Text
                        style={{
                            ...fonts.secondaryFont,
                            color: color.secondaryColor,
                        }}
                    >
                        Capi Creative Design
                    </Text>
                    <Text
                        style={{
                            ...fonts.mediumFont,
                            color: color.secondaryColor,
                            opacity: 0.7,
                        }}
                    >
                        Profile
                    </Text>
                </View>
            </View>
        </View>
    );
};

const Styles = StyleSheet.create({
    child1: {
        flex: 1,
        backgroundColor: color.menuHeaderColor,
        justifyContent: "center",
        alignItems: "flex-start",
        paddingLeft: 25,
        paddingBottom: 25,
        paddingTop: 40,
    },
    userProfileContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    userProfileImgContainer: {
        marginRight: 15,
    },
});

export default MenuHeader;
