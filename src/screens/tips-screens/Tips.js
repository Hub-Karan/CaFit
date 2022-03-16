import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";

import color from "../../constants/colors/color";
import fonts from "../../constants/font-layout/font";

const Tips = (props) => {
    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <View style={Styles.tipsMainContainer}>
                <View style={Styles.child1}>
                    <View style={Styles.tipsHeaderContainer}></View>
                </View>
                <View style={Styles.child2}>
                    <View style={Styles.headerContainer}>
                        <View
                            style={{
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                        >
                            <Text
                                style={{
                                    ...fonts.secondaryFont,
                                    color: color.textGrey,
                                }}
                            >
                                {props.route.params.title}
                            </Text>
                        </View>
                        <View style={{ marginTop: 33 }}>
                            <Text
                                style={{
                                    ...fonts.regularBoldFont2x,
                                    color: color.textGrey,
                                    marginBottom: 14,
                                }}
                            >
                                Drink Water
                            </Text>
                            <Text
                                style={{
                                    ...fonts.regularFont2x,
                                    color: color.textGrey,
                                }}
                            >
                                {"        "}Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna
                                aliqua. Ut enim ad minim veniam, quis nostrud
                                exercitation ullamco laboris nisi ut aliquip ex
                                ea commodo consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum
                                dolore eu fugiat nulla pariatur. Excepteur sint
                                occaecat cupidatat non proident, sunt in culpa
                                qui officia deserunt mollit anim id est
                                laborum."
                                {"\n       "}Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna
                                aliqua. Ut enim ad minim veniam, quis nostrud
                                exercitation ullamco laboris nisi ut aliquip ex
                                ea commodo consequat. Duis aute irure dolor
                            </Text>
                        </View>
                        <View style={{ marginTop: 33 }}>
                            <Text
                                style={{
                                    ...fonts.regularBoldFont2x,
                                    color: color.textGrey,
                                    marginBottom: 14,
                                }}
                            >
                                Calories
                            </Text>
                            <Text
                                style={{
                                    ...fonts.regularFont2x,
                                    color: color.textGrey,
                                }}
                            >
                                {"        "}Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna
                                aliqua. Ut enim ad minim veniam, quis nostrud
                                exercitation ullamco laboris nisi ut aliquip ex
                                ea commodo consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum
                                dolore eu fugiat nulla pariatur. Excepteur sint
                                occaecat cupidatat non proident, sunt in culpa
                                qui officia deserunt mollit anim id est
                                laborum."
                                {"\n       "}Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna
                                aliqua. Ut enim ad minim veniam, quis nostrud
                                exercitation ullamco laboris nisi ut aliquip ex
                                ea commodo consequat. Duis aute irure dolor
                            </Text>
                        </View>
                        <View style={{ marginTop: 33 }}>
                            <Text
                                style={{
                                    ...fonts.regularBoldFont2x,
                                    color: color.textGrey,
                                    marginBottom: 14,
                                }}
                            >
                                Drink Water
                            </Text>
                            <Text
                                style={{
                                    ...fonts.regularFont2x,
                                    color: color.textGrey,
                                }}
                            >
                                {"        "}Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna
                                aliqua. Ut enim ad minim veniam, quis nostrud
                                exercitation ullamco laboris nisi ut aliquip ex
                                ea commodo consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum
                                dolore eu fugiat nulla pariatur. Excepteur sint
                                occaecat cupidatat non proident, sunt in culpa
                                qui officia deserunt mollit anim id est
                                laborum."
                                {"\n       "}Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna
                                aliqua. Ut enim ad minim veniam, quis nostrud
                                exercitation ullamco laboris nisi ut aliquip ex
                                ea commodo consequat. Duis aute irure dolor
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
};

const Styles = StyleSheet.create({
    tipsMainContainer: {
        flex: 1,
        backgroundColor: color.secondaryColor,
    },
    child1: {
        backgroundColor: "red",
        // flex:1
        height: 200,
    },
    child2: {
        // backgroundColor:"yellow",
        flex: 2,
    },
    tipsHeaderContainer: {
        height: "100%",
        backgroundColor: color.textGrey,
    },
    headerContainer: {
        marginVertical: 21,
        paddingHorizontal: 20,
    },
});

export default Tips;
