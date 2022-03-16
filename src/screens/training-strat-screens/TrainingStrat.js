import { View, Text, StyleSheet, Dimensions, ScrollView } from "react-native";
import React, { useState, useEffect } from "react";
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart,
} from "react-native-chart-kit";

import color from "../../constants/colors/color";
import fonts from "../../constants/font-layout/font";
import SvgStrat from "../../components/svg-components/SvgStrat";

import data, { calendarMonth } from "../../constants/data/calendarData";
import RightArrows from "../../components/svg-components/RightArrow";
import LeftArrow from "../../components/svg-components/LeftArrow";

const TrainingStrat = () => {
    const todayDate = new Date();
    const [date, setDate] = useState({});

    useEffect(() => {
        const date = todayDate.getDate();
        const day = todayDate.getDay();
        const newDay = data[day].full_name;
        const month = todayDate.getMonth();
        const newMonth = calendarMonth[month];
        setDate({ date, newDay, newMonth });
    }, [data]);

    return (
        <ScrollView>
            <View>
                <View
                    style={{
                        justifyContent: "space-around",
                        alignItems: "center",
                        marginVertical: 10,
                        flexDirection: "row",
                    }}
                >
                    <View style={{ opacity: 0.5 }}>
                        <LeftArrow
                            width={20}
                            height={16}
                            fill={color.textGrey}
                        />
                    </View>
                    <Text
                        style={{
                            ...fonts.secondaryFont,
                            color: color.textGrey,
                        }}
                    >
                        {date.newDay}, {date.newMonth?.slice(0, 3)} {date.date}
                    </Text>
                    <View style={{ opacity: 0.5 }}>
                        <RightArrows
                            width={20}
                            height={16}
                            fill={color.textGrey}
                        />
                    </View>
                </View>
                <View
                    style={{
                        alignItems: "center",
                        justifyContent: "center",
                        marginTop: 20,
                    }}
                >
                    <SvgStrat />
                </View>
                <View
                    style={{
                        paddingHorizontal: 20,
                        marginTop: 15,
                        flexDirection: "row",
                        alignItems: "center",
                    }}
                >
                    <View
                        style={{
                            backgroundColor: "#CDF2F2",
                            width: 10,
                            height: 10,
                            borderRadius: 10 / 2,
                            marginHorizontal: 10,
                        }}
                    ></View>
                    <View>
                        <Text
                            style={{
                                ...fonts.regularFont,
                                color: color.textGrey,
                            }}
                        >
                            Training Time
                        </Text>
                    </View>
                </View>
                <View
                    style={{
                        paddingHorizontal: 20,
                        marginTop: 5,
                        flexDirection: "row",
                        alignItems: "center",
                    }}
                >
                    <View
                        style={{
                            backgroundColor: "#FFC6AD",
                            width: 10,
                            height: 10,
                            borderRadius: 10 / 2,
                            marginHorizontal: 10,
                        }}
                    ></View>
                    <View>
                        <Text
                            style={{
                                ...fonts.regularFont,
                                color: color.textGrey,
                            }}
                        >
                            Energy
                        </Text>
                    </View>
                </View>
                <View style={Styles.trainingStratTextContainer}>
                    <Text
                        style={{
                            ...fonts.regularBoldFont2x,
                            color: color.textGrey,
                            marginVertical: 20,
                        }}
                    >
                        Tips
                    </Text>
                    <Text
                        style={{
                            ...fonts.regularFont2x,
                            color: color.textGrey,
                        }}
                    >
                        "Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium, totam rem
                        aperiam, eaque ipsa quae ab illo inventore veritatis et
                        quasi architecto beatae vitae dicta sunt explicabo. Nemo
                        enim ipsam voluptatem quia voluptas sit aspernatur aut
                        odit aut fugit, sed quia consequuntur magni dolores eos
                        qui ratione voluptatem sequi nesciunt. Neque porro
                        quisquam est, qui dolorem ipsum quia dolor sit amet,
                        consectetur, adipisci velit, sed quia non numquam eius
                        modi tempora incidunt ut labore et dolore magnam aliquam
                        quaerat voluptatem. Ut enim ad minima veniam, quis
                        nostrum exercitationem ullam corporis suscipit
                        laboriosam, nisi ut aliquid ex ea commodi consequatur?
                        Quis autem vel eum iure reprehenderit qui in ea
                        voluptate velit esse quam nihil molestiae consequatur,
                        vel illum qui dolorem eum fugiat quo voluptas nulla
                        pariatur?"
                    </Text>
                </View>
            </View>
        </ScrollView>
    );
};

const Styles = StyleSheet.create({
    trainingStratContainer: {
        backgroundColor: color.secondaryColor,
        flex: 1,
    },
    child1: {
        // backgroundColor:"green",
        flex: 2,
    },
    child2: {
        backgroundColor: "blue",
        flex: 1,
    },
    trainingStratTextContainer: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        justifyContent: "center",
        // alignItems: "center",
    },
});

export default TrainingStrat;
