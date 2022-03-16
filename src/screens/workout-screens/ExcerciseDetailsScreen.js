import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    FlatList,
    TouchableOpacity,
    TouchableNativeFeedback,
} from "react-native";
import React, { useState } from "react";
import Video from "react-native-video";

import color from "../../constants/colors/color";
import fonts from "../../constants/font-layout/font";

import Star from "../../components/svg-components/Star";
import Like from "../../components/svg-components/Like";
import Redirect from "../../components/svg-components/Redirect";

import PlayButton from "../../assets/svg/play-button.svg";

const ExcerciseDetailsScreen = ({ navigation }) => {
    const [paused, setPaused] = useState(true);
    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <View style={{ flex: 1, backgroundColor: color.secondaryColor }}>
                <View style={{ flex: 3 }}>
                    <View style={{ height: 210, marginBottom: 10 }}>
                        <Video
                            source={{
                                uri: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
                            }}
                            style={{ flex: 1 }}
                            paused={paused}
                            posterResizeMode="cover"
                            poster="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/English_Cocker_Spaniel_4.jpg/800px-English_Cocker_Spaniel_4.jpg"
                            resizeMode="cover"
                        />
                        <View style={Styles.playBtnContainer}>
                            {paused ? (
                                <View
                                    style={{
                                        backgroundColor: color.textGrey,
                                        borderRadius: 50,
                                    }}
                                >
                                    <TouchableOpacity
                                        onPress={() => setPaused(!paused)}
                                    >
                                        <PlayButton width={60} height={60} />
                                    </TouchableOpacity>
                                </View>
                            ) : (
                                <View
                                    style={{
                                        flex: 1,
                                        width: "100%",
                                        height: "100%",
                                    }}
                                >
                                    <TouchableOpacity
                                        onPress={() => setPaused(!paused)}
                                    >
                                        <PlayButton
                                            style={{ opacity: 0 }}
                                            width={300}
                                            height={300}
                                        />
                                    </TouchableOpacity>
                                </View>
                            )}
                        </View>
                    </View>

                    <View style={Styles.feedbackContainer}>
                        <View
                            style={{
                                flexDirection: "row",
                                justifyContent: "space-around",
                            }}
                        >
                            <View style={{ marginRight: 5 }}>
                                <Star height={16} width={16} fill={"#FF9B70"} />
                            </View>
                            <View style={{ marginRight: 5 }}>
                                <Star height={16} width={16} fill={"#FF9B70"} />
                            </View>
                            <View style={{ marginRight: 5 }}>
                                <Star height={16} width={16} fill={"#FF9B70"} />
                            </View>
                            <View style={{ marginRight: 5 }}>
                                <Star height={16} width={16} fill={"#FF9B70"} />
                            </View>
                            <Star
                                height={16}
                                width={16}
                                fill={color.textGrey}
                            />
                        </View>
                        <View
                            style={{
                                flexDirection: "row",
                            }}
                        >
                            <View style={{ marginRight: 20 }}>
                                <Like
                                    width={20}
                                    height={20}
                                    fill={color.secondaryColor}
                                />
                            </View>
                            <View style={{ marginRight: 5 }}>
                                <Redirect
                                    width={20}
                                    height={20}
                                    fill={color.secondaryColor}
                                />
                            </View>
                        </View>
                    </View>
                </View>
                <View style={Styles.recommendContainer}>
                    <View
                        style={{
                            paddingHorizontal: 20,
                            flex: 0.2,
                            marginVertical: 10,
                            justifyContent: "center",
                        }}
                    >
                        <Text
                            style={{
                                ...fonts.regularBoldFont4x,
                                color: color.textGrey,
                            }}
                        >
                            Recommended
                        </Text>
                    </View>
                    <View
                        style={{
                            flex: 0.8,
                            paddingHorizontal: 20,
                            flexDirection: "row",
                        }}
                    >
                        <ScrollView
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                        >
                            <View style={{ justifyContent: "center" }}>
                                <TouchableNativeFeedback
                                    style={{ overflow: "hidden" }}
                                    onPress={() => {
                                        navigation.navigate("Yoga");
                                    }}
                                >
                                    <View
                                        style={{
                                            backgroundColor: "grey",
                                            width: 150,
                                            height: 90,
                                            marginRight: 12,
                                        }}
                                    ></View>
                                </TouchableNativeFeedback>
                                <Text
                                    style={{
                                        ...fonts.regularBoldFont,
                                        color: color.textGrey,
                                    }}
                                >
                                    Running
                                </Text>
                            </View>

                            <View style={{ justifyContent: "center" }}>
                                <TouchableNativeFeedback
                                    style={{ overflow: "hidden" }}
                                    onPress={() => {
                                        navigation.navigate("Yoga");
                                    }}
                                >
                                    <View
                                        style={{
                                            backgroundColor: "grey",
                                            width: 150,
                                            height: 90,
                                            marginRight: 12,
                                        }}
                                    ></View>
                                </TouchableNativeFeedback>
                                <Text
                                    style={{
                                        ...fonts.regularBoldFont,
                                        color: color.textGrey,
                                    }}
                                >
                                    Running
                                </Text>
                            </View>
                            <View style={{ justifyContent: "center" }}>
                                <TouchableNativeFeedback
                                    style={{ overflow: "hidden" }}
                                    onPress={() => {
                                        navigation.navigate("Yoga");
                                    }}
                                >
                                    <View
                                        style={{
                                            backgroundColor: "grey",
                                            width: 150,
                                            height: 90,
                                            marginRight: 12,
                                        }}
                                    ></View>
                                </TouchableNativeFeedback>
                                <Text
                                    style={{
                                        ...fonts.regularBoldFont,
                                        color: color.textGrey,
                                    }}
                                >
                                    Running
                                </Text>
                            </View>
                        </ScrollView>
                    </View>
                </View>
                <View
                    style={{ backgroundColor: color.secondaryColor, flex: 3 }}
                >
                    <View style={{ flex: 1, paddingHorizontal: 20 }}>
                        <Text style={{ ...fonts.regularBoldFont4x }}>
                            17 Responses
                        </Text>
                    </View>
                    <View style={{ flex: 2 }}>
                        <ExcerciseDetailList />
                        <ExcerciseDetailList />
                        <ExcerciseDetailList />
                        <ExcerciseDetailList />
                        <ExcerciseDetailList />
                    </View>
                </View>
            </View>
        </ScrollView>
    );
};

