import {
    View,
    Text,
    StyleSheet,
    TouchableNativeFeedback,
    ScrollView,
    Dimensions,
    Animated,
} from "react-native";
import React, { useRef } from "react";

import color from "../../constants/colors/color";
import fonts from "../../constants/font-layout/font";
import LeftArrow from "../../components/svg-components/LeftArrow";
import RightArrow from "../../components/svg-components/RightArrow";

const { width: windowWidth, height: windowHeight } = Dimensions.get("window");

const data = new Array(5).fill("Running");
const CARD_SIZE = windowWidth * 0.6;

const Weight = () => {
    const cardX = useRef(new Animated.Value(0)).current;
    const [screenSelect, setScreenSelect] = React.useState("Check-Process");

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
                    ...Styles.cardContainer,
                    marginLeft: index === 0 ? 70 : null,
                    marginRight: index === 4 ? 70 : 10,
                    transform: [{ scaleY: adjustHeight }],
                }}
            ></Animated.View>
        );
    };

    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <View style={Styles.weightMainContainer}>
                <View style={Styles.child1}>
                    <View style={Styles.processTabContainer}>
                        <TouchableNativeFeedback
                            onPress={() => setScreenSelect("Check-Process")}
                        >
                            <View
                                style={{
                                    ...Styles.checkProcessContainer,
                                    borderColor:
                                        screenSelect === "Check-Process"
                                            ? color.primaryColor
                                            : color.textGrey,
                                }}
                            >
                                <Text
                                    style={{
                                        ...fonts.regularBoldFont4x,
                                        color:
                                            screenSelect === "Check-Process"
                                                ? color.primaryColor
                                                : color.textGrey,
                                    }}
                                >
                                    Check Process
                                </Text>
                            </View>
                        </TouchableNativeFeedback>
                        <TouchableNativeFeedback
                            onPress={() => setScreenSelect("My-Weight")}
                        >
                            <View
                                style={{
                                    ...Styles.checkProcessContainer,
                                    borderColor:
                                        screenSelect === "My-Weight"
                                            ? color.primaryColor
                                            : color.textGrey,
                                }}
                            >
                                <Text
                                    style={{
                                        ...fonts.regularBoldFont4x,
                                        color:
                                            screenSelect === "My-Weight"
                                                ? color.primaryColor
                                                : color.textGrey,
                                    }}
                                >
                                    My Weight
                                </Text>
                            </View>
                        </TouchableNativeFeedback>
                    </View>
                    <Text
                        style={{
                            ...fonts.regularFont,
                            color: color.textGrey,
                            opacity: 0.6,
                            marginTop: 12,
                            marginVertical: 39,
                        }}
                    >
                        Add more photos to control your process
                    </Text>
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
                    <View style={{ flex: 0.1 }}>
                        <View
                            style={{
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "space-between",
                            }}
                        >
                            <LeftArrow
                                width={20}
                                height={16}
                                fill={color.textGrey}
                            />
                            <Text
                                style={{
                                    ...fonts.secondaryFont,
                                    color: color.textGrey,
                                    marginHorizontal: 60,
                                    marginVertical: 19,
                                }}
                            >
                                Sunday, Aug 26
                            </Text>
                            <RightArrow
                                width={20}
                                height={16}
                                fill={color.textGrey}
                            />
                        </View>
                    </View>
                    <View style={{ flex: 0.1, width: "40%" }}>
                        <View style={Styles.weightDisplayContainer}>
                            <Text
                                style={{
                                    ...fonts.largeFont,
                                    color: color.primaryColor,
                                    paddingVertical: 4,
                                }}
                            >
                                74 Kg
                            </Text>
                        </View>
                    </View>
                </View>
                <View style={Styles.child3}>
                    <Text
                        style={{
                            ...fonts.regularFont2x,
                            marginHorizontal: 22,
                            color: color.textGrey,
                            marginTop: 30,
                            paddingBottom: 20,
                        }}
                    >
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Repudiandae recusandae, ab culpa explicabo ea
                        porro? Ea sapiente recusandae blanditiis ducimus fuga
                        sint, facere quidem similique modi consectetur ipsa nam
                        minus praesentium dolores! Repellat dicta consectetur
                        fugit sunt laboriosam facilis libero necessitatibus
                        itaque dolorem illo distinctio ea dignissimos
                        perspiciatis optio omnis esse tenetur, eos sequi at
                        deserunt. Veniam ipsam quidem beatae aspernatur eius
                        deserunt officia suscipit nulla doloremque error,
                        eveniet iste explicabo perspiciatis culpa esse provident
                        iure quasi distinctio voluptatum similique libero ullam
                        quas? Esse tempora autem veritatis soluta fuga facilis
                        dolorem molestiae illum ab, amet adipisci sint
                        consectetur at totam?
                    </Text>
                </View>
            </View>
        </ScrollView>
    );
};

const Styles = StyleSheet.create({
    weightMainContainer: {
        flex: 1,
        backgroundColor: color.secondaryColor,
    },
    child1: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    processTabContainer: {
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        marginTop: 20,
    },
    checkProcessContainer: {
        marginHorizontal: 5,
        width: "43%",
        height: "100%",
        alignItems: "center",
        paddingHorizontal: 9,
        paddingVertical: 11,
        borderRadius: 7,
        borderWidth: 1,
    },
    myWeightContainer: {
        marginHorizontal: 5,
        width: "43%",
        height: "100%",
        alignItems: "center",
        paddingHorizontal: 9,
        paddingVertical: 11,
        borderRadius: 7,
        borderWidth: 1,
    },
    weightDisplayContainer: {
        width: "100%",
        borderWidth: 0.8,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        borderColor: color.textGrey,
    },
    child2: {
        flex: 7,

        justifyContent: "center",
        alignItems: "center",
    },
    cardContainer: {
        width: CARD_SIZE,
        height: 300,
        backgroundColor: color.textGrey,
        borderRadius: 19,
        flex: 0.8,
        marginRight: 10,
    },
    child3: {
        flex: 1,
    },
});

export default Weight;
