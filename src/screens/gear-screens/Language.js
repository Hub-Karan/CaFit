import { View, Text, TouchableNativeFeedback, StyleSheet } from 'react-native';
import React from 'react';

// CONSTANT
import color from '../../constants/colors/color';
import fonts from '../../constants/font-layout/font';

// SVG
import Tick from '../../assets/icons/svg-components/Tick';

const LanguageList = (props) => {
    return (
        <TouchableNativeFeedback>
            <View style={styles.languageListContainer}>
                <View style={{ flex: 0.8 }}>
                    <Text
                        style={{
                            ...fonts.regularBoldFont4x,
                            color: color.textGrey,
                        }}
                    >
                        {props.language}
                    </Text>
                </View>
                <View style={{ flex: 0.2, alignItems: 'flex-end' }}>
                    <Tick width={20} height={20} fill={'green'} />
                </View>
            </View>
        </TouchableNativeFeedback>
    );
};

const Language = () => {
    return (
        <View
            style={{
                backgroundColor: color.secondaryColor,
                flex: 1,

                padding: 20,
            }}
        >
            <LanguageList language="English" />
            <LanguageList language="French" />
            <LanguageList language="Hindi" />
            <LanguageList language="Germany" />
            <LanguageList language="Russian" />
        </View>
    );
};

const styles = StyleSheet.create({
    languageListContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 20,
        paddingHorizontal: 10,

        marginVertical: 5,
        borderBottomWidth: 1,
        borderColor: '#E6E6E6',
    },
});

export default Language;
