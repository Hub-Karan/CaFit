import { View, Text } from "react-native";
import React from "react";

import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Water from "./Water";
import Food from "./Food";

import color from "../../constants/colors/color";
import fonts from "../../constants/font-layout/font";

const TopTab = createMaterialTopTabNavigator();

const MealPlan = () => {
    return (
        <TopTab.Navigator
            screenOptions={{
                tabBarStyle: {
                    backgroundColor: color.secondaryColor,
                },
                tabBarItemStyle: {
                    // backgroundColor:"yellow",
                    // marginHorizontal:10,
                    // borderRadius:19,
                },
            }}
        >
            <TopTab.Screen
                name={"Water"}
                component={Water}
                options={{
                    title: "Water",
                    tabBarActiveTintColor: color.primaryColor,
                    tabBarInactiveTintColor: color.textGrey,
                    tabBarIndicatorStyle: {
                        backgroundColor: null,
                    },
                    tabBarLabelStyle: {
                        ...fonts.regularBoldFont4x,
                        textTransform: "capitalize",
                    },
                    tabBarIndicatorStyle: {
                        backgroundColor: color.primaryColor,
                        // height:"100%",
                        // borderRadius:19
                    },
                }}
            />
            <TopTab.Screen
                name={"Food"}
                component={Food}
                options={{
                    title: "Food",
                    tabBarActiveTintColor: color.primaryColor,
                    tabBarInactiveTintColor: color.textGrey,
                    tabBarIndicatorStyle: {
                        backgroundColor: color.primaryColor,
                    },
                    tabBarLabelStyle: {
                        ...fonts.regularBoldFont4x,
                        textTransform: "capitalize",
                    },
                    tabBarIndicatorStyle: {
                        backgroundColor: color.primaryColor,
                        // height:"100%",
                        // borderRadius:19
                    },
                }}
            />
        </TopTab.Navigator>
    );
};

export default MealPlan;
