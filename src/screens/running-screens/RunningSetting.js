import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
} from "react-native";
import React from "react";
import Slider from "@react-native-community/slider";

import CusSwitch from "../../components/CusSwitch";

import color from "../../constants/colors/color";
import fonts from "../../constants/font-layout/font";
import Speaker from "../../components/svg-components/Speaker";
import SpeakerFull from "../../components/svg-components/SpeakerFull";

const SettingSwitch = (props) => {
    return (
        <View style={Styles.runningSettingSwitchContainer}>
            <View>
                <Text
                    style={{
                        ...fonts.regularBoldFont4x,
                        color: color.textGrey,
                    }}
                >
                    {props.title}
                </Text>
            </View>
            <View>
                <CusSwitch width={60} />
            </View>
        </View>
    );
};

const RunningSetting = () => {
    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <View style={Styles.settingMainContainer}>
                <SettingSwitch title={"GPS"} />
                <SettingSwitch title={"Auto Pause"} />
                <SettingSwitch title={"Pause run for calls"} />
                <SettingSwitch title={"Voice Volume"} />
                <View style={Styles.audioFeedContainer}>
                    <View style={Styles.audioDisplayContainer}>
                        <Text
                            style={{
                                ...fonts.regularBoldFont2x,
                                color: color.textGrey,
                                marginBottom: 10,
                            }}
                        >
                            Audio Feedback
                        </Text>
                    </View>
                    <View style={Styles.speakerContainer}>
                        <View style={{ marginHorizontal: 0 }}>
                            <Speaker width={20} />
                        </View>
                        <Slider
                            minimumValue={1}
                            maximumValue={60}
                            minimumTrackTintColor={color.primaryColor}
                            maximumTrackTintColor={color.textGrey}
                            thumbTintColor={color.primaryColor}
                            style={{
                                width: "90%",
                                height: 20,
                            }}
                        />
                        <View style={{ marginHorizontal: 0 }}>
                            <SpeakerFull width={20} />
                        </View>
                    </View>
                </View>
                <View style={Styles.timeContainer}>
                    <View style={Styles.timeDisplayContainer}>
                        <Text
                            style={{
                                ...fonts.regularBoldFont2x,
                                color: color.textGrey,
                                marginBottom: 10,
                            }}
                        >
                            Time
                        </Text>
                        <Text
                            style={{
                                ...fonts.regularBoldFont2x,
                                color: color.textGrey,
                                marginBottom: 10,
                            }}
                        >
                            25 min
                        </Text>
                    </View>
                    <View style={Styles.lengthContainer}>
                        <View style={{ marginHorizontal: 0 }}>
                            <Text
                                style={{
                                    ...fonts.regularBoldFont,
                                    color: color.textGrey,
                                }}
                            >
                                1
                            </Text>
                        </View>
                        <Slider
                            minimumValue={1}
                            maximumValue={60}
                            minimumTrackTintColor={color.primaryColor}
                            maximumTrackTintColor={color.textGrey}
                            thumbTintColor={color.primaryColor}
                            style={{
                                width: "90%",
                                height: 20,
                            }}
                        />
                        <View style={{ marginHorizontal: 0 }}>
                            <Text
                                style={{
                                    ...fonts.regularBoldFont,
                                    color: color.textGrey,
                                }}
                            >
                                60
                            </Text>
                        </View>
                    </View>
                </View>
                <View style={Styles.distanceContainer}>
                    <View>
                        <Text
                            style={{
                                ...fonts.regularBoldFont2x,
                                color: color.textGrey,
                                marginBottom: 10,
                            }}
                        >
                            Distance
                        </Text>
                    </View>
                    <View style={Styles.distanceDisplayContainer}>
                        <View style={{ marginHorizontal: 0 }}>
                            <Text
                                style={{
                                    ...fonts.regularBoldFont,
                                    color: color.textGrey,
                                }}
                            >
                                1
                            </Text>
                        </View>
                        <Slider
                            minimumValue={1}
                            maximumValue={60}
                            minimumTrackTintColor={color.primaryColor}
                            maximumTrackTintColor={color.textGrey}
                            thumbTintColor={color.primaryColor}
                            style={{
                                width: "90%",
                                height: 20,
                            }}
                        />
                        <View style={{ marginHorizontal: 0 }}>
                            <Text
                                style={{
                                    ...fonts.regularBoldFont,
                                    color: color.textGrey,
                                }}
                            >
                                60
                            </Text>
                        </View>
                    </View>
                </View>
                <SettingSwitch title={"Time"} />
                <SettingSwitch title={"Distance"} />
                <SettingSwitch title={"Pace"} />
                <SettingSwitch title={"Speed"} />
                <SettingSwitch title={"Calories"} />
            </View>
        </ScrollView>
    );
};

const Styles = StyleSheet.create({
    settingMainContainer: {
        flex: 1,
        backgroundColor: color.secondaryColor,
        padding: 20,
    },
    runningSettingSwitchContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginVertical: 10,
        paddingTop: 8,
        paddingBottom: 14,
        borderBottomWidth: 0.5,
    },
    audioFeedContainer: {
        marginVertical: 10,
        paddingTop: 8,
        paddingBottom: 14,
        borderBottomWidth: 0.5,
    },
    audioDisplayContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    speakerContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        marginBottom: 5,
    },
    timeContainer: {
        marginVertical: 10,
        paddingTop: 8,
        paddingBottom: 14,
        borderBottomWidth: 0.5,
    },
    timeDisplayContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    lengthContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        marginBottom: 5,
    },
    distanceContainer: {
        marginVertical: 10,
        paddingTop: 8,
        paddingBottom: 14,
        borderBottomWidth: 0.5,
    },
    distanceDisplayContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
    },
});

export default RunningSetting;
