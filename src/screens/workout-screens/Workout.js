import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";

import CustomButton from "../../components/CustomButton";
import WorkoutCard from "../../components/WorkoutCard";
import Menu from "../menu-screens/Menu";
import Home from "../home/Home";
import color from "../../constants/colors/color";
import fonts from "../../constants/font-layout/font";
import { HeaderTitle } from "react-navigation-stack";

const Workout = (props) => {
    const { navigation } = props;

    return (
        <View style={{ flex: 1 }}>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <View style={Styles.workoutScreenContainer}>
                    <WorkoutCard
                        tag="Workout"
                        title="Climbers"
                        text="Personalized workout will help you gain strength"
                        bgColor="#000000"
                        navigation={navigation}
                    />
                </View>
                <View style={Styles.workoutScreenContainer}>
                    <WorkoutCard
                        tag="Workout"
                        title="Climbers"
                        text="Personalized workout will help you gain strength"
                        bgColor="#8C8C8C"
                        navigation={navigation}
                    />
                </View>
                <View style={Styles.workoutScreenContainer}>
                    <WorkoutCard
                        tag="Workout"
                        title="Climbers"
                        text="Personalized workout will help you gain strength"
                        bgColor="#8C8C8C"
                        navigation={navigation}
                    />
                </View>
                <View style={Styles.workoutScreenContainer}>
                    <WorkoutCard
                        tag="Workout"
                        title="Climbers"
                        text="Personalized workout will help you gain strength"
                        bgColor="#8C8C8C"
                        navigation={navigation}
                    />
                </View>
                <View style={Styles.workoutScreenContainer}>
                    <WorkoutCard
                        tag="Workout"
                        title="Climbers"
                        text="Personalized workout will help you gain strength"
                        bgColor="#8C8C8C"
                        navigation={navigation}
                    />
                </View>
            </ScrollView>
        </View>
    );
};

const Styles = StyleSheet.create({
    workoutScreenContainer: {
        flex: 1,
        backgroundColor: color.secondaryColor,
    },
});

export default Workout;
