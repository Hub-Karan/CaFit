import { View, Text, Switch, StyleSheet } from 'react-native';
import React, { useState } from 'react';

// CONSTANT
import color from '../constants/colors/color';

const CustomSwitch = (props) => {
    const [isEnabled, setIsEnabled] = useState(false);

    const toggleSwitch = () => {
        setIsEnabled((prevState) => {
            return !prevState;
        });
    };

    return (
        <View style={Styles.customSwitchContainer}>
            <View style={Styles.customHeaderContainer}>
                <Text style={Styles.customHeaderText}>{props.title}</Text>
                <Text style={Styles.customParaText}>{props.text}</Text>
            </View>
            <View style={Styles.switchBarContainer}>
                <Switch
                    trackColor={{
                        false: 'lightgrey',
                        true: color.primaryColor,
                    }}
                    thumbColor={
                        isEnabled ? color.secondaryColor : color.primaryColor
                    }
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                />
            </View>
        </View>
    );
};

const Styles = StyleSheet.create({
    customSwitchContainer: {
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 27,
    },
    customHeaderContainer: {
        paddingRight: 40,
    },
    customHeaderText: {
        fontSize: 20,
        fontFamily: 'Quicksand-Bold',
        marginBottom: 8,
        color: color.textGrey,
    },
    customParaText: {
        fontSize: 16,
        color: color.textGrey,
    },
    switchBarContainer: {
        transform: [{ scaleX: 1.8 }, { scaleY: 1.8 }],
    },
});

export default CustomSwitch;
