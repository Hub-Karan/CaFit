import { View, Text } from 'react-native';
import React from 'react';

// CONSTANT
import color from '../constants/colors/color';
import fonts from '../constants/font-layout/font';

// SVG
import SvgDensityMeter from '../assets/icons/svg-components/SvgDensityMeter';
import SvgSpeedMeter from '../assets/icons/svg-components/SvgSpeedMeter';
import SvgMapMeter from '../assets/icons/svg-components/SvgMapMeter';
import SvgHeartMeter from '../assets/icons/svg-components/SvgHeartMeter';
import SvgDensityLine from '../assets/icons/svg-components/SvgDensityLine';
import SvgSpeedLine from '../assets/icons/svg-components/SvgSpeedLine';
import SvgMapLine from '../assets/icons/svg-components/SvgMapLine';
import SvgHeartLine from '../assets/icons/svg-components/SvgHeartLine';
import SvgClockMeter from '../assets/icons/svg-components/SvgClockMeter';

const RunningTabSection = (props) => {
    const componentObj = {
        Density: <SvgDensityMeter />,
        Speed: <SvgSpeedMeter />,
        Length: <SvgMapMeter />,
        Heart: <SvgHeartMeter />,
        Clock: <SvgClockMeter />,
    };

    return (
        <>
            {props.isDefault && (
                <Text
                    style={{
                        ...fonts.regularBoldFont4x,
                        textAlign: 'center',
                        justifyContent: 'center',
                        flex: props.isDefault ? 0.4 : null,
                        color: color.textGrey,
                        // marginTop: props.isDefault ? null : 30,
                    }}
                >
                    {props.title}
                </Text>
            )}

            {props.svgComponent && (
                <View style={{ alignItems: 'center' }}>
                    {componentObj[props.title]}
                </View>
            )}

            {props.isDefault && (
                <View
                    style={{
                        borderWidth: 10,
                        borderColor: color.primaryColor,
                        width: 250,
                        height: 250,
                        borderRadius: 250 / 2,
                        justifyContent: 'flex-end',
                        alignItems: 'center',
                        alignSelf: 'center',
                        position: 'relative',
                    }}
                >
                    <View style={{ position: 'absolute', top: 50 }}>
                        <Text
                            style={{
                                ...fonts.largeFont69,
                                color: color.textGrey,
                            }}
                        >
                            15:10
                        </Text>
                        <Text
                            style={{
                                ...fonts.mediumFontXs,
                                textAlign: 'center',
                            }}
                        ></Text>
                    </View>
                </View>
            )}
        </>
    );
};

export const RunningLineSection = (props) => {
    const componentObj = {
        Density: <SvgDensityLine width={'100%'} />,
        Speed: <SvgSpeedLine width={'100%'} />,
        Length: <SvgMapLine width={'100%'} />,
        Heart: <SvgHeartLine width={'100%'} />,
    };

    return <>{componentObj[props.title]}</>;
};

export default RunningTabSection;
