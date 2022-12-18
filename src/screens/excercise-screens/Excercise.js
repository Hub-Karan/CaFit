import { View, Text } from 'react-native';
import React from 'react';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

// COMPONENT
import FullBody from './FullBody';
import Foot from './Foot';

// CONSTANT
import color from '../../constants/colors/color';
import fonts from '../../constants/font-layout/font';

const TopTab = createMaterialTopTabNavigator();

const Excercise = () => {
    return (
        <TopTab.Navigator
            screenOptions={{
                tabBarStyle: {
                    backgroundColor: color.secondaryColor,
                },
                // tabBarItemStyle: { width: 100, }
            }}
        >
            <TopTab.Screen
                name={'FullBody'}
                component={FullBody}
                options={{
                    title: 'Full body',
                    tabBarActiveTintColor: color.primaryColor,
                    tabBarInactiveTintColor: color.textGrey,
                    tabBarLabelStyle: {
                        ...fonts.regularBoldFont,
                        textTransform: 'capitalize',
                    },
                    tabBarIndicatorStyle: {
                        backgroundColor: color.primaryColor,
                    },
                }}
            />
            <TopTab.Screen
                name={'Foot'}
                component={Foot}
                options={{
                    title: 'Foot',
                    tabBarActiveTintColor: color.primaryColor,
                    tabBarInactiveTintColor: color.textGrey,
                    tabBarLabelStyle: {
                        ...fonts.regularBoldFont,
                        textTransform: 'capitalize',
                    },
                    tabBarIndicatorStyle: {
                        backgroundColor: color.primaryColor,
                    },
                }}
            />
            <TopTab.Screen
                name={'Arm'}
                component={Foot}
                options={{
                    title: 'Arm',
                    tabBarActiveTintColor: color.primaryColor,
                    tabBarInactiveTintColor: color.textGrey,
                    tabBarLabelStyle: {
                        ...fonts.regularBoldFont,
                        textTransform: 'capitalize',
                    },
                    tabBarIndicatorStyle: {
                        backgroundColor: color.primaryColor,
                    },
                }}
            />
            <TopTab.Screen
                name={'Body'}
                component={Foot}
                options={{
                    title: 'Body',
                    tabBarActiveTintColor: color.primaryColor,
                    tabBarInactiveTintColor: color.textGrey,
                    tabBarLabelStyle: {
                        ...fonts.regularBoldFont,
                        textTransform: 'capitalize',
                    },
                    tabBarIndicatorStyle: {
                        backgroundColor: color.primaryColor,
                    },
                }}
            />
        </TopTab.Navigator>
    );
};

export default Excercise;
