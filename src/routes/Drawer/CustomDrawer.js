import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';

import { useNavigation } from '@react-navigation/native';

import color from '../../constants/colors/color';
import fonts from '../../constants/font-layout/font';
import SvgYoga from '../../assets/icons/svg-components/SvgYoga';
import Running from '../../assets/icons/svg-components/Running';
import SvgRunning from '../../assets/icons/svg-components/SvgRunning';
import SvgWorkout from '../../assets/icons/svg-components/SvgWorkout';
import RightArrows from '../../assets/icons/svg-components/RightArrow';
import SvgWalking from '../../assets/icons/svg-components/SvgWalking';
import SvgFitness from '../../assets/icons/svg-components/SvgFitness';
import SvgStrength from '../../assets/icons/svg-components/SvgStrength';
import SvgInfo from '../../assets/icons/svg-components/SvgInfo';
import Tick from '../../assets/icons/svg-components/Tick';

import { NavigationRef } from '../../constants/Ref';

const DrawerItem = (props) => {
    const currentRoute = NavigationRef.current.getCurrentRoute().name;

    return (
        <View style={Styles.drawerItemContainer}>
            <View style={Styles.drawerContainer}>
                <View>{props.component}</View>
                <View>
                    <Text
                        style={{
                            ...fonts.secondaryFont,
                            color: color.textGrey,
                            marginLeft: 20,
                        }}
                    >
                        {props.title}
                    </Text>
                </View>
            </View>
            <View style={{ flex: 0.2 }}>{props.infoComponent}</View>
        </View>
    );
};

const CustomDrawer = () => {
    const currentRoute = NavigationRef.current.getCurrentRoute().name;

    // console.log(currentRoute, "drawerslide current route");
    const navigation = useNavigation();

    return (
        <View style={Styles.customDrawerContainer}>
            <View style={Styles.child1}>
                <View style={Styles.drawerHeaderContainer}>
                    <View>
                        <View style={Styles.profileIcon}></View>
                    </View>
                    <View>
                        <Text
                            style={{
                                ...fonts.secondaryFont,
                                color: color.textGrey,
                                marginLeft: 20,
                            }}
                        >
                            Training Plan
                        </Text>
                    </View>
                </View>
            </View>
            <View style={Styles.child2}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Running')}
                    style={{ flex: 1 }}
                >
                    <DrawerItem
                        title={'Running'}
                        component={
                            currentRoute === 'Running' ||
                            currentRoute === 'RunningScreen' ? (
                                <Tick width={20} height={20} fill={'green'} />
                            ) : (
                                <SvgRunning />
                            )
                        }
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    style={{ flex: 1 }}
                    onPress={() => navigation.navigate('WorkoutStack')}
                >
                    <DrawerItem
                        title={'Yoga'}
                        component={
                            currentRoute === 'WorkoutStack' ||
                            currentRoute === 'Workout' ? (
                                <Tick width={20} height={20} fill={'green'} />
                            ) : (
                                <SvgYoga />
                            )
                        }
                        infoComponent={<SvgInfo />}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    style={{ flex: 1 }}
                    onPress={() => navigation.navigate('Excercise')}
                >
                    <DrawerItem
                        title={'Workout'}
                        component={
                            currentRoute === 'Excercise' ||
                            currentRoute === 'FullBody' ||
                            currentRoute === 'Foot' ||
                            currentRoute === 'Arm' ||
                            currentRoute === 'Body' ? (
                                <Tick width={20} height={20} fill={'green'} />
                            ) : (
                                <SvgWorkout />
                            )
                        }
                    />
                </TouchableOpacity>
                <TouchableOpacity style={{ flex: 1 }}>
                    <DrawerItem title={'Walking'} component={<SvgWalking />} />
                </TouchableOpacity>
                <TouchableOpacity style={{ flex: 1 }}>
                    <DrawerItem
                        title={'Fitness'}
                        component={<SvgFitness />}
                        infoComponent={<SvgInfo />}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={{ flex: 1 }}>
                    <DrawerItem
                        title={'Strength'}
                        component={<SvgStrength />}
                    />
                </TouchableOpacity>
                <View
                    style={{
                        borderBottomWidth: 1,
                        borderColor: '#E6E6E6',
                        marginLeft: 30,
                        flex: 0.5,
                    }}
                ></View>
            </View>
            <View style={Styles.child3}>
                <View style={Styles.bottomHeaderContainer}>
                    <View>
                        <Text
                            style={{
                                ...fonts.regularBoldFont4x,
                                color: color.textGrey,
                            }}
                        >
                            Switch Account
                        </Text>
                    </View>
                    <View>
                        <RightArrows
                            width={20}
                            height={20}
                            fill={color.textGrey}
                        />
                    </View>
                </View>
            </View>
        </View>
    );
};

const Styles = StyleSheet.create({
    customDrawerContainer: {
        flex: 1,
        backgroundColor: color.secondaryColor,
    },
    drawerItemContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginLeft: 30,
        flex: 1,
        marginVertical: 1,
        // backgroundColor: "red",
        // marginVertical: 19,
    },
    profileIcon: {
        width: 40,
        height: 40,
        borderRadius: 40 / 2,
        backgroundColor: color.textGrey,
    },
    drawerContainer: {
        flex: 0.8,
        flexDirection: 'row',
        alignItems: 'center',
    },
    child1: {
        flex: 1,
        // backgroundColor: "red",
        justifyContent: 'center',
        // alignItems: "flex-start",
        marginLeft: 30,
    },
    child2: {
        flex: 4,
        justifyContent: 'center',
    },
    child3: {
        flex: 1,
        justifyContent: 'center',
    },
    drawerHeaderContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingBottom: 20,
        borderBottomWidth: 1,
        borderColor: '#E6E6E6',
    },
    bottomHeaderContainer: {
        flexDirection: 'row',
        // marginLeft: 30,
        justifyContent: 'space-around',
        alignItems: 'center',
    },
});

export default CustomDrawer;