const ExcerciseDetailList = () => {
    return (
        <View style={Styles.boxContainer}>
            <View
                style={{
                    backgroundColor: color.textGrey,
                    width: 30,
                    height: 30,
                    borderRadius: 30 / 2,
                }}
            ></View>
            <View style={{ marginHorizontal: 20 }}>
                <Text
                    style={{
                        ...fonts.regularBoldFont2x,
                        color: color.textGrey,
                    }}
                >
                    Mikhail Eduardovich
                </Text>
                <Text
                    style={{
                        ...fonts.regularFont,
                        color: color.textGrey,
                    }}
                >
                    09 days ago
                </Text>
                <Text
                    style={{
                        ...fonts.regularFont,
                        color: color.textGrey,
                    }}
                >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Blanditiis laboriosam, iure rei
                </Text>
            </View>
        </View>
    );
};

const Styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: color.secondaryColor,
    },
    bannerImgContainer: {
        height: "33%",
        backgroundColor: color.textGrey,
    },
    likesMeterContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginVertical: 10,
        marginHorizontal: 20,
    },
    playBtnContainer: {
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        top: 70,
        left: 170,
    },
    feedbackContainer: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 20,
        marginTop: 10,
    },
    recommendContainer: {
        backgroundColor: color.secondaryColor,
        flex: 1,
        justifyContent: "center",
        marginVertical: 15,
    },
    boxContainer: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        paddingHorizontal: 20,
        marginVertical: 10,
    },
});

export default ExcerciseDetailsScreen;
