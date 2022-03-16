import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
} from "react-native";
import React from "react";

import CusSwitch from "../../components/CusSwitch";

import color from "../../constants/colors/color";
import fonts from "../../constants/font-layout/font";

const SettingSwitch = (props) => {
    return (
        <View style={Styles.settingSwitchContainer}>
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

const Setting = (props) => {
    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <View style={Styles.settingMainContainer}>
                <SettingSwitch title={"Reminders"} />
                <View style={Styles.settingSwitchContainer}>
                    <View>
                        <Text
                            style={{
                                ...fonts.regularBoldFont4x,
                                color: color.textGrey,
                            }}
                        >
                            Language
                        </Text>
                    </View>
                    <TouchableOpacity
                        onPress={() => props.navigation.navigate("SettingLang")}
                    >
                        <View style={Styles.languageContainer}>
                            <Text
                                style={{
                                    ...fonts.regularBoldFont,
                                    color: color.textGrey,
                                }}
                            >
                                ENGLISH
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={Styles.settingSwitchContainer}>
                    <View>
                        <Text
                            style={{
                                ...fonts.regularBoldFont4x,
                                color: color.textGrey,
                            }}
                        >
                            Connected
                        </Text>
                    </View>
                    <TouchableOpacity
                        onPress={() =>
                            props.navigation.navigate("SettingSocial")
                        }
                    >
                        <View style={Styles.languageContainer}>
                            <Text
                                style={{
                                    ...fonts.regularBoldFont,
                                    color: color.textGrey,
                                }}
                            >
                                facebook
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <SettingSwitch title={"Apply Health"} />
                <SettingSwitch title={"Warm-Up"} />
                <SettingSwitch title={"Cool-Down"} />
                <SettingSwitch title={"Auto-Pause"} />
                <SettingSwitch title={"Pause for Runnig"} />
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
    settingSwitchContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginVertical: 10,
        paddingTop: 8,
        paddingBottom: 14,
        borderBottomWidth: 1,
        borderColor: "#E6E6E6",
    },
    languageContainer: {
        borderWidth: 1,
        paddingVertical: 4,
        paddingHorizontal: 7,
        borderRadius: 9,
    },
});

export default Setting;
