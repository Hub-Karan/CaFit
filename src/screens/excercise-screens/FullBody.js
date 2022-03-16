import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";

import WorkoutCard from "../../components/WorkoutCard";
import color from "../../constants/colors/color";

const FullBody = () => {
    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <View style={Styles.fullbodyContainer}>
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
        backgroundColor: color.secondaryColor,
    },
});

export default FullBody;
