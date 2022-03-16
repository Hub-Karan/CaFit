import {
    View,
    Text,
    StyleSheet,
    FlatList,
    ScrollView,
    TouchableNativeFeedback,
} from "react-native";
import React, { useState, useEffect } from "react";

import color from "../../constants/colors/color";
import fonts from "../../constants/font-layout/font";
import data, { calendarMonth } from "../../constants/data/calendarData";
import LeftArrow from "../../components/svg-components/LeftArrow";
import RightArrow from "../../components/svg-components/RightArrow";

import { Calendar, CalendarList, Agenda } from "react-native-calendars";

const NoteList = () => {
    return (
        <View style={Styles.noteContainer}>
            <View style={Styles.noteDate}>
                <View style={Styles.noContainer}>
                    <Text
                        style={{
                            ...fonts.regularFontBold2x,
                            color: color.secondaryColor,
                        }}
                    >
                        2
                    </Text>
                </View>
            </View>
            <View style={{ flex: 0.9 }}>
                <Text
                    style={{
                        ...fonts.regularFont2x,
                        color: color.textGrey,
                    }}
                >
                    You excercise 40 minutes a day and five days a week at a
                    certain time, you practise on a regular schedule Changing
                    the schedule will result in diminshed results resulting in
                </Text>
            </View>
        </View>
    );
};

