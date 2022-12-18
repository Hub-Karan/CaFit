import { View, Text, StyleSheet, TouchableNativeFeedback } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

import SvgRunning from '../../../assets/icons/svg-components/SvgRunning';
import Fork from '../../../assets/icons/svg-components/Fork';
import SvgHome from '../../../assets/icons/svg-components/SvgHome';
import SvgMeter from '../../../assets/icons/svg-components/SvgMeter';
import SvgMore from '../../../assets/icons/svg-components/SvgMore';
import color from '../../../constants/colors/color';

import { NavigationRef } from '../../../constants/Ref';

const CustomTabItem = (props) => {
    return (
        <TouchableNativeFeedback onPress={() => props.onPress()}>
            <View style={Styles.customTabItemContainer}>
                {props.svgComponent}
            </View>
        </TouchableNativeFeedback>
    );
};

const CustomTab = (props) => {
    // console.log(props, "custom navigation tab");
    const { navigation } = props;
    const currentTabScreen = props.currentTabScreen;

    const currentRoute = NavigationRef.current.getCurrentRoute().name;

    console.log(currentRoute, 'current tab Route');

    console.log(currentTabScreen, 'current Tab screen with route');

    if (
        (currentRoute === 'Drawer' && currentTabScreen === 'MealPlan') ||
        (currentRoute === 'MealPlan' && currentTabScreen === 'MealPlan')
    ) {
        return null;
    }

    return (
        <View style={Styles.customTabContainer}>
            <CustomTabItem
                svgComponent={
                    <SvgRunning
                        color={
                            currentRoute === 'Running' ||
                            currentRoute === 'RunningScreen' ||
                            (currentRoute === 'Drawer' &&
                                currentTabScreen === 'Running')
                                ? color.primaryColor
                                : undefined
                        }
                    />
                }
                onPress={() => navigation.navigate('Running')}
            />
            <CustomTabItem
                svgComponent={
                    <Fork
                        color={
                            currentRoute === 'MealPlan' ||
                            currentRoute === 'Water' ||
                            currentRoute === 'Food' ||
                            currentRoute === 'WaterSetting' ||
                            (currentRoute === 'Drawer' &&
                                currentTabScreen === 'MealPlan')
                                ? color.primaryColor
                                : undefined
                        }
                    />
                }
                onPress={() => navigation.navigate('MealPlan')}
            />
            <CustomTabItem
                svgComponent={<SvgHome />}
                onPress={() => navigation.navigate('Menu')}
            />
            <CustomTabItem
                svgComponent={
                    <SvgMeter
                        color={
                            currentRoute === 'Weight' ||
                            (currentRoute === 'Drawer' &&
                                currentTabScreen === 'Weight')
                                ? color.primaryColor
                                : undefined
                        }
                    />
                }
                onPress={() => navigation.navigate('Weight')}
            />
            <CustomTabItem
                svgComponent={
                    <SvgMore
                        color={
                            currentRoute === 'Setting' ||
                            currentRoute === 'SettingScreen' ||
                            currentRoute === 'SettingLang' ||
                            currentRoute === 'SettingSocial' ||
                            (currentRoute === 'Drawer' &&
                                currentTabScreen === 'Setting')
                                ? color.primaryColor
                                : undefined
                        }
                    />
                }
                onPress={() => navigation.navigate('Setting')}
            />
        </View>
    );
};

const Styles = StyleSheet.create({
    customTabContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        borderTopWidth: 0.2,
        backgroundColor: color.secondaryColor,
    },
    customTabItemContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
    },
});

export default CustomTab;
