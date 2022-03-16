import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Animated,
    Pressable,
} from "react-native";
import React, { useState, useEffect, useRef } from "react";

const GenderSwitch = (props) => {
    const [gender, setGender] = useState("Male");

    return (
        <View style={Styles.genderSwitchContainer}>
            <Pressable
                onPress={() => setGender("Male")}
                style={Styles.btnContainer}
            >
                <View>
                    <Text
                        style={{
                            color:
                                gender === "Male" ? props.textColor : "white",
                        }}
                    >
                        Male
                    </Text>
                </View>
            </Pressable>
            <Pressable
                onPress={() => setGender("Female")}
                style={Styles.btnContainer}
            >
                <View>
                    <Text
                        style={{
                            color:
                                gender === "Female" ? props.textColor : "white",
                        }}
                    >
                        Female
                    </Text>
                </View>
            </Pressable>
            <View
                style={{
                    position: "absolute",
                    backgroundColor: "white",
                    width: "50%",
                    height: "100%",
                    left: gender === "Male" ? 5 : null,
                    right: gender === "Female" ? 5 : null,
                    zIndex: 1,
                    borderRadius: 4,
                }}
            ></View>
        </View>
    );
};

const Styles = StyleSheet.create({
    genderSwitchContainer: {
        backgroundColor: props.bgColor,
        width: props.width,
        height: props.height,
        borderRadius: props.radius,
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        padding: 3,
    },
    btnContainer: {
        zIndex: 2,
        width: "50%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
    },
});

export default GenderSwitch;
