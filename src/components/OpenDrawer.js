import { View, Text, TouchableNativeFeedback } from 'react-native';
import React from 'react';

// SVG
import SvgHamburger from '../assets/icons/svg-components/SvgHamburger';
import { useNavigation } from '@react-navigation/native';

// COMPONENT
import HeaderLeft from './HeaderLeft';

// CONSTANT
import color from '../constants/colors/color';

const OpenDrawer = (props) => {
    const navigation = useNavigation();

    return (
        <TouchableNativeFeedback
            style={{ height: '100%' }}
            onPress={() => navigation.openDrawer()}
        >
            <View style={{ marginLeft: 10, height: '100%' }}>
                <SvgHamburger />
            </View>
        </TouchableNativeFeedback>
    );
};

export const DrawerNBack = (props) => {
    const navigation = useNavigation();

    return (
        <View
            style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <OpenDrawer />
            <HeaderLeft fill={color.secondaryColor} />
        </View>
    );
};

export default OpenDrawer;
