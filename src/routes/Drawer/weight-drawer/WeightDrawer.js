import { View, Text } from 'react-native';
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

const DrawerSilde = createDrawerNavigator();

import CustomDrawer from '../CustomDrawer';
import Running from '../../../screens/running-screens/Running';
import fonts from '../../../constants/font-layout/font';
import color from '../../../constants/colors/color';

const BottomTabNavigator = () => {
    return <View />;
};

const WeightDrawer = () => {
    return (
        <DrawerSilde.Navigator
            screenOptions={{
                drawerStyle: { width: '80%' },
                headerShown: false,
            }}
            drawerContent={() => {
                return <CustomDrawer />;
            }}
        >
            <DrawerSilde.Screen />
            <DrawerSlide.Screen
                name="Feed"
                component={Running}
                options={{
                    headerShown: true,
                    title: 'Running',
                    headerStyle: {
                        backgroundColor: color.primaryColor,
                    },
                    headerTintColor: color.secondaryColor,
                    headerTitleAlign: 'center',
                    headerShadowVisible: false,
                }}
            />
        </DrawerSilde.Navigator>
    );
};

export default WeightDrawer;
