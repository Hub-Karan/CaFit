import {
    View,
    Text,
    StyleSheet,
    Image,
    ScrollView,
    FlatList,
    Dimensions,
    Animated,
} from "react-native";
import React, { useRef, useState } from "react";

import ExcerciseList from "../../components/ExcerciseList";

import fonts from "../../constants/font-layout/font";
import color from "../../constants/colors/color";
import CustomButton from "../../components/CustomButton";
import ExcerciseCard from "../../components/ExcerciseCard";

const { width: windowWidth, height: windowHeight } = Dimensions.get("window");

const data = new Array(5).fill("Running");
const FIXED_SIZE = windowWidth * 0.75;
const CARD_SIZE = windowWidth * 0.8;

const Home = ({ navigation }) => {
    const scrollX = useRef(new Animated.Value(0)).current;
    const cardX = useRef(new Animated.Value(0)).current;

    const renderItem = ({ item, index }) => {
        const inputRange = [
            (index - 1) * FIXED_SIZE,
            index * FIXED_SIZE,
            (index + 1) * FIXED_SIZE,
        ];

        const adjustHeight = scrollX.interpolate({
            inputRange,
            outputRange: [0.7, 1, 0.7],
        });

        console.log(item, index);
        return (
            <View
                style={{
                    width: FIXED_SIZE,
                    justifyContent: "center",
                    alignItems: "center",
                    marginLeft: index === 0 ? 40 : null,
                    marginRight: index === 4 ? 50 : null,
                }}
            >
                <Animated.View
                    style={{
                        backgroundColor: "grey",
                        width: "85%",
                        height: "70%",
                        borderRadius: 19,
                        position: "relative",
                        transform: [{ scaleY: adjustHeight }],
                    }}
                >
                    <Text
                        style={{
                            ...fonts.regularBoldFont2x,
                            position: "absolute",
                            bottom: 15,
                            left: 15,
                            color: color.secondaryColor,
                        }}
                    >
                        {item}
                    </Text>
                </Animated.View>
            </View>
        );
    };

    const renderCard = ({ item, index }) => {
        const inputRange = [
            (index - 1) * CARD_SIZE,
            index * CARD_SIZE,
            (index + 1) * CARD_SIZE,
        ];

        const adjustHeight = cardX.interpolate({
            inputRange,
            outputRange: [0.7, 1, 0.7],
        });

        return (
            <Animated.View
                style={{
                    ...Styles.fitnessDetailsCard,
                    marginLeft: index === 0 ? 30 : null,
                    marginRight: index === 4 ? 40 : 10,
                    transform: [{ scaleY: adjustHeight }],
                }}
            >
                <View style={Styles.excerciseContainer}>
                    <Text
                        style={{ ...fonts.primaryFont, color: color.textGrey }}
                    >
                        Training Day 1
                    </Text>
                    <Text
                        style={{
                            ...fonts.regularBoldFont2x,
                            color: color.textGrey,
                        }}
                    >
                        Week 1
                    </Text>
                </View>

                <ExcerciseList
                    excerciseNo="1"
                    excerciseName="Excercise 1"
                    excerciseTime="7 Min"
                />
                <ExcerciseList
                    excerciseNo="2"
                    excerciseName="Excercise 2"
                    excerciseTime="15 Min"
                />
                <ExcerciseList
                    excerciseNo="3"
                    excerciseName="Excercise 3"
                    excerciseTime="10 Min"
                />
                <View style={Styles.trainStartBtn}>
                    <CustomButton
                        title="Start"
                        color="white"
                        // onPress={() => navigation.navigate("Drawer")}
                    />
                </View>
            </Animated.View>
        );
    };

    return (
        <View style={Styles.homeContainer}>
            <View style={Styles.child1}>
                <Animated.FlatList
                    data={data}
                    scrollEventThrottle={16}
                    onScroll={Animated.event(
                        [
                            {
                                nativeEvent: {
                                    contentOffset: {
                                        x: scrollX,
                                    },
                                },
                            },
                        ],
                        {
                            useNativeDriver: true,
                        }
                    )}
                    horizontal={true}
                    contentContainerStyle={{}}
                    renderItem={renderItem}
                    showsHorizontalScrollIndicator={false}
                    decelerationRate={0}
                    snapToInterval={FIXED_SIZE}
                />
            </View>
            <View style={Styles.child2}>
                <Animated.FlatList
                    data={data}
                    scrollEventThrottle={16}
                    onScroll={Animated.event(
                        [
                            {
                                nativeEvent: {
                                    contentOffset: {
                                        x: cardX,
                                    },
                                },
                            },
                        ],
                        {
                            useNativeDriver: true,
                        }
                    )}
                    horizontal={true}
                    contentContainerStyle={{}}
                    renderItem={renderCard}
                    showsHorizontalScrollIndicator={false}
                    decelerationRate={0}
                    snapToInterval={CARD_SIZE * 1.02}
                />
                {/* <View style={Styles.fitnessDetailsCard}>
                    <View style={Styles.excerciseContainer}>
                        <Text style={{ ...fonts.primaryFont }}>
                            Training Day 1
                        </Text>
                        <Text style={{ ...fonts.regularBoldFont2x }}>
                            Week 1
                        </Text>
                    </View>
                    
                    <ExcerciseList excerciseNo="1" excerciseName="Excercise 1" excerciseTime="7 Min" />
                    <ExcerciseList excerciseNo="2" excerciseName="Excercise 2" excerciseTime="15 Min" />
                    <ExcerciseList excerciseNo="3" excerciseName="Excercise 3" excerciseTime="10 Min" />
                    <View style={Styles.trainStartBtn}>
                        <CustomButton title="Start" color="white" onPress={() => navigation.navigate("BottomTabNavigator")} />
                    </View>
                </View> */}
            </View>
        </View>
    );
};

const Styles = StyleSheet.create({
    homeContainer: {
        flex: 1,
        backgroundColor: color.secondaryColor,
    },
    child1: {
        flex: 2,
        justifyContent: "center",
        alignItems: "center",
    },
    child2: {
        flex: 4,
        backgroundColor: "white",
        // justifyContent: "center",
        alignItems: "center",
    },

    fitnessDetailsCard: {
        justifyContent: "center",
        backgroundColor: "white",
        height: "90%",
        width: CARD_SIZE,
        borderRadius: 10,
        elevation: 10,
    },
    excerciseContainer: {
        justifyContent: "center",
        alignItems: "center",
    },
    trainStartBtn: {
        alignSelf: "center",
        backgroundColor: color.primaryColor,
        width: "60%",
        borderRadius: 29,
        marginTop: 20,
        overflow: "hidden",
    },
    fitnessCard: {
        backgroundColor: color.grey,
        height: "70%",
        // width: windowWidth*0.8,
        borderRadius: 10,
        elevation: 10,
        position: "relative",
    },
    fitnessCardTextContainer: {
        position: "absolute",
        bottom: 15,
        left: 15,
    },
    fitnessCardText: {
        color: color.secondaryColor,
    },
});

export default Home;
