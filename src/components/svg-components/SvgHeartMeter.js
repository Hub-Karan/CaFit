import * as React from "react";
import Svg, { G, Text, TSpan, Path } from "react-native-svg";

const SvgHeartMeter = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={250}
        height={320}
        {...props}
        viewBox="0 0 250 320"
    >
        <G data-name="Group 1769">
            <Text
                transform="translate(95.238 18)"
                fill="#707070"
                fontSize={18}
                fontFamily="Quicksand-Bold, Quicksand"
                fontWeight={700}
            >
                <TSpan x={0} y={0}>
                    {"Heart"}
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
                        {"Min 50"}
                    </TSpan>
                </Text>
                <Text data-name="Max 156" transform="translate(150 316)">
                    <TSpan x={0} y={0}>
                        {"Max 156"}
                    </TSpan>
                </Text>
            </G>
            <Path
                data-name="Path 735"
                d="M125.09 287.905A125 125 0 1 0 0 162.815a124.875 124.875 0 0 0 125.09 125.09Zm0-13.718A111.282 111.282 0 1 0 13.718 162.815 111.278 111.278 0 0 0 125.09 274.187Z"
                fill="#e6e6e6"
                fillRule="evenodd"
            />
            <G data-name="Group 1638">
                <G data-name="Group 1059" fill="#707070">
                    <Text
                        data-name={100.2}
                        transform="translate(48.81 168.905)"
                        fontSize={59}
                        fontFamily="Quicksand-Bold, Quicksand"
                        fontWeight={700}
                    >
                        <TSpan x={0} y={0}>
                            {"100.2"}
                        </TSpan>
                    </Text>
                    <Text
                        transform="translate(91.667 208.143)"
                        fontSize={27}
                        fontFamily="Quicksand-Regular, Quicksand"
                        opacity={0.75}
                    >
                        <TSpan x={0} y={0}>
                            {"bpm"}
                        </TSpan>
                    </Text>
                </G>
                <G data-name="Group 1639">
                    <G data-name="Group 1641" opacity={0.5}>
                        <G
                            data-name="Group 1640"
                            fill="#ff9b70"
                            fillRule="evenodd"
                        >
                            <Path
                                data-name="Path 736"
                                d="M125.09 63.536a3.61 3.61 0 1 0-3.61-3.61 3.621 3.621 0 0 0 3.61 3.61Z"
                            />
                            <Path
                                data-name="Path 737"
                                d="M150.722 66.966a3.427 3.427 0 0 0 4.332-2.527 3.546 3.546 0 1 0-6.859-1.805 3.814 3.814 0 0 0 2.527 4.332Z"
                            />
                            <Path
                                data-name="Path 738"
                                d="M174.729 76.894a3.581 3.581 0 0 0 4.874-1.264 3.56 3.56 0 1 0-4.874 1.264Z"
                            />
                            <Path
                                data-name="Path 739"
                                d="M195.307 92.598a3.843 3.843 0 0 0 5.054 0 3.843 3.843 0 0 0 0-5.054 3.574 3.574 0 1 0-5.054 5.054Z"
                            />
                            <Path
                                data-name="Path 740"
                                d="M211.191 113.176a3.56 3.56 0 1 0 6.137-3.61 3.708 3.708 0 0 0-4.874-1.264 3.43 3.43 0 0 0-1.264 4.874Z"
                            />
                            <Path
                                data-name="Path 741"
                                d="M221.119 137.183a3.712 3.712 0 0 0 4.332 2.527 3.814 3.814 0 0 0 2.527-4.332 3.56 3.56 0 0 0-4.332-2.527 3.5 3.5 0 0 0-2.527 4.332Z"
                            />
                            <Path
                                data-name="Path 742"
                                d="M224.368 162.814a3.61 3.61 0 1 0 3.61-3.61 3.879 3.879 0 0 0-3.61 3.61Z"
                            />
                            <Path
                                data-name="Path 743"
                                d="M221.119 188.627a3.546 3.546 0 1 0 4.332-2.527 3.356 3.356 0 0 0-4.332 2.527Z"
                            />
                            <Path
                                data-name="Path 744"
                                d="M211.192 212.453a3.541 3.541 0 0 0 1.264 4.874 3.581 3.581 0 0 0 4.874-1.264 3.756 3.756 0 0 0-1.264-4.874 3.66 3.66 0 0 0-4.874 1.264Z"
                            />
                            <Path
                                data-name="Path 745"
                                d="M195.307 233.212a3.283 3.283 0 0 0 0 4.874 3.49 3.49 0 0 0 5.054 0 3.607 3.607 0 0 0 0-4.874 3.49 3.49 0 0 0-5.054 0Z"
                            />
                            <Path
                                data-name="Path 746"
                                d="M174.729 248.916a3.708 3.708 0 0 0-1.264 4.874 3.56 3.56 0 1 0 6.137-3.61 3.756 3.756 0 0 0-4.874-1.264Z"
                            />
                            <Path
                                data-name="Path 747"
                                d="M150.722 258.843a3.814 3.814 0 0 0-2.527 4.332 3.427 3.427 0 0 0 4.332 2.527 3.647 3.647 0 0 0 2.527-4.332 3.426 3.426 0 0 0-4.332-2.527Z"
                            />
                            <Path
                                data-name="Path 748"
                                d="M125.09 262.273a3.621 3.621 0 0 0-3.61 3.61 3.47 3.47 0 0 0 3.61 3.43 3.521 3.521 0 1 0 0-7.04Z"
                            />
                            <Path
                                data-name="Path 749"
                                d="M99.278 258.843a3.427 3.427 0 0 0-4.332 2.527 3.5 3.5 0 0 0 2.527 4.332 3.427 3.427 0 0 0 4.332-2.527 3.5 3.5 0 0 0-2.527-4.332Z"
                            />
                            <Path
                                data-name="Path 750"
                                d="M75.448 248.916a3.708 3.708 0 0 0-4.874 1.264 3.581 3.581 0 0 0 1.264 4.874 3.756 3.756 0 0 0 4.874-1.264 3.708 3.708 0 0 0-1.264-4.874Z"
                            />
                            <Path
                                data-name="Path 751"
                                d="M54.874 233.212a3.446 3.446 0 1 0 0 4.874 3.607 3.607 0 0 0 0-4.874Z"
                            />
                            <Path
                                data-name="Path 752"
                                d="M38.989 212.453a3.708 3.708 0 0 0-4.874-1.264 3.708 3.708 0 0 0-1.264 4.874 3.5 3.5 0 0 0 4.874 1.264 3.362 3.362 0 0 0 1.264-4.874Z"
                            />
                            <Path
                                data-name="Path 753"
                                d="M29.061 188.627a3.647 3.647 0 0 0-4.332-2.527 3.356 3.356 0 0 0-2.527 4.332 3.814 3.814 0 0 0 4.332 2.527 3.5 3.5 0 0 0 2.527-4.332Z"
                            />
                            <Path
                                data-name="Path 754"
                                d="M25.813 162.814a3.621 3.621 0 0 0-3.61-3.61 3.47 3.47 0 0 0-3.43 3.61 3.588 3.588 0 0 0 3.43 3.61 3.621 3.621 0 0 0 3.61-3.61Z"
                            />
                        </G>
                    </G>
                </G>
                <Path
                    data-name="Path 755"
                    d="M29.061 137.183a3.427 3.427 0 0 0-2.527-4.332 3.647 3.647 0 0 0-4.332 2.527 3.546 3.546 0 1 0 6.859 1.805Z"
                    fill="#eaeaea"
                    fillRule="evenodd"
                />
                <Path
                    data-name="Path 756"
                    d="M38.989 113.176a3.756 3.756 0 0 0-1.264-4.874 3.56 3.56 0 1 0-3.61 6.137 3.362 3.362 0 0 0 4.874-1.264Z"
                    fill="#eaeaea"
                    fillRule="evenodd"
                />
                <Path
                    data-name="Path 757"
                    d="M54.874 92.598a3.49 3.49 0 0 0 0-5.054 3.283 3.283 0 0 0-4.874 0 3.49 3.49 0 0 0 0 5.054 3.282 3.282 0 0 0 4.874 0Z"
                    fill="#eaeaea"
                    fillRule="evenodd"
                />
                <Path
                    data-name="Path 758"
                    d="M75.448 76.894a3.66 3.66 0 0 0 1.264-4.874 3.708 3.708 0 0 0-4.874-1.264 3.541 3.541 0 0 0-1.264 4.874 3.66 3.66 0 0 0 4.874 1.264Z"
                    fill="#eaeaea"
                    fillRule="evenodd"
                />
                <Path
                    data-name="Path 759"
                    d="M99.278 66.966a3.56 3.56 0 0 0 2.527-4.332 3.546 3.546 0 0 0-6.859 1.805 3.647 3.647 0 0 0 4.332 2.527Z"
                    fill="#eaeaea"
                    fillRule="evenodd"
                />
            </G>
            <Path
                data-name="Path 760"
                d="M125.09 51.623a6.859 6.859 0 0 1 0-13.718h.181a125 125 0 0 1-.181 250C56.318 287.905.542 232.49.181 163.898A2.289 2.289 0 0 1 0 162.815a6.859 6.859 0 1 1 13.718 0v.9A111.193 111.193 0 1 0 125.09 51.623Z"
                fill="#f68d5f"
                fillRule="evenodd"
            />
        </G>
    </Svg>
);

export default SvgHeartMeter;
