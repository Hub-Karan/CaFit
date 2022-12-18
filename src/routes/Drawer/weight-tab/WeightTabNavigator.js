import { View, Text } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Menu from '../../../screens/menu-screens/Menu';
import Workout from '../../../screens/workout-screens/Workout';
import WorkoutSession from '../../../screens/workout-screens/WorkoutSession';
import ExcerciseDetailsScreen from '../../../screens/workout-screens/ExcerciseDetailsScreen';
import Weight from '../../../screens/weight/Weight';
import Yoga from '../../../screens/workout-screens/Yoga';

import Running from '../../../assets/icons/svg-components/SvgRunning';

import color from '../../../constants/colors/color';
import fonts from '../../../constants/font-layout/font';

const WeightTabScreen = () => {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Weight"
                component={Weight}
                options={{
                    title: 'Check your progress',
                    headerTitleAlign: 'center',
                    headerShadowVisible: false,
                    headerTintColor: color.secondaryColor,
                    headerStyle: {
                        backgroundColor: color.primaryColor,
                    },
                    headerTitleStyle: {
                        ...fonts.secondaryFont,
                        color: color.secondaryColor,
                    },
                }}
            />
        </Stack.Navigator>
    );
};

const WeightTabNavigator = () => {
    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="WeightTabScreen"
                component={WeightTabScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: (tabInfo) => {
                        return (
                            <Running
                                width={20}
                                height={20}
                                fill={
                                    tabInfo.focused
                                        ? color.primaryColor
                                        : color.secondaryColor
                                }
                            />
                        );
                    },
                    tabBarLabel: () => null,
                }}
            />
            <Tab.Screen
                name="WeightTabScreen2"
                component={WeightTabScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: (tabInfo) => {
                        return (
                            <Running
                                width={20}
                                height={20}
                                fill={
                                    tabInfo.focused
                                        ? color.primaryColor
                                        : color.secondaryColor
                                }
                            />
                        );
                    },
                    tabBarLabel: () => null,
                }}
            />
        </Tab.Navigator>
    );
};

export default WeightTabNavigator;
