import React from "react";
import {
    View,
    Text,
    TouchableNativeFeedback,
    StyleSheet,
    Dimensions,
} from "react-native";

const { width: windowWidth, height: windowHeight } = Dimensions.get("window");

const CustomButton = (props) => {
    return (
        <TouchableNativeFeedback onPress={props.onPress}>
            <View style={Styles.btnTextContainer}>
                {props.color === "white" && props.fontSize === 12 ? (
                    <Text
                        style={{
                            ...Styles.btnTextWhite,
                            fontSize: props.fontSize,
                        }}
                    >
                        {props.title}
                    </Text>
                ) : props.color === "white" ? (
                    <Text style={Styles.btnTextWhite}>{props.title}</Text>
                ) : (
                    <Text style={Styles.btnText}>{props.title}</Text>
                )}
            </View>
        </TouchableNativeFeedback>
    );
};

const Styles = StyleSheet.create({
    btnTextContainer: {
        justifyContent: "center",
        alignItems: "center",
        // backgroundColor:"red"
    },

    btnTextWhite: {
        color: "#FFFFFF",
        fontSize: 20,
        fontFamily: "Quicksand-Bold",
        padding: 10,
    },
    btnText: {
        color: "#FF9B70",
        fontSize: 20,
        fontFamily: "Quicksand-Bold",
        padding: 10,
    },
});

export default CustomButton;
