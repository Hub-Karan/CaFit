import { View, Text, StyleSheet, ScrollView } from 'react-native';
import React from 'react';

// CONSTANT
import color from '../../constants/colors/color';
import fonts from '../../constants/font-layout/font';

// COMPONENT
import WorkoutSessionCard from '../../components/WorkoutSessionCard';

const dot = require('../../assets/svg/dot.svg');

const WorkoutSession = () => {
    return (
        <View style={Styles.WorkoutSessionContainer}>
            <ScrollView>
                <WorkoutSessionCard />
                <WorkoutSessionCard />
                <WorkoutSessionCard />
                <WorkoutSessionCard />
            </ScrollView>
        </View>
    );
};

const Styles = StyleSheet.create({
    WorkoutSessionContainer: {
        flex: 1,
    },
});

export default WorkoutSession;
