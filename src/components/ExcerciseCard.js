import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

// CONSTANT
import fonts from '../constants/font-layout/font';
import color from '../constants/colors/color';

const ExcerciseCard = (props) => {
    return (
        <View style={Styles.fitnessCard}>
            <View style={Styles.fitnessCardTextContainer}>
                <Text
                    style={{
                        ...Styles.fitnessCardText,
                        ...fonts.regularBoldFont2x,
                    }}
                >
                    {props.text}
                </Text>
            </View>
        </View>
    );
};

const Styles = StyleSheet.create({
    fitnessCard: {
        backgroundColor: color.grey,
        height: '70%',
        width: '70%',
        borderRadius: 10,
        elevation: 10,
        position: 'relative',
    },
    fitnessCardTextContainer: {
        position: 'absolute',
        bottom: 15,
        left: 15,
    },
    fitnessCardText: {
        color: color.secondaryColor,
    },
});

export default ExcerciseCard;