const Schedule = () => {
    // const [dates, setDates] = useState([])
    // const [currentDate, setCurrentDate] = useState(new Date().getDate())
    // const [currentYear, setCurrentYear] = useState(new Date().getFullYear())
    // const [currentMonth, setCurrentMonth] = useState(new Date().getMonth())

    // console.log(currentYear, "year")
    // console.log(currentMonth, "month")

    // useEffect(() => {
    //     let emptyArray = [];
    //     let firstDay = new Date(currentYear, currentMonth, 1).getDate()
    //     let lastDay = new Date(currentYear, currentMonth + 1, 0).getDate()
    //     let previousMonth = []
    //     let prevFirstDay = new Date(currentYear,currentMonth-1)
    //     for (let i = firstDay; i <= lastDay; i++) {
    //         emptyArray.push(i)
    //     }
    //     setDates(emptyArray)

    //     console.log(firstDay);
    //     console.log(lastDay);

    // }, [])

    const months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
    ];
    const Daysname = ["S", "M", "T", "W", "T", "F", "S"];

    const date = new Date();
    const [selectedYear, setYear] = useState(2022);
    const [selectedMonth, setMonth] = useState(date.getMonth());

    const currentDay = new Date(selectedYear, selectedMonth, 1).getDay();

    const [Days, setDays] = useState([]);
    let lastDay = new Date(selectedYear, selectedMonth + 1, 0).getDate();
    const getDays = (data) => {
        let firstDay = new Date(
            selectedYear,
            selectedMonth - data,
            1
        ).getDate();
        let lastDay = new Date(
            selectedYear,
            selectedMonth - data + 1,
            0
        ).getDate();
        return { firstDay, lastDay };
    };

    useEffect(() => {
        const current = getDays(0);
        const previous = getDays(1);
        const next = getDays(-1);
        let previousMonth = Array.from(Array(currentDay), (_, i) => {
            console.log(`currentDay ${currentDay} index : ${i}`);
            return previous.lastDay - i;
        }).reverse();
        // console.log('======================++++++==============');
        // console.log(previousMonth);
        // console.log('====================================');
        let currentMonth = Array.from(
            Array(current.lastDay),
            (_, i) => current.firstDay + i
        );
        let completeDays = previousMonth.concat(currentMonth);
        let remainingDays = 42 - completeDays.length;
        let nextMonth = Array.from(
            Array(remainingDays),
            (_, i) => next.firstDay + i
        );
        setDays(completeDays.concat(nextMonth));
    }, [selectedMonth]);

    const renderItem = ({ item }) => {
        return (
            <View style={[Styles.renderView]}>
                <Text
                    style={{
                        ...fonts.regularFont6x,
                        opacity: 0.8,
                        color: color.textGrey,
                    }}
                >
                    {item.short_name}
                </Text>
            </View>
        );
    };

    const renderDates = ({ item, index: i }) => {
        return (
            <View style={Styles.renderView}>
                <Text
                    style={{
                        ...fonts.regularBoldFont2x,
                        color: color.textGrey,
                        opacity:
                            currentDay <= i && i - currentDay + 1 <= lastDay
                                ? 1
                                : 0.4,
                    }}
                >
                    {item}
                </Text>
            </View>
        );
    };

    const onNext = (data) => {
        if (selectedMonth < 11 && selectedMonth > 0) {
            if (data == "increment") {
                setMonth(selectedMonth + 1);
            } else {
                setMonth(selectedMonth - 1);
            }
        } else if (selectedMonth == 11 && data == "increment") {
            setMonth(0);
            setYear(selectedYear + 1);
        } else if (selectedMonth == 0 && data == "increment") {
            setMonth(selectedMonth + 1);
        } else if (selectedMonth == 0) {
            setYear(selectedYear - 1);
            setMonth(11);
        } else if (selectedMonth == 11) {
            setMonth(selectedMonth - 1);
        }
    };

    return (
        <View style={Styles.scheduleMainContainer}>
            <ScrollView contentContainerStyle={{ paddingHorizontal: 15 }}>
                <View style={Styles.dateFormat}>
                    <View>
                        <Text
                            style={{
                                ...fonts.secondaryFont,
                                color: color.textGrey,
                            }}
                        >
                            {calendarMonth[selectedMonth]}
                        </Text>
                        <Text
                            style={{
                                ...fonts.regularFont2x,
                                color: color.textGrey,
                            }}
                        >
                            {selectedYear}
                        </Text>
                    </View>
                    <View
                        style={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                        }}
                    >
                        <TouchableNativeFeedback onPress={() => onNext()}>
                            <View>
                                <LeftArrow
                                    width={20}
                                    height={20}
                                    fill={color.textGrey}
                                />
                            </View>
                        </TouchableNativeFeedback>
                        <TouchableNativeFeedback
                            onPress={() => onNext("increment")}
                        >
                            <View style={{ marginLeft: 15 }}>
                                <RightArrow
                                    width={20}
                                    height={20}
                                    fill={color.textGrey}
                                />
                            </View>
                        </TouchableNativeFeedback>
                    </View>
                </View>
                <View>
                    <FlatList
                        data={data}
                        renderItem={renderItem}
                        numColumns={7}
                    />
                </View>
                <View>
                    <FlatList
                        data={Days}
                        renderItem={renderDates}
                        numColumns={7}
                    />
                </View>
                <View style={{ paddingHorizontal: 15, marginTop: 15 }}>
                    <Text
                        style={{ ...fonts.primaryFont, color: color.textGrey }}
                    >
                        Note
                    </Text>
                    <NoteList />
                    <NoteList />
                    <NoteList />
                    <NoteList />
                    <NoteList />
                </View>
            </ScrollView>
        </View>
    );
};

const Styles = StyleSheet.create({
    scheduleMainContainer: {
        flex: 1,
        backgroundColor: color.secondaryColor,
        // paddingHorizontal: 15,
    },
    renderView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 10,
    },
    dateFormat: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginVertical: 20,
        paddingHorizontal: 15,
    },
    noContainer: {
        backgroundColor: color.primaryColor,
        width: 30,
        height: 30,
        borderRadius: 30 / 2,
        justifyContent: "center",
        alignItems: "center",
    },
    noteContainer: {
        flex: 1,
        flexDirection: "row",
        marginVertical: 15,
    },
    noteDate: {
        flex: 0.1,
        justifyContent: "flex-start",
        alignItems: "center",
        marginRight: 20,
    },
});

export default Schedule;
