import * as React from 'react';
import Svg, { G, Text, TSpan, Path } from 'react-native-svg';

const SvgMapMeter = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={250}
        height={320}
        {...props}
        viewBox="0 0 250 320"
    >
        <G data-name="Group 1563">
            <Text
                transform="translate(95.238 18)"
                fill="#707070"
                fontSize={18}
                fontFamily="Quicksand-Bold, Quicksand"
                fontWeight={700}
            >
                <TSpan x={0} y={0}>
                    {'Length'}
                </TSpan>
            </Text>
            <G
                data-name="Group 1049"
                fill="#707070"
                fontSize={16}
                fontFamily="Quicksand-Bold, Quicksand"
                fontWeight={700}
            >
                <Text data-name="Min 50" transform="translate(34.524 316)">
                    <TSpan x={0} y={0}>
                        {'Min 50'}
                    </TSpan>
                </Text>
                <Text data-name="Max 156" transform="translate(150 316)">
                    <TSpan x={0} y={0}>
                        {'Max 156'}
                    </TSpan>
                </Text>
            </G>
            <G data-name="Group 1059" fill="#707070">
                <Text
                    data-name={250.2}
                    transform="translate(48.81 168.905)"
                    fontSize={59}
                    fontFamily="Quicksand-Bold, Quicksand"
                    fontWeight={700}
                >
                    <TSpan x={0} y={0}>
                        {'250.2'}
                    </TSpan>
                </Text>
                <Text
                    transform="translate(108.334 209.143)"
                    fontSize={28}
                    fontFamily="Quicksand-Regular, Quicksand"
                >
                    <TSpan x={0} y={0}>
                        {'km'}
                    </TSpan>
                </Text>
            </G>
            <Path
                data-name="Path 735"
                d="M0 162.995a125 125 0 1 0 125.09-125.09A124.875 124.875 0 0 0 0 162.995Zm13.718 0A111.282 111.282 0 1 0 125.09 51.623 111.278 111.278 0 0 0 13.718 162.995Z"
                fill="#f68d5f"
                fillRule="evenodd"
            />
        </G>
    </Svg>
);

export default SvgMapMeter;
