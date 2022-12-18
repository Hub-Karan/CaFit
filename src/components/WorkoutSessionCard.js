import { View, Text, TouchableOpacity } from 'react-native';
import React, { useState, useRef } from 'react';
import Video from 'react-native-video';

// CONSTANT
import color from '../constants/colors/color';
import fonts from '../constants/font-layout/font';

// SVG
import Dot from '../assets/svg/dot.svg';
import PlayButton from '../assets/svg/play-button.svg';

const WorkoutSessionCard = () => {
    const [paused, setPaused] = useState(true);

    return (
        <View style={{ height: 300 }}>
            <View style={{ flex: 0.8 }}>
                <Video
                    source={{
                        uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
                    }}
                    style={{ flex: 1 }}
                    paused={paused}
                    poster="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/English_Cocker_Spaniel_4.jpg/800px-English_Cocker_Spaniel_4.jpg"
                    posterResizeMode="cover"
                    resizeMode="cover"
                />
                <View
                    style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        position: 'absolute',
                        top: 100,
                        left: 170,
                    }}
                >
                    {paused ? (
                        <View
                            style={{
                                backgroundColor: color.textGrey,
                                borderRadius: 50,
                            }}
                        >
                            <TouchableOpacity
                                onPress={() => setPaused(!paused)}
                            >
                                <PlayButton width={60} height={60} />
                            </TouchableOpacity>
                        </View>
                    ) : (
                        <View
                            style={{ flex: 1, width: '100%', height: '100%' }}
                        >
                            <TouchableOpacity
                                onPress={() => setPaused(!paused)}
                            >
                                <PlayButton
                                    style={{ opacity: 0 }}
                                    width={300}
                                    height={300}
                                />
                            </TouchableOpacity>
                        </View>
                    )}
                </View>
            </View>
            <View
                style={{
                    flex: 0.2,
                    backgroundColor: color.secondaryColor,
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexDirection: 'row',
                    paddingHorizontal: 20,
                }}
            >
                <View>
                    <Text
                        style={{
                            ...fonts.secondaryFont,
                            color: color.textGrey,
                        }}
                    >
                        Push-Up
                    </Text>
                </View>
                <View>
                    <TouchableOpacity>
                        <Dot width={40} height={40} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default WorkoutSessionCard;
