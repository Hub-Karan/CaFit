import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';

// CONSTANT
import fonts from '../constants/font-layout/font';
import color from '../constants/colors/color';

const ExcerciseList = (props) => {
    return (
        <View style={Styles.excerciseDetailsContainer}>
            <View style={Styles.excerciseItemContainer}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <View style={Styles.outsideCircle}>
                        <View style={Styles.insideCircle}>
                            <Text
                                style={{
                                    color: 'white',
                                    ...fonts.regularBoldFont4x,
                                }}
                            >
                                {props.excerciseNo}
                            </Text>
                        </View>
                    </View>
                    <View>
                        <Text
                            style={{
                                ...fonts.regularBoldFont4x,
                                color: color.textGrey,
                            }}
                        >
                            {props.excerciseName}
                        </Text>
                        <Text
                            style={{
                                ...fonts.regularBoldFont,
                                color: color.textGrey,
                            }}
                        >
                            {props.excerciseTime}
                        </Text>
                    </View>
                </View>
            </View>
            <View>
                <Image source={require('../assets/images/tooltip.png')} />
            </View>
        </View>
    );
};

const Styles = StyleSheet.create({
    excerciseDetailsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginVertical: 10,
        alignItems: 'center',
        marginVertical: 15,
    },
    outsideCircle: {
        height: 44,
        width: 44,
        backgroundColor: 'lightgrey',
        borderRadius: 44 / 2,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 3,
        padding: 10,
        marginRight: 10,
    },
    insideCircle: {
        height: 33,
        width: 33,
        borderRadius: 33 / 2,
        backgroundColor: 'grey',
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default ExcerciseList;
