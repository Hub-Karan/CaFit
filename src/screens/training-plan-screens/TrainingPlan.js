import {
    View,
    Text,
    FlatList,
    StyleSheet,
    TouchableOpacity,
    Pressable,
} from 'react-native';
import React, { useState, useLayoutEffect } from 'react';

// SVG
import WaterMeter from '../../assets/icons/svg-components/WaterMeter';
import Gear from '../../assets/icons/svg-components/Gear';
import Circle from '../../assets/icons/svg-components/Circle';
import Cups from '../../assets/icons/svg-components/Cups';
import SvgSingleCup from '../../assets/icons/svg-components/SvgSingleCup';

// COMPONENT
import CustomButton from '../../components/CustomButton';

// LOTTIVIEW
import LottieView from 'lottie-react-native';

// CONSTANT
import color from '../../constants/colors/color';
import fonts from '../../constants/font-layout/font';

const data = ['Water', 'Food'];
const waterAnimation = require('../../assets/water-animation.json');

const TrainingPlan = ({ navigation, route }) => {
    const [screenSelect, setScreenSelect] = useState('Water');

    return (
        <View style={Styles.trainingPlanContainer}>
            <View
                style={{
                    height: 100,
                    backgroundColor: color.primaryColor,
                    width: '100%',
                    position: 'absolute',
                }}
            ></View>

            <View style={Styles.cardMainContainer}>
                <View style={Styles.cardContainer}>
                    <Pressable onPress={() => setScreenSelect('Water')}>
                        <View>
                            <Text
                                style={{
                                    ...fonts.regularBoldFont4x,
                                    color:
                                        screenSelect === 'Water'
                                            ? color.primaryColor
                                            : color.textGrey,
                                }}
                            >
                                Water
                            </Text>
                        </View>
                    </Pressable>
                    <View
                        style={{
                            borderWidth: 1,
                            height: '100%',
                            borderColor: color.primaryColor,
                        }}
                    ></View>
                    <Pressable onPress={() => setScreenSelect('Food')}>
                        <View>
                            <Text
                                style={{
                                    ...fonts.regularBoldFont4x,
                                    color:
                                        screenSelect === 'Food'
                                            ? color.primaryColor
                                            : color.textGrey,
                                }}
                            >
                                Food
                            </Text>
                        </View>
                    </Pressable>
                </View>
                <View style={Styles.cardInfoContainer}>
                    <View
                        style={{
                            alignItems: 'center',
                            flex: 2,
                            justifyContent: 'center',
                        }}
                    >
                        <View style={Styles.cardMeterContainer}>
                            <View style={{ position: 'absolute', top: 50 }}>
                                <Text
                                    style={{
                                        ...fonts.largeFont69,
                                        color: color.textGrey,
                                    }}
                                >
                                    75%
                                </Text>
                                <Text
                                    style={{
                                        ...fonts.mediumFontXs,
                                        textAlign: 'center',
                                        color: color.textGrey,
                                    }}
                                >
                                    of 3000 ml
                                </Text>
                            </View>
                            {/* <WaterMeter width={"95%"} height={"100%"} /> */}
                            <LottieView
                                source={waterAnimation}
                                autoPlay
                                loop
                                style={{
                                    opacity: 0.8,
                                    // width: "100%",
                                    // height: "100%",
                                    transform: [
                                        { scaleX: 1.1 },
                                        { scaleY: 1.1 },
                                    ],
                                }}
                            />
                        </View>
                    </View>
                    <View style={Styles.cardDisplayContainer}>
                        <View>
                            <Text
                                style={{
                                    ...fonts.regularBoldFont,
                                    textAlign: 'left',
                                    color: color.textGrey,
                                }}
                            >
                                2500/3000 ml
                            </Text>
                        </View>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('WaterSetting')}
                        >
                            <Gear width={20} height={20} />
                        </TouchableOpacity>
                    </View>
                    <Cups width={'100%'} />
                </View>
            </View>
            <View style={Styles.customBtnContainer}>
                <CustomButton
                    title={<SvgSingleCup width={20} height={30} />}
                    color={'white'}
                />
            </View>
        </View>
    );
};

const Styles = StyleSheet.create({
    trainingPlanContainer: {
        flex: 1,
        // backgroundColor:color.primaryColor,
        alignItems: 'center',
    },
    cardMainContainer: {
        borderRadius: 8,
        width: '80%',
        height: '80%',
        elevation: 2,
        zIndex: 99,
        backgroundColor: color.secondaryColor,
        borderRadius: 19,
        zIndex: 99,
        // marginTop: -90,
    },
    cardContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingHorizontal: 30,
        paddingVertical: 22,
        height: 70,
        backgroundColor: '#F8F6F9',
        borderTopLeftRadius: 19,
        borderTopRightRadius: 19,
    },

    cardInfoContainer: {
        flex: 10,
        justifyContent: 'center',
    },
    cardMeterContainer: {
        borderWidth: 10,
        borderColor: color.primaryColor,
        width: 250,
        height: 250,
        borderRadius: 250 / 2,
        justifyContent: 'flex-end',
        alignItems: 'center',
        position: 'relative',
    },
    customBtnContainer: {
        width: '60%',
        backgroundColor: color.primaryColor,
        marginTop: 30,
        borderRadius: 30,
        overflow: 'hidden',
        // height: 50,
        // justifyContent: "center",
    },
    cardDisplayContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
});

export default TrainingPlan;
