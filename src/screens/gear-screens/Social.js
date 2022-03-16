import { View, Text, StyleSheet, TouchableNativeFeedback } from "react-native";
import React from "react";

import fonts from "../../constants/font-layout/font";
import color from "../../constants/colors/color";
import FacebookIcon from "../../components/svg-components/svg-icons/FacebookIcon";
import Tick from "../../components/svg-components/Tick";
import TwitterIcon from "../../components/svg-components/svg-icons/TwitterIcon";
import LinkedIcon from "../../components/svg-components/svg-icons/LinkedIcon";
import PinterestIcon from "../../components/svg-components/svg-icons/PinterestIcon";
import RedditIcon from "../../components/svg-components/svg-icons/RedditIcon";
import TumblrIcon from "../../components/svg-components/svg-icons/TumblrIcon";

const SocialCard = (props) => {
    return (
        <TouchableNativeFeedback>
            <View
                style={[
                    Styles.socialcardContainer,
                    { backgroundColor: props.bgColor },
                ]}
            >
                <View>{props.socialComponent}</View>
                <View>
                    <Text
                        style={{
                            ...fonts.regularBoldFont4x,
                            color: color.secondaryColor,
                        }}
                    >
                        {props.text}
                    </Text>
                </View>
                <View>
                    <Tick width={20} height={20} fill={props.fill} />
                </View>
            </View>
        </TouchableNativeFeedback>
    );
};

const Social = () => {
    return (
        <View style={{ flex: 1 }}>
            <View style={Styles.child1}>
                <Text
                    style={{
                        ...fonts.regularFont4x,
                        color: color.textGrey,
                        textAlign: "center",
                    }}
                >
                    Choose to Connect Social network
                </Text>
            </View>
            <View style={Styles.child2}>
                <SocialCard
                    fill={"#19D60B"}
                    text="Connect to Facebook"
                    socialComponent={<FacebookIcon />}
                    bgColor="#6F82FE"
                />
                <SocialCard
                    fill={"#19D60B"}
                    text="Connect to Facebook"
                    socialComponent={<TwitterIcon />}
                    bgColor="#70C0FC"
                />
                <SocialCard
                    fill={color.secondaryColor}
                    text="Connect to Facebook"
                    socialComponent={<LinkedIcon />}
                    bgColor="#68CCFF"
                />
                <SocialCard
                    fill={color.secondaryColor}
                    text="Connect to Facebook"
                    socialComponent={<PinterestIcon />}
                    bgColor="#FF6475"
                />
                <SocialCard
                    fill={color.secondaryColor}
                    text="Connect to Facebook"
                    socialComponent={<RedditIcon />}
                    bgColor="#FFBD5D"
                />
                <SocialCard
                    fill={color.secondaryColor}
                    text="Connect to Facebook"
                    socialComponent={<TumblrIcon />}
                    bgColor="#64B5FF"
                />
            </View>
        </View>
    );
};

const Styles = StyleSheet.create({
    socialContainer: {
        flex: 1,
        backgroundColor: color.secondaryColor,
    },
    child1: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    child2: {
        flex: 9,
        // backgroundColor: "yellow",
    },
    socialcardContainer: {
        flexDirection: "row",
        height: 60,
        width: "90%",
        justifyContent: "space-around",
        alignSelf: "center",
        backgroundColor: "blue",
        borderRadius: 10,
        alignItems: "center",
        marginVertical: 10,
    },
});

export default Social;
