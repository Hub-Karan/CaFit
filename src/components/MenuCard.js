import {
    View,
    Text,
    TouchableNativeFeedback,
    StyleSheet,
    Image,
    Dimensions,
} from "react-native";
import React from "react";

import fonts from "../constants/font-layout/font";

const { width: windowWidth, height: windowHeight } = Dimensions.get("window");

const MenuCard = (props) => {
    return (
        <View style={{ justifyContent: "center", alignItems: "center" }}>
            <TouchableNativeFeedback onPress={props.onPress}>
                <View style={Styles.menuCardContainer}>
                    <View style={Styles.menuImgContainer}>
                        <Image
                            resizeMode="contain"
                            style={{ height: 40, width: 40 }}
                            source={props.imageUrl}
                        />
                    </View>
                    <View style={Styles.textContainer}>
                        <Text
                            style={{
                                ...fonts.regularBoldFont,
                                paddingHorizontal: 4,
                                color: "black",
                            }}
                        >
                            {props.text}
                        </Text>
                    </View>
                </View>
            </TouchableNativeFeedback>
        </View>
    );
};

const Styles = StyleSheet.create({
    menuCardContainer: {
        elevation: 1.2,
        borderRadius: 9,
        width: windowWidth / 3.4,
        height: windowHeight * 0.15,
        justifyContent: "center",
        alignItems: "center",
        margin: 5,
    },
    textContainer: {
        marginTop: 15,
    },
});

export default MenuCard;
