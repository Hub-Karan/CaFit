Skip to content
Search or jump to…
Pull requests
Issues
Marketplace
Explore

@Rehan7A
Rehan7A
    /
    Cafit
Private
Code
Issues
Pull requests
Actions
Projects
Security
Insights
Settings
Cafit / src / screens / Schedule.js /
@Rehan7A
Rehan7A changes added
Latest commit 20b372e on Jun 22, 2021
History
2 contributors
@Rehan7A @parthbhinde
217 lines(177 sloc)  7.92 KB

import React, { useState, useEffect, useRef, useCallback, useMemo } from "react"
import { View, Text, StyleSheet, TextInput, ScrollView, Dimensions, Image, Button, Animated, Easing, FlatList, Pressable, TouchableWithoutFeedback, ActivityIndicator } from "react-native"
import Colors from "../constants/colors/color"
import fonts from "../constants/fonts/fonts"
import { defaultStyles } from "../constants/styles/defaultStyle"
import Header from "../components/Headers/header"
import Next from "../assets/svg/Next"
import { getTranslation } from "../Router/Localization"


const spacing = 20



const Schedule = () => {
    const { t } = getTranslation()
    const months = ["ss_jan", "ss_feb", "ss_mar", "ss_apr", "ss_may", "ss_jun", "ss_jul", "ss_aug", "ss_sep", "ss_oct", "ss_nov", "ss_dec"]
    const Daysname = ["S", "M", "T", "W", "T", "F", "S"];

    const date = new Date();
    const [selectedYear, setYear] = useState(2021);
    const [selectedMonth, setMonth] = useState(date.getMonth());

    const currentDay = new Date(selectedYear, selectedMonth, 1).getDay();

    const [Days, setDays] = useState([]);
    let lastDay = new Date(selectedYear, selectedMonth + 1, 0).getDate();
    const getDays = (data) => {
        let firstDay = new Date(selectedYear, selectedMonth - data, 1).getDate();
        let lastDay = new Date(selectedYear, selectedMonth - data + 1, 0).getDate();
        return { firstDay, lastDay }
    }




    useEffect(() => {

        const current = getDays(0);
        const previous = getDays(1);
        const next = getDays(-1);
        let previousMonth = Array.from(Array(currentDay), (_, i) => previous.lastDay - i).reverse();

        let currentMonth = Array.from(Array(current.lastDay), (_, i) => current.firstDay + i)
        let completeDays = previousMonth.concat(currentMonth,)
        let remainingDays = 42 - completeDays.length;
        let nextMonth = Array.from(Array(remainingDays), (_, i) => next.firstDay + i)
        setDays(completeDays.concat(nextMonth))


    }, [selectedMonth])


    const onNext = (data) => {

        if (selectedMonth < 11 && selectedMonth > 0) {

            if (data == "increment") {
                setMonth(selectedMonth + 1)
            }
            else {
                setMonth(selectedMonth - 1)
            }
        }


        else if (selectedMonth == 11 && data == "increment") {
            setMonth(0)
            setYear(selectedYear + 1)
        }
        else if (selectedMonth == 0 && data == "increment") {
            setMonth(selectedMonth + 1)
        }


        else if (selectedMonth == 0) {
            setYear(selectedYear - 1)
            setMonth(11)
        }
        else if (selectedMonth == 11) {
            setMonth(selectedMonth - 1)

        }


    }

    return (
        <View style={defaultStyles.topView}>
            <Header
                heading={t("ss_heading")}
                containerStyle={styles.container}
                show
                extraStyle={{ width: 50 }}
            />
            <ScrollView>
                {/* date representation */}
                <View style={styles.dateContainer}>
                    <View>
                        <Text style={[fonts.q3, { color: Colors.grey, textTransform: "uppercase" }]}>{t(months[selectedMonth])}</Text>
                        <Text style={[fonts.q4, { color: Colors.grey }]}>{selectedYear}</Text>
                    </View>
                    <View style={styles.arrowContainer}>
                        <Pressable
                            style={[{ transform: [{ rotate: "180deg" }], }, styles.arrow]}
                            android_ripple={{ color: Colors.grey, borderless: true, radius: 12 }}
                            onPress={() => onNext()}
                        >
                            <Next />
                        </Pressable>
                        <Pressable style={styles.arrow}
                            android_ripple={{ color: Colors.grey, borderless: true, radius: 12 }}
                            onPress={() => onNext("increment")}
                        >
                            <Next />
                        </Pressable>
                    </View>
                </View>

                {/* calendar represntation */}
                <View style={styles.calendar}>
                    {/* days name */}
                    <View style={styles.days}>
                        {
                            Daysname.map((d, i) => {
                                return (
                                    <View key={i} style={{ width: 28, alignItems: "center" }}>
                                        <Text style={[fonts.q18, { color: Colors.grey }]}>{d}</Text>
                                    </View>
                                )
                            })
                        }
                    </View>

                    {/* days */}
                    <ScrollView horizontal contentContainerStyle={{ width: "100%" }}>
                        <FlatList
                            data={Days}
                            keyExtractor={(_, i) => i.toString()}
                            contentContainerStyle={{ justifyContent: "space-between", }}
                            style={{}}
                            numColumns={7}
                            columnWrapperStyle={{ justifyContent: "space-between" }}
                            // horizontal
                            renderItem={({ item: d, index: i }) => {




                                return (
                                    <View key={i} style={{ marginTop: 12, width: 28, justifyContent: "center", alignItems: "center", height: 28, borderRadius: 28 / 2, backgroundColor: "tranparent" }} >
                                        <Text style={[fonts.q7, { color: Colors.grey, opacity: currentDay <= i && i - currentDay + 1 <= lastDay ? 1 : .4 }]}>{d}</Text>
                                    </View>
                                )
                            }}
                        />
                    </ScrollView>
                </View>
                <Text style={[fonts.q1, { color: Colors.grey, marginTop: spacing, marginHorizontal: spacing }]}>{t("ss_note")}</Text>
                {Daysname.map((item, i) => {
                    return (
                        <View style={{ marginHorizontal: spacing, marginVertical: 15, flexDirection: "row" }} key={i}>
                            <View style={{ width: 30, height: 30, borderRadius: 30 / 2, backgroundColor: Colors.orange, justifyContent: "center", alignItems: "center", marginRight: 15, marginTop: 5 }}>
                                <Text style={[fonts.q8, { color: Colors.white }]}>30</Text>
                            </View>
                            <Text style={[{ flex: 1 }, fonts.q4]}>
                                You exercise 40 minutes a day and five days a week at a certain time,
                                you practice on a regular schedule. Changing the schedule will result
                                in diminished results, resulting in fatigue.
                            </Text>
                        </View>
                    )
                })}

            </ScrollView>


        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "space-between",
    },
    dateContainer: {
        justifyContent: "space-between",
        marginHorizontal: spacing,
        flexDirection: "row",
        marginVertical: 25
    },
    arrowContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: 70
    },
    arrow: {
        width: 25,
        height: 25,
        justifyContent: "center",
        alignItems: "center"
    },
    calendar: {
        marginHorizontal: spacing
    },
    days: {
        flexDirection: "row",
        justifyContent: "space-between",
        borderBottomColor: Colors.thinGrey,
        borderBottomWidth: 1,
        paddingBottom: 5,
    }
})


export default Schedule
© 2022 GitHub, Inc.
    Terms
Privacy
Security
Status
Docs
Contact GitHub
Pricing
API
Training
Blog
About
Loading complete