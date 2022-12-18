import {
    View,
    Text,
    StyleSheet,
    TouchableNativeFeedback,
    FlatList,
    Alert,
} from 'react-native';
import React, { useState } from 'react';

// COMPONENT
import CustomButton from '../../components/CustomButton';
import FitnessClass from '../../components/FitnessClass';

// CONSTANT
import data from '../../constants/data/fitnessLevelData';
import color from '../../constants/colors/color';
import fonts from '../../constants/font-layout/font';

// SVG
import Tick from '../../assets/icons/svg-components/Tick';

const FitnessLevel = ({ navigation }) => {
    const [levelSelect, setLevelSelect] = useState({});

    const handleSelectItem = (index) => {
        setLevelSelect({ id: index, isSelect: true });
    };

    const renderItem = ({ item, index }) => {
        return (
            <TouchableNativeFeedback
                onPress={() => {
                    handleSelectItem(index);
                }}
            >
                {index === levelSelect.id ? (
                    <View style={Styles.fitnessSelectContainer}>
                        <View>
                            <Text
                                style={{
                                    ...fonts.secondaryFont,
                                    color: color.textGrey,
                                }}
                            >
                                {item.level}
                            </Text>
                        </View>
                        <View>
                            <View style={Styles.fitnessList}>
                                <View style={{ flex: 0.9 }}>
                                    <Text
                                        style={{
                                            ...fonts.regularFont4x,
                                            color: color.textGrey,
                                            paddingLeft: 10,
                                            paddingRight: 40,
                                        }}
                                    >
                                        {item.title}
                                    </Text>
                                </View>
                                <View style={{ flex: 0.1 }}>
                                    <Tick
                                        width={20}
                                        height={20}
                                        fill={color.primaryColor}
                                    />
                                </View>
                            </View>
                        </View>
                    </View>
                ) : (
                    <View style={Styles.fitnessSelectContainer}>
                        <View>
                            <Text
                                style={{
                                    ...fonts.secondaryFont,
                                    color: color.textGrey,
                                }}
                            >
                                {item.level}
                            </Text>
                        </View>
                        <View>
                            <View style={Styles.fitnessNotSelectList}>
                                <Text
                                    style={{
                                        ...fonts.regularFont4x,
                                        color: color.textGrey,
                                        paddingLeft: 10,
                                        paddingRight: 40,
                                    }}
                                >
                                    {item.title}
                                </Text>
                            </View>
                        </View>
                    </View>
                )}
            </TouchableNativeFeedback>
        );
    };

    return (
        <View style={Styles.fitnessLevelContainer}>
            <View style={Styles.fitnessHeaderContainer}>
                <View style={Styles.fitnessTextView}>
                    <Text
                        style={{ ...fonts.primaryFont, color: color.textGrey }}
                    >
                        Select your fitness level
                    </Text>
                </View>
            </View>
            <View style={Styles.child2}>
                <FlatList data={data} renderItem={renderItem} />
            </View>
            <View style={Styles.fitnessBottomContainer}>
                <View style={Styles.customBtnContainer}>
                    <CustomButton
                        title="Next"
                        color="white"
                        onPress={() => navigation.navigate('PersonalDetails')}
                    />
                </View>
                <View style={Styles.dotContainer}>
                    <View style={Styles.dot}></View>
                    <View style={Styles.activeDot}></View>
                    <View style={Styles.dot}></View>
                </View>
            </View>
        </View>
    );
};

const Styles = StyleSheet.create({
    fitnessLevelContainer: {
        backgroundColor: color.secondaryColor,
        flex: 1,
    },
    fitnessHeaderContainer: {
        flex: 1,

        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    fitnessTextView: {
        marginTop: 12,
    },
    child2: {
        flex: 5,
        // justifyContent: "flex-start",
    },
    fitnessSelectContainer: {
        paddingHorizontal: 22,
        marginVertical: 32,
    },
    fitnessBottomContainer: {
        flex: 1.2,
        justifyContent: 'flex-end',
    },
    fitnessList: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        flex: 1,
    },
    fitnessNotSelectList: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    customBtnContainer: {
        backgroundColor: color.primaryColor,
        width: '90%',
        borderRadius: 30,
        alignSelf: 'center',
        overflow: 'hidden',
    },
    dotContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 10,
    },
    dot: {
        backgroundColor: color.lightGrey,
        height: 12,
        width: 12,
        borderRadius: 15 / 2,
        marginHorizontal: 10,
        opacity: 0.5,
    },
    activeDot: {
        backgroundColor: color.primaryColor,
        height: 12,
        width: 12,
        borderRadius: 15 / 2,
        marginHorizontal: 10,
        opacity: 1,
    },
});

export default FitnessLevel;
