import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Animated,
    Pressable,
} from "react-native";
import React, { useState, useEffect, useRef } from "react";

import color from "../constants/colors/color";

const CusSwitch = (props) => {
    const [isToggle, setIsToggle] = useState(false);
    const [value, setValue] = useState(false);

    const customSwitch = useRef(new Animated.Value(0)).current;
    // console.log(customSwitch,"switch");

    const switchPress = () => {
        let val = parseInt(JSON.stringify(customSwitch));
        setValue((prev) => {
            return !prev;
        });
        return Animated.timing(customSwitch, {
            toValue: val === 0 ? 1 : 0,
            duration: 100,
            useNativeDriver: true,
        }).start();
    };

    useEffect(() => {
        customSwitch.addListener((e) => {
            // console.log(e.value, "   event value");
        });
        return () => {
            customSwitch.removeAllListeners();
        };
    }, []);

    const itemSwitch = customSwitch.interpolate({
        inputRange: [0, 1],
        outputRange: [1, props.width / 3 + 6],
    });

    return (
        <View
            style={{
                flex: 1,
                backgroundColor: "white",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Pressable
                onPress={() => switchPress()}
                style={{
                    width: props.width,
                    alignItems: "center",
                    borderRadius: 10,
                    justifyContent: "center",
                }}
            >
                <View
                    style={{
                        width: props.width,
                        height: props.width / 2,
                        backgroundColor: value
                            ? color.primaryColor
                            : color.textGrey,
                        borderRadius: 80,
                        flexDirection: "row",
                        overflow: "hidden",
                        // marginHorizontal: 30,
                    }}
                >
                    <Animated.View
                        style={{
                            width: props.width / 2,
                            backgroundColor: "white",
                            borderRadius: 40,
                            height: "90%",
                            alignSelf: "center",
                            margin: 2,
                            transform: [{ translateX: itemSwitch }],
                        }}
                    ></Animated.View>
                </View>
            </Pressable>
        </View>
    );
};

export default CusSwitch;
