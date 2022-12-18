import {
    View,
    Text,
    StyleSheet,
    FlatList,
    useWindowDimensions,
    Dimensions,
    TouchableNativeFeedback,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import { useRoute } from '@react-navigation/native';

// CONSTANT
import color from '../../constants/colors/color';
import fonts from '../../constants/font-layout/font';

// SVG
import Tick from '../../assets/icons/svg-components/Tick';

const fitnessLevelData = [
    {
        level: 'Begineer',
        levelDesc: 'You are new to fitness training',
    },
    {
        level: 'Intermediate',
        levelDesc: 'You have beeen training regulary',
    },
    {
        level: 'Advanced',
        levelDesc: 'You are fit and ready for intensive workout plan',
    },
];

const ProfileFItnessLevel = () => {
    const { width: windowWidth, height: windowHeight } = useWindowDimensions();
    const route = useRoute();

    console.log(route.params.levelState, 'level state route');

    const [levelState, setLevelState] = useState(0);

    const renderItem = ({ item, index }) => {
        return (
            <TouchableNativeFeedback
                onPress={() => [
                    route.params.getStateFromChild(item.level),
                    setLevelState(index),
                ]}
            >
                <View
                    style={{
                        paddingBottom: 16,
                        borderBottomWidth: 0.8,

                        paddingTop: index !== 0 ? 30 : null,
                    }}
                >
                    <View>
                        <Text
                            style={{
                                ...fonts.secondaryFont,
                                color: color.textGrey,
                                paddingBottom: 5,
                            }}
                        >
                            {item.level}
                        </Text>
                    </View>
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            flex: 1,
                        }}
                    >
                        <View style={{ flex: 0.8 }}>
                            <Text
                                style={{
                                    ...fonts.regularFont2x,
                                    color:
                                        levelState === index
                                            ? color.primaryColor
                                            : color.textGrey,
                                }}
                            >
                                {item.levelDesc}
                            </Text>
                        </View>
                        {levelState === index ? (
                            <View style={{ flex: 0.2, alignItems: 'flex-end' }}>
                                <Tick
                                    width={20}
                                    height={20}
                                    fill={color.primaryColor}
                                />
                            </View>
                        ) : null}
                    </View>
                </View>
            </TouchableNativeFeedback>
        );
    };

    return (
        <View style={Styles.profileFItnessLevelContainer}>
            <FlatList
                contentContainerStyle={{
                    backgroundColor: color.secondaryColor,
                    flexGrow: 1,
                }}
                style={Styles.flatListContainer}
                data={fitnessLevelData}
                renderItem={renderItem}
            />
        </View>
    );
};

const Styles = StyleSheet.create({
    profileFItnessLevelContainer: {
        backgroundColor: color.secondaryColor,
        flex: 1,
    },
    flatListContainer: {
        flex: 1,
        paddingHorizontal: 24,
        paddingVertical: 41,
    },
});

export default ProfileFItnessLevel;
