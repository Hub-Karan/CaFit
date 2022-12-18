import { View, Text, StyleSheet, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';

// COMPONENT
import WorkoutCard from '../../components/WorkoutCard';

// CONSTANT
import data, { calendarMonth } from '../../constants/data/calendarData';
import color from '../../constants/colors/color';
import fonts from '../../constants/font-layout/font';

// SVG
import LeftArrow from '../../assets/icons/svg-components/LeftArrow';
import RightArrows from '../../assets/icons/svg-components/RightArrow';

const Water = () => {
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
        <ScrollView
            contentContainerStyle={{
                flexGrow: 1,
                backgroundColor: color.secondaryColor,
            }}
        >
            <View style={Styles.fullbodyContainer}>
                <View style={Styles.fullBodyHeaderContainer}>
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
                <WorkoutCard
                    tag="Workout"
                    title="Climbers"
                    text="Personalized workout will help you gain strength"
                    bgColor="#000000"
                />
                <WorkoutCard
                    tag="Workout"
                    title="Climbers"
                    text="Personalized workout will help you gain strength"
                    bgColor="#000000"
                />
                <WorkoutCard
                    tag="Workout"
                    title="Climbers"
                    text="Personalized workout will help you gain strength"
                    bgColor="#000000"
                />
                <WorkoutCard
                    tag="Workout"
                    title="Climbers"
                    text="Personalized workout will help you gain strength"
                    bgColor="#000000"
                />
                <WorkoutCard
                    tag="Workout"
                    title="Climbers"
                    text="Personalized workout will help you gain strength"
                    bgColor="#000000"
                />
                <WorkoutCard
                    tag="Workout"
                    title="Climbers"
                    text="Personalized workout will help you gain strength"
                    bgColor="#000000"
                />
            </View>
        </ScrollView>
    );
};

const Styles = StyleSheet.create({
    fullbodyContainer: {
        flex: 1,
    },
    fullBodyHeaderContainer: {
        justifyContent: 'space-around',
        alignItems: 'center',
        marginVertical: 10,
        flexDirection: 'row',
    },
});

export default Water;
