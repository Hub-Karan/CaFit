import {
    View,
    Text,
    TextInput,
    StyleSheet,
    Keyboard,
    KeyboardAvoidingView,
    Switch,
    ScrollView,
} from 'react-native';
import React, { useState } from 'react';

// COMPONENT
import CustomSwitch from '../../components/CustomSwitch';
import CustomButton from '../../components/CustomButton';
import GenderSwitch from '../../components/GenderSwitch';
import CusSwitch from '../../components/CusSwitch';
import Height from '../../components/Height';

// CONSTANT
import color from '../../constants/colors/color';
import fonts from '../../constants/font-layout/font';

const PersonalDetails = ({ navigation }) => {
    const [isEnabled, setIsEnabled] = useState(false);

    const toggleSwitch = () => {
        return setIsEnabled((prev) => {
            return !prev;
        });
    };

    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <View style={Styles.personalDetailsContainer}>
                {/* <View style={Styles.personalHeaderContainer}>
                    
                </View> */}
                <View style={Styles.personalInfoContainer}>
                    <View style={{ alignItems: 'center' }}>
                        <Text
                            style={{
                                ...fonts.primaryFont,
                                color: color.textGrey,
                                marginTop: 10,
                            }}
                        >
                            Personal Details
                        </Text>
                        <Text
                            style={{
                                ...fonts.regularFont2x,
                                paddingHorizontal: 20,
                                paddingVertical: 5,
                                textAlign: 'center',
                                marginTop: 19,
                                color: color.textGrey,
                            }}
                        >
                            Let us know about you to speed up the result, Get
                            fit with your personal workout plan!
                        </Text>
                    </View>
                    <View style={Styles.personalDetailsList}>
                        <View>
                            <Text
                                style={{
                                    ...fonts.secondaryFont,
                                    color: color.textGrey,
                                }}
                            >
                                Apply Health
                            </Text>
                            <Text
                                style={{
                                    ...fonts.regularFont2x,
                                    color: color.textGrey,
                                }}
                            >
                                Allow access to fill my parameters
                            </Text>
                        </View>
                        <View>
                            <View
                                style={{
                                    transform: [
                                        { scaleX: 1.2 },
                                        { scaleY: 1.2 },
                                    ],
                                }}
                            >
                                <CusSwitch width={60} />
                            </View>
                        </View>
                    </View>
                    <View style={Styles.personalDetailsList}>
                        <Height text={'Birthday'} />
                    </View>
                    <View style={Styles.personalDetailsList}>
                        <Height text={'Height'} units={'175 cm'} />
                    </View>
                    <View style={Styles.personalDetailsList}>
                        <Height text={'Weight'} units={'70 Kg'} />
                    </View>
                    <View style={Styles.personalDetailsList}>
                        <View>
                            <Text
                                style={{
                                    ...fonts.secondaryFont,
                                    color: color.textGrey,
                                }}
                            >
                                Gender
                            </Text>
                        </View>
                        <View>
                            <GenderSwitch
                                bgColor={color.primaryColor}
                                width={160}
                                height={30}
                                textColor={color.primaryColor}
                                radius={9}
                            />
                        </View>
                    </View>
                </View>
                {/* button container */}
                <View
                    style={{
                        width: '100%',
                        justifyContent: 'flex-end',
                        alignItems: 'center',
                        // backgroundColor: "red",
                        flex: 0.2,
                    }}
                >
                    <View style={Styles.customBtnContainer}>
                        <CustomButton
                            title="Start"
                            color="white"
                            onPress={() => navigation.navigate('Menu')}
                        />
                    </View>
                    <View style={Styles.dotContainer}>
                        <View style={Styles.dot} />
                        <View style={Styles.dot} />
                        <View style={Styles.activeDot} />
                    </View>
                </View>
            </View>
        </ScrollView>
    );
};

const Styles = StyleSheet.create({
    personalDetailsContainer: {
        flex: 1,
        backgroundColor: color.secondaryColor,
        // justifyContent: "flex-end",
        // padding: 10,
        // paddingHorizontal: 10,
    },
    personalHeaderContainer: {
        flex: 1,
        // backgroundColor:"green",
    },
    personalInfoContainer: {
        flex: 0.8,
        padding: 10,
        // backgroundColor: "yellow",
    },
    personalDetailsList: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 20,
        paddingHorizontal: 10,
        borderBottomWidth: 1,
        borderColor: '#E6E6E6',
        flex: 1,
    },
    dotContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 15,
    },
    dot: {
        backgroundColor: color.lightGrey,
        height: 12,
        width: 12,
        borderRadius: 15 / 2,
        marginHorizontal: 10,
        opacity: 0.5,
    },
    activeDot: {
        backgroundColor: color.primaryColor,
        height: 12,
        width: 12,
        borderRadius: 15 / 2,
        marginHorizontal: 10,
        opacity: 1,
    },
    // personalDetailsContainer: {
    //     padding: 10,
    //     backgroundColor: color.secondaryColor,
    //     flex: 1,
    //     alignItems: "center"
    // },
    // personalDetailsHeaderContainer: {},
    // personalDetailsHeaderText: {
    //     textAlign: "center",
    //     color: color.textGrey
    // },
    // personalDetailsParaContainer: {
    //     paddingHorizontal: 22,
    //     marginTop: 19,
    //     marginBottom: 39
    // },
    // personalDetailsParaText: {
    //     textAlign: "center",
    //     fontSize: 16,
    //     paddingHorizontal: 5,
    //     fontFamily: "Quicksand-Regular",

    //     color: color.textGrey
    // },
    customBtnContainer: {
        justifyContent: 'flex-end',
        backgroundColor: color.primaryColor,
        width: '90%',
        borderRadius: 30,
        marginTop: 20,
        overflow: 'hidden',
        // bottom: "3%"
    },
});

export default PersonalDetails;
