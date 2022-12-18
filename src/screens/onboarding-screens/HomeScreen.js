import React, { useRef, useEffect, useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    ImageBackground,
    FlatList,
    Dimensions,
} from 'react-native';

// COMPONENT
import CustomButton from '../../components/CustomButton';

// CONSTANT
import data from '../../constants/data/onboardingData';
import color from '../../constants/colors/color';
import fonts from '../../constants/font-layout/font';

const { width: windowWidth, height: windowHeight } = Dimensions.get('window');

const HomeScreen = ({ navigation }) => {
    const flatlistRef = useRef(null);
    const count = useRef(0);
    const [active, setActive] = useState(0);

    const onStartPress = () => {
        // count.current++
        if (active == 2) {
            navigation.navigate('Welcome');
        } else {
            // setActive(active + 1)
            flatlistRef.current.scrollToIndex({
                animated: true,
                index: active + 1,
            });
        }
    };

    useEffect(() => {
        console.log(active);
    }, [active]);

    // const sliderChange = ({ viewableItems, changed }) => {
    //     console.log(viewableItems, "view");
    //     console.log(changed, "change");
    // }

    const displayOnboardingItem = ({ item, index }) => {
        return (
            <View style={{ height: windowHeight, width: windowWidth }}>
                <View style={{ flex: 1 }}>
                    <View style={{ flex: 2 }}>
                        <View>
                            <Text
                                style={{
                                    ...fonts.primaryFont,
                                    color: color.primaryColor,
                                    textAlign: 'center',
                                    marginVertical: 49,
                                }}
                            >
                                {item.heading}
                            </Text>
                        </View>
                        <View
                            style={{
                                alignSelf: 'center',
                                position: 'relative',
                                bottom: windowHeight * 0.15,
                            }}
                        >
                            <Image
                                source={item.iconImage}
                                resizeMode="center"
                            />
                        </View>
                    </View>

                    <View style={{ flex: 1, justifyContent: 'center' }}>
                        <View
                            style={{
                                flex: 1,
                                position: 'relative',
                                top: windowHeight * 0.05,
                            }}
                        >
                            <Text
                                style={{
                                    ...fonts.regularBoldFont,
                                    color: color.secondaryColor,
                                    paddingHorizontal: 40,
                                    textAlign: 'center',
                                }}
                            >
                                {item.text}
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
        );
    };

    return (
        <View style={{ backgroundColor: color.primaryColor, flex: 1 }}>
            <ImageBackground
                style={{
                    bottom: windowHeight * 0.2,
                    height: '90%',
                    position: 'relative',
                    flex: 1,
                }}
                resizeMode="cover"
                source={require('../../assets/images/whiteCircle.png')}
            >
                <FlatList
                    scrollEnabled={true}
                    ref={flatlistRef}
                    data={data}
                    horizontal={true}
                    style={{
                        flex: 1,
                        height: windowHeight,
                        top: windowHeight * 0.2,
                    }}
                    pagingEnabled={true}
                    showsHorizontalScrollIndicator={false}
                    renderItem={displayOnboardingItem}
                    onScroll={(e) => {
                        const index = Math.round(
                            e.nativeEvent.contentOffset.x / windowWidth
                        );
                        setActive(index);
                    }}
                />
                <View style={Styles.dotContainer}>
                    <View
                        style={{
                            backgroundColor: 'white',
                            height: 12,
                            width: 12,
                            borderRadius: 15 / 2,
                            marginHorizontal: 10,
                            opacity: active === 0 ? 1 : 0.5,
                        }}
                    ></View>
                    <View
                        style={{
                            backgroundColor: 'white',
                            height: 12,
                            width: 12,
                            borderRadius: 15 / 2,
                            marginHorizontal: 10,
                            opacity: active === 1 ? 1 : 0.5,
                        }}
                    ></View>
                    <View
                        style={{
                            backgroundColor: 'white',
                            height: 12,
                            width: 12,
                            borderRadius: 15 / 2,
                            marginHorizontal: 10,
                            opacity: active === 2 ? 1 : 0.5,
                        }}
                    ></View>
                </View>
                <View style={Styles.customBtnViewContainer}>
                    {/* <CustomButton onPress={() => navigation.navigate("Welcome")} title="Start" /> */}
                    <CustomButton
                        onPress={() => onStartPress()}
                        title="Start"
                    />
                </View>
            </ImageBackground>
        </View>
    );
};

const Styles = StyleSheet.create({
    customBtnContainer: {
        backgroundColor: color.secondaryColor,
        width: '90%',
        borderRadius: 19,
        marginTop: 20,
        overflow: 'hidden',
        justifyContent: 'center',
        bottom: windowHeight * -0.1,
    },
    mainScreen: {
        flex: 1,
        width: windowWidth,
        height: windowHeight,
    },
    // onboardingList: {
    //     height: "100%"
    // },
    bgImageContainer: {
        flex: 1,
        backgroundColor: color.primaryColor,
        position: 'relative',
    },
    bgImage: {
        flex: 1,
        position: 'relative',
        top: '-13%',
        height: '80%',
    },
    headerContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        top: '10%',
    },
    iconContainer: {
        position: 'relative',
        top: '25%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    mainHeader: {
        color: color.primaryColor,
        marginTop: 49,
        justifyContent: 'center',
        alignItems: 'center',
    },
    bottomContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        bottom: '0%',
        flex: 1,
    },
    bottomTextContainer: {
        flex: 1,
        bottom: windowHeight * -0.35,
    },
    bottomText: {
        color: color.secondaryColor,
        marginHorizontal: 63,
        textAlign: 'center',
    },
    customBtnViewContainer: {
        backgroundColor: 'white',
        borderRadius: 30,
        position: 'relative',
        bottom: windowHeight * 0.02,
        width: windowWidth * 0.9,
        alignSelf: 'center',
        overflow: 'hidden',
        top: windowHeight * 0.15,
    },
    dotContainer: {
        justifyContent: 'center',
        top: windowHeight * 0.13,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
    },
});

export default HomeScreen;
