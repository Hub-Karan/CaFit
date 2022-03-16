import { View, Text, StyleSheet } from "react-native";
import React from "react";

import color from "../../constants/colors/color";
import fonts from "../../constants/font-layout/font";
import CusSwitch from "../../components/CusSwitch";

const WaterSetting = () => {
    return (
        <View style={Styles.waterSettingContainer}>
            <View style={{ paddingHorizontal: 20, paddingVertical: 10 }}>
                <View
                    style={{
                        paddingVertical: 5,
                        borderBottomWidth: 0.5,
                    }}
                >
                    <View>
                        <Text
                            style={{
                                ...fonts.regularBoldFont4x,
                                color: color.textGrey,
                                marginVertical: 13,
                            }}
                        >
                            Daily goal
                        </Text>
                    </View>
                    <View style={Styles.dailyGoalHeaderContainer}>
                        <View style={Styles.dailyGoalContainer}></View>
                    </View>
                    <View style={Styles.dailyDisplayContainer}>
                        <View>
                            <Text>100</Text>
                        </View>
                        <View>
                            <Text>3000-5000 ml</Text>
                        </View>
                    </View>
                </View>
                <View style={{ paddingVertical: 5, borderBottomWidth: 0.5 }}>
                    <View>
                        <Text
                            style={{
                                ...fonts.regularBoldFont4x,
                                color: color.textGrey,
                                marginVertical: 13,
                            }}
                        >
                            Cups
                        </Text>
                    </View>
                    <View style={Styles.dailyGoalHeaderContainer}>
                        <View style={Styles.cupContainer}></View>
                    </View>
                    <View style={Styles.cupDisplayContainer}>
                        <View>
                            <Text>1</Text>
                        </View>
                        <View>
                            <Text>3000-5000 ml</Text>
                        </View>
                    </View>
                </View>
                <View style={{ paddingVertical: 5, borderBottomWidth: 0.5 }}>
                    <View style={Styles.waterDisplayContainer}>
                        <View>
                            <Text
                                style={{
                                    ...fonts.regularBoldFont4x,
                                    color: color.textGrey,
                                    marginVertical: 13,
                                }}
                            >
                                Water Reminder
                            </Text>
                        </View>
                        <View>
                            <CusSwitch width={60} />
                        </View>
                    </View>
                </View>
                <View style={{ paddingVertical: 5, borderBottomWidth: 0.5 }}>
                    <View style={Styles.waterDisplayContainer}>
                        <Text
                            style={{
                                ...fonts.regularBoldFont4x,
                                color: color.textGrey,
                                marginVertical: 13,
                            }}
                        >
                            Time Interval
                        </Text>
                        <Text
                            style={{
                                ...fonts.regularBoldFont4x,
                                color: color.textGrey,
                                marginVertical: 13,
                            }}
                        >
                            4.0h
                        </Text>
                    </View>
                </View>
                <View style={Styles.dailyGoalHeaderContainer}>
                    <View style={Styles.intervalHeaderContainer}></View>
                </View>
                <View style={Styles.intervalContainer}>
                    <View>
                        <Text>0.5</Text>
                    </View>
                    <View>
                        <Text>5</Text>
                    </View>
                </View>
                <View style={{ paddingVertical: 5 }}>
                    <View style={Styles.startContainer}>
                        <Text
                            style={{
                                ...fonts.regularBoldFont4x,
                                color: color.textGrey,
                            }}
                        >
                            Start
                        </Text>
                        <Text
                            style={{
                                ...fonts.regularFont4x,
                                color: color.textGrey,
                            }}
                        >
                            9 A.M
                        </Text>
                    </View>
                </View>
                <View style={{ paddingVertical: 5 }}>
                    <View style={Styles.startContainer}>
                        <Text
                            style={{
                                ...fonts.regularBoldFont4x,
                                color: color.textGrey,
                            }}
                        >
                            End
                        </Text>
                        <Text
                            style={{
                                ...fonts.regularFont4x,
                                color: color.textGrey,
                            }}
                        >
                            6 A.M
                        </Text>
                    </View>
                </View>
            </View>
        </View>
    );
};

const Styles = StyleSheet.create({
    waterSettingContainer: {
        flex: 1,
        backgroundColor: color.secondaryColor,
    },
    dailyGoalHeaderContainer: {
        width: "100%",
        zIndex: 1,
        height: 2,
        borderColor: color.primaryColor,
        backgroundColor: color.primaryColor,
        borderColor: color.primaryColor,
        position: "relative",
        justifyContent: "center",
        opacity: 1,
    },
    dailyGoalContainer: {
        width: "80%",
        backgroundColor: color.primaryColor,
        borderWidth: 2,
        borderColor: color.primaryColor,
        position: "absolute",
        opacity: 1,
    },
    dailyDisplayContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginVertical: 13,
    },
    cupContainer: {
        width: "60%",
        backgroundColor: color.primaryColor,
        borderWidth: 2,
        borderColor: color.primaryColor,
        position: "absolute",
        opacity: 1,
    },
    cupDisplayContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginVertical: 13,
    },
    waterDisplayContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    intervalHeaderContainer: {
        width: "40%",
        backgroundColor: color.primaryColor,
        borderWidth: 2,
        borderColor: color.primaryColor,
        position: "absolute",
        opacity: 1,
    },
    intervalContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginVertical: 13,
        paddingBottom: 10,
        borderBottomWidth: 0.5,
    },
    startContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginVertical: 13,
        paddingBottom: 20,
        borderBottomWidth: 0.5,
    },
});

export default WaterSetting;
