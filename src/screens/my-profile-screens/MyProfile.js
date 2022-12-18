import { View, Text, StyleSheet, TouchableNativeFeedback } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

// CONSTANT
import fonts from '../../constants/font-layout/font';
import color from '../../constants/colors/color';

// COMPONENT
import Height from '../../components/Height';
import GenderSwitch from '../../components/GenderSwitch';
import RightArrows from '../../assets/icons/svg-components/RightArrow';

const MyProfile = () => {
    const navigation = useNavigation();

    const [selectLevel, setSelectLevel] = useState('Begineer');

    return (
        <View style={Styles.myProfileContainer}>
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginVertical: 5,
                    padding: 15,
                    borderBottomWidth: 0.5,
                }}
            >
                <Height text="Birthday" unitsColor={color.textGrey} />
            </View>
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginVertical: 5,
                    padding: 15,
                    borderBottomWidth: 0.5,
                }}
            >
                <Height
                    text="Height"
                    unitsColor={color.textGrey}
                    units={'170 cm'}
                />
            </View>
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginVertical: 5,
                    padding: 15,
                    borderBottomWidth: 0.5,
                }}
            >
                <Height
                    text="Weight"
                    unitsColor={color.textGrey}
                    units={'70 kg'}
                />
            </View>
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginVertical: 5,
                    padding: 15,
                    borderBottomWidth: 0.5,
                }}
            >
                <View>
                    <Text
                        style={{
                            ...fonts.regularBoldFont4x,
                            color: color.textGrey,
                        }}
                    >
                        Gender
                    </Text>
                </View>
                <GenderSwitch
                    bgColor={color.primaryColor}
                    height={35}
                    width={'50%'}
                    textColor={color.primaryColor}
                    radius={5}
                />
            </View>
            <TouchableNativeFeedback
                onPress={() =>
                    navigation.navigate('ProfileFitnessLevel', {
                        getStateFromChild: (state) => {
                            console.log('function');
                            return setSelectLevel(state);
                        },
                        levelState: selectLevel,
                    })
                }
            >
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginVertical: 5,
                        padding: 15,
                        borderBottomWidth: 0.5,
                    }}
                >
                    <View>
                        <Text
                            style={{
                                ...fonts.regularBoldFont4x,
                                color: color.textGrey,
                            }}
                        >
                            My Fitness Level
                        </Text>
                    </View>
                    <View>
                        <Text
                            style={{
                                ...fonts.regularFont4x,
                                color: color.textGrey,
                            }}
                        >
                            {selectLevel}
                        </Text>
                    </View>
                </View>
            </TouchableNativeFeedback>

            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginVertical: 5,
                    padding: 15,
                    borderBottomWidth: 0.5,
                }}
            >
                <View>
                    <Text
                        style={{
                            ...fonts.regularBoldFont4x,
                            color: color.textGrey,
                        }}
                    >
                        Manage My Data
                    </Text>
                </View>
                <View>
                    <RightArrows width={20} height={20} fill={color.textGrey} />
                </View>
            </View>

            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginVertical: 5,
                    padding: 15,
                    borderBottomWidth: 0.5,
                }}
            >
                <View>
                    <Text
                        style={{
                            ...fonts.regularBoldFont4x,
                            color: color.primaryColor,
                        }}
                    >
                        Restart Basic Plan
                    </Text>
                </View>
            </View>
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginVertical: 5,
                    padding: 15,
                    borderBottomWidth: 0.5,
                }}
            >
                <View>
                    <Text
                        style={{
                            ...fonts.regularBoldFont4x,
                            color: color.primaryColor,
                        }}
                    >
                        Restore Subscription
                    </Text>
                </View>
            </View>
        </View>
    );
};

const Styles = StyleSheet.create({
    myProfileContainer: {
        flex: 1,
        backgroundColor: color.secondaryColor,
        paddingHorizontal: 10,
        paddingVertical: 10,
    },
});

export default MyProfile;
