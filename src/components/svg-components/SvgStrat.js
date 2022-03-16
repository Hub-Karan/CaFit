import * as React from "react";
import Svg, {
    Defs,
    LinearGradient,
    Stop,
    G,
    Path,
    Text,
    TSpan,
} from "react-native-svg";

const SvgStrat = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={307}
        height={270}
        {...props}
        viewBox="0 0 307 270"
    >
        <Defs>
            <LinearGradient
                id="a"
                x1={0.5}
                x2={0.5}
                y2={1}
                gradientUnits="objectBoundingBox"
            >
                <Stop offset={0} stopColor="#ccf2f2" />
                <Stop offset={1} stopColor="#d5fefe" stopOpacity={0.031} />
            </LinearGradient>
            <LinearGradient
                id="b"
                x1={0.5}
                x2={0.5}
                y2={1}
                gradientUnits="objectBoundingBox"
            >
                <Stop offset={0} stopColor="#ffc4ab" />
                <Stop offset={1} stopColor="#ff9b70" stopOpacity={0} />
            </LinearGradient>
        </Defs>
        <G data-name="Group 1769">
            <Path
                data-name="Path 780"
                d="M875.354 2640.322h-24.2l-31.259 5.868-38.989 23.716-27.561-3.423-48.736 11-44.367-1.467-32.939 5.525v162.039h248.051Z"
                transform="translate(-597.954 -2591)"
                fill="url(#a)"
            />
            <G data-name="Group 265" opacity={0.196}>
                <G
                    data-name="Group 264"
                    fill="none"
                    stroke="#cfdce6"
                    strokeMiterlimit={10}
                    strokeWidth={0.851}
                >
                    <Path data-name="Line 49" d="M36.844 217.6h230.807" />
                    <Path data-name="Line 50" d="M36.844 182.5h230.807" />
                    <Path data-name="Line 51" d="M36.844 147.4h230.807" />
                    <Path data-name="Line 52" d="M36.844 112.444h230.807" />
                    <Path data-name="Line 53" d="M36.844 77.344h230.807" />
                    <Path data-name="Line 54" d="M36.844 42.244h230.807" />
                </G>
            </G>
            <Path
                data-name="Path 110"
                d="M29.478 42.244V252.7H277.5"
                fill="none"
                stroke="#cfdce6"
                strokeMiterlimit={10}
            />
            <Path
                data-name="Line 55"
                fill="none"
                stroke="#c7c7c7"
                strokeMiterlimit={10}
                strokeWidth={1.802}
                d="M46.811 212.978h-2.6"
            />
            <Path
                data-name="Line 56"
                fill="none"
                stroke="#c7c7c7"
                strokeMiterlimit={10}
                strokeWidth={1.802}
                d="M46.811 197.811h-2.6"
            />
            <Text
                transform="translate(4 24)"
                fill="#fd687d"
                fontSize={12}
                fontFamily="Quicksand-Regular, Quicksand"
            >
                <TSpan x={0} y={0}>
                    {"kcal"}
                </TSpan>
            </Text>
            <G
                data-name="Group 1766"
                fill="#949397"
                fontSize={12}
                fontFamily="Quicksand-Regular, Quicksand"
            >
                <Text data-name={100} transform="translate(0 225)">
                    <TSpan x={0} y={0}>
                        {"100"}
                    </TSpan>
                </Text>
                <Text data-name={200} transform="translate(0 190)">
                    <TSpan x={0} y={0}>
                        {"200"}
                    </TSpan>
                </Text>
                <Text data-name={300} transform="translate(0 155)">
                    <TSpan x={0} y={0}>
                        {"300"}
                    </TSpan>
                </Text>
                <Text data-name={400} transform="translate(0 120)">
                    <TSpan x={0} y={0}>
                        {"400"}
                    </TSpan>
                </Text>
                <Text data-name={500} transform="translate(0 85)">
                    <TSpan x={0} y={0}>
                        {"500"}
                    </TSpan>
                </Text>
                <Text data-name={600} transform="translate(0 50)">
                    <TSpan x={0} y={0}>
                        {"600"}
                    </TSpan>
                </Text>
            </G>
            <Text
                data-name="150 kcal/day"
                transform="translate(97 20)"
                fill="#a4a2aa"
                fontSize={20}
                fontFamily="Quicksand-Regular, Quicksand"
            >
                <TSpan x={0} y={0}>
                    {"150 kcal/day"}
                </TSpan>
            </Text>
            <Text
                data-name={0}
                transform="translate(13 267)"
                fill="#949397"
                fontSize={12}
                fontFamily="Quicksand-Regular, Quicksand"
            >
                <TSpan x={0} y={0}>
                    {"0"}
                </TSpan>
            </Text>
            <G
                data-name="Group 477"
                fontSize={12}
                fontFamily="Quicksand-Regular, Quicksand"
            >
                <Text
                    data-name={5}
                    transform="translate(60 267)"
                    fill="#949397"
                >
                    <TSpan x={0} y={0}>
                        {"5"}
                    </TSpan>
                </Text>
                <Text
                    data-name={10}
                    transform="translate(104 267)"
                    fill="#949397"
                >
                    <TSpan x={0} y={0}>
                        {"10"}
                    </TSpan>
                </Text>
                <Text
                    data-name={15}
                    transform="translate(150 267)"
                    fill="#949397"
                >
                    <TSpan x={0} y={0}>
                        {"15"}
                    </TSpan>
                </Text>
                <Text
                    data-name={20}
                    transform="translate(197 267)"
                    fill="#949397"
                >
                    <TSpan x={0} y={0}>
                        {"20"}
                    </TSpan>
                </Text>
                <Text
                    data-name={30}
                    transform="translate(244 267)"
                    fill="#949397"
                >
                    <TSpan x={0} y={0}>
                        {"30"}
                    </TSpan>
                </Text>
                <Text transform="translate(284 266)" fill="#fd687d">
                    <TSpan x={0} y={0}>
                        {"Day"}
                    </TSpan>
                </Text>
            </G>
            <Text
                transform="translate(286 25)"
                fill="#fd687d"
                fontSize={12}
                fontFamily="Quicksand-Regular, Quicksand"
            >
                <TSpan x={-10.224} y={0}>
                    {"min"}
                </TSpan>
            </Text>
            <G
                data-name="Group 1767"
                fill="#949397"
                fontSize={12}
                fontFamily="Quicksand-Regular, Quicksand"
            >
                <Text data-name={10} transform="translate(292 225)">
                    <TSpan x={-5.568} y={0}>
                        {"10"}
                    </TSpan>
                </Text>
                <Text data-name={20} transform="translate(292 190)">
                    <TSpan x={-6.972} y={0}>
                        {"20"}
                    </TSpan>
                </Text>
                <Text data-name={30} transform="translate(292 154)">
                    <TSpan x={-6.69} y={0}>
                        {"30"}
                    </TSpan>
                </Text>
                <Text data-name={40} transform="translate(292 119)">
                    <TSpan x={-6.906} y={0}>
                        {"40"}
                    </TSpan>
                </Text>
                <Text data-name={60} transform="translate(292 48)">
                    <TSpan x={-6.792} y={0}>
                        {"60"}
                    </TSpan>
                </Text>
                <Text data-name={50} transform="translate(292 83)">
                    <TSpan x={-6.864} y={0}>
                        {"50"}
                    </TSpan>
                </Text>
            </G>
            <Path
                data-name="Path 776"
                d="m64.277 157.14 41.191-48.83 44.567 11.723h-3.474l42.354-31.425 40.515-12.119 47.97-1.166v177.374H28.163l2.078-87.036Z"
                fill="#fff"
            />
            <Path
                data-name="Path 778"
                d="m29.866 164.688 32.974-8.591 42.747-47.979 40.9 11.655 42.456-31.875 40.591-12.574H277.5"
                fill="none"
                stroke="#f68d5f"
            />
            <Path
                data-name="Line 262"
                fill="none"
                stroke="#cfdce6"
                d="M277.5 252.5v-214"
            />
            <Path
                data-name="Path 781"
                d="m28.3 90.543 33.945-5.525 44.375 1.467 48.745-11 27.566 3.423 39-23.716 31.264-5.868h24.2"
                fill="none"
                stroke="#39d3d3"
                opacity={0.8}
            />
            <Path
                data-name="Path 782"
                d="m659.518 2732.417 43.115-47.633 40.9 11.476 41.634-31.531 41.556-13.007h47.357l1.32 176.5H626.163l1.115-87.138Z"
                transform="translate(-597 -2576)"
                fill="url(#b)"
            />
        </G>
    </Svg>
);

export default SvgStrat;
