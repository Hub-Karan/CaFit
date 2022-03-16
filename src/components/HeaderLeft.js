import { View, Text, TouchableNativeFeedback } from "react-native";
import React from "react";
import SvgLeft from "./svg-components/SvgLeft";

import { useNavigation } from "@react-navigation/native";

const HeaderLeft = (props) => {
    const navigation = useNavigation();

    console.log(props, "headerleft");
    return (
        <TouchableNativeFeedback onPress={() => navigation.goBack()}>
            <View style={{ marginLeft: 20 }}>
                <SvgLeft fill={props.fill} width={20} height={16} />
            </View>
        </TouchableNativeFeedback>
    );
};

export default HeaderLeft;
