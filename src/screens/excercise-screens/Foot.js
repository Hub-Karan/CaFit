import { View, Text, StyleSheet, ScrollView } from 'react-native';
import React from 'react';

// COMPONENT
import WorkoutCard from '../../components/WorkoutCard';

// CONSTANT
import color from '../../constants/colors/color';

const Foot = () => {
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

export default Foot;
