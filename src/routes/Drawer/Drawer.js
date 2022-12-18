import { View, Text } from 'react-native';
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

const DrawerSlide = createDrawerNavigator();

import Running from '../../screens/running-screens/Running';

import CustomDrawer from './CustomDrawer';
import BottomTabNavigator from '../BottomTabNavigator';
import color from '../../constants/colors/color';
import WeightTabNavigator from './weight-tab/WeightTabNavigator';

const Drawer = (props) => {
    // console.log(props.route.params.screenName, " with route");
    return (
        <DrawerSlide.Navigator
            // initialRouteName={props.route.params.screenName}
            screenOptions={{
                drawerStyle: { width: '80%' },
                headerShown: false,
            }}
            defaultStatus="closed"
            useLegacyImplementation={true}
            drawerContent={() => {
                return <CustomDrawer />;
            }}
        >
            <DrawerSlide.Screen
                name="BottomTab"
                component={BottomTabNavigator}
                initialParams={{ nextScreen: props.route.params.screenName }}
            />

            {/* <DrawerSlide.Screen name="Weight" component={WeightTabNavigator} /> */}
            {/* <DrawerSlide.Screen
                name="Running"
                component={Running}
                options={{
                    headerShown: true,
                    title: "Running",
                    headerStyle: {
                        backgroundColor: color.primaryColor,
                    },
                    headerTintColor: color.secondaryColor,
                    headerTitleAlign: "center",
                    headerShadowVisible: false,
                }}
            /> */}

            {/* <DrawerSlide.Screen name="Article" component={Running} /> */}
        </DrawerSlide.Navigator>
    );
};

export default Drawer;
