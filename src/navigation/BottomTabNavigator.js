import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Menu from "../screens/menu-screens/Menu";
import Workout from "../screens/workout-screens/Workout";
import WorkoutSession from "../screens/workout-screens/WorkoutSession";
import ExcerciseDetailsScreen from "../screens/workout-screens/ExcerciseDetailsScreen";
import Weight from "../screens/weight/Weight";
import Yoga from "../screens/workout-screens/Yoga";
import TrainingStrat from "../screens/training-strat-screens/TrainingStrat";

import Running from "../components/svg-components/Running";
import SvgRunning from "../components/svg-components/SvgRunning";
import Fork from "../components/svg-components/Fork";
import SvgHome from "../components/svg-components/SvgHome";
import SvgMeter from "../components/svg-components/SvgMeter";

import color from "../constants/colors/color";
import fonts from "../constants/font-layout/font";
import SvgMore from "../components/svg-components/SvgMore";
import Schedule from "../screens/schedule/Schedule";
import CustomTab from "./Drawer/weight-drawer/CustomTab";
import HeaderLeft from "../components/HeaderLeft";
import MealPlan from "../screens/meal-plan/MealPlan";
import { Header } from "react-navigation-stack";
import Excercise from "../screens/excercise-screens/Excercise";
import Setting from "../screens/gear-screens/Setting";
import TipsScreen from "../screens/tips-screens/TipsScreen";
import RunningScreen from "../screens/running-screens/Running";
import RunningSetting from "../screens/running-screens/RunningSetting";
import Tips from "../screens/tips-screens/Tips";
import SvgHamburger from "../components/svg-components/SvgHamburger";
import OpenDrawer, { DrawerNBack } from "../components/OpenDrawer";
import Language from "../screens/gear-screens/Language";
import Social from "../screens/gear-screens/Social";
import Support from "../screens/support-screens/Support";

const Stack = createNativeStackNavigator();

export const WorkoutStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Workout"
                component={Workout}
                options={{
                    title: "Workout",
                    headerTitleAlign: "center",
                    headerStyle: {
                        backgroundColor: color.secondaryColor,
                    },
                    headerLeft: () => {
                        return <HeaderLeft fill={"black"} />;
                    },
                    headerShadowVisible: false,
                    headerTintColor: color.grey,
                    headerTitleStyle: {
                        ...fonts.secondaryFont,
                        color: "black",
                    },
                }}
            />
            <Stack.Screen
                name="WorkoutSession"
                component={WorkoutSession}
                options={{
                    title: "Workout-Session",
                    headerTitleAlign: "center",
                    headerStyle: {
                        backgroundColor: color.secondaryColor,
                    },
                    headerStyle: {
                        backgroundColor: color.primaryColor,
                    },
                    headerShadowVisible: false,
                    headerTintColor: color.secondaryColor,
                    headerTitleStyle: {
                        ...fonts.secondaryFont,
                        color: color.secondaryColor,
                    },
                }}
            />
            <Stack.Screen
                name="ExcerciseDetailsScreen"
                component={ExcerciseDetailsScreen}
                options={{
                    title: "Climbers",
                    headerTitleAlign: "center",
                    headerStyle: {
                        backgroundColor: color.primaryColor,
                    },
                    headerTitleStyle: {
                        color: color.secondaryColor,
                    },
                    headerTintColor: color.secondaryColor,
                }}
            />
            <Stack.Screen
                name="Yoga"
                component={Yoga}
                options={{
                    title: "Yoga",
                    headerTitleAlign: "center",
                    headerStyle: {
                        backgroundColor: color.primaryColor,
                    },
                    headerTitleStyle: {
                        color: color.secondaryColor,
                    },
                    headerTintColor: color.secondaryColor,
                }}
            />
        </Stack.Navigator>
    );
};

// const TrainingPlanStack = () => {
//     return (
//         <Stack.Navigator>
//             <Stack.Screen  name="Workout" component={Workout} options={{
//                 title: "Workout", headerTitleAlign: "center", headerStyle: {
//                     backgroundColor: color.secondaryColor
//                 },
//                 headerShadowVisible: false,
//                 headerTintColor: color.grey,
//                 headerTitleStyle: {
//                     ...fonts.secondaryFont,
//                     color: "black",

//                 }
//             }} />
//         </Stack.Navigator>
//     )
// }

// const WeightTabScreen = () => {
//     const Stack = createNativeStackNavigator();
//     return (
//         <Stack.Navigator>
//             <Stack.Screen
//                 name="Weight"
//                 component={Weight}
//                 options={{
//                     title: "Check your progress",
//                     headerTitleAlign: "center",
//                     headerShadowVisible: false,
//                     headerTintColor: color.secondaryColor,
//                     headerStyle: {
//                         backgroundColor: color.primaryColor,
//                     },
//                     headerTitleStyle: {
//                         ...fonts.secondaryFont,
//                         color: color.secondaryColor,
//                     },
//                 }}
//             />
//         </Stack.Navigator>
//     );
// };

export const RunningStackScreen = (props) => {
    // console.log(props);
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="RunningScreen"
                component={RunningScreen}
                options={{
                    title: "Running",
                    headerTitleAlign: "center",
                    headerShadowVisible: false,
                    headerLeft: () => {
                        return (
                            <OpenDrawer
                                OpenDrawer={props.navigation.OpenDrawer}
                            />
                        );
                    },
                    headerTintColor: color.secondaryColor,
                    headerStyle: {
                        backgroundColor: color.primaryColor,
                    },
                    headerTitleStyle: {
                        ...fonts.secondaryFont,
                        color: color.secondaryColor,
                    },
                }}
            />
            <Stack.Screen
                name="RunningSetting"
                component={RunningSetting}
                options={{
                    title: "Setting",
                    headerTitleAlign: "center",
                    headerShadowVisible: false,
                    headerTintColor: color.secondaryColor,
                    headerStyle: {
                        backgroundColor: color.primaryColor,
                    },
                    headerTitleStyle: {
                        ...fonts.secondaryFont,
                        color: color.secondaryColor,
                    },
                }}
            />
        </Stack.Navigator>
    );
};

const TipsStackScreen = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="TipsScreen"
                component={TipsScreen}
                options={{
                    title: "Tips",
                    headerTitleAlign: "center",
                    headerShadowVisible: false,
                    headerLeft: () => {
                        return <HeaderLeft fill={color.secondaryColor} />;
                    },
                    headerTintColor: color.secondaryColor,
                    headerStyle: {
                        backgroundColor: color.primaryColor,
                    },
                    headerTitleStyle: {
                        ...fonts.secondaryFont,
                        color: color.secondaryColor,
                    },
                }}
            />
            <Stack.Screen
                name="TipsDetail"
                component={Tips}
                options={{
                    title: "Tips",
                    headerTitleAlign: "center",
                    headerShadowVisible: false,
                    headerTintColor: color.secondaryColor,
                    headerStyle: {
                        backgroundColor: color.primaryColor,
                    },
                    headerTitleStyle: {
                        ...fonts.secondaryFont,
                        color: color.secondaryColor,
                    },
                }}
            />
        </Stack.Navigator>
    );
};

const SettingStack = (props) => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="SettingScreen"
                component={Setting}
                options={{
                    title: "Setting",
                    headerTitleAlign: "center",
                    headerShadowVisible: false,
                    headerLeft: () => {
                        return <HeaderLeft fill={color.secondaryColor} />;
                    },
                    headerTintColor: color.secondaryColor,
                    headerStyle: {
                        backgroundColor: color.primaryColor,
                    },
                    headerTitleStyle: {
                        ...fonts.secondaryFont,
                        color: color.secondaryColor,
                    },
                }}
            />
            <Stack.Screen
                name="SettingLang"
                component={Language}
                options={{
                    headerStyle: {
                        backgroundColor: color.primaryColor,
                    },
                    headerTintColor: color.secondaryColor,
                    title: "Language",
                    headerTitleAlign: "center",
                    headerLeft: () => {
                        return <DrawerNBack />;
                    },
                }}
            />
            <Stack.Screen
                name="SettingSocial"
                component={Social}
                options={{
                    headerStyle: {
                        backgroundColor: color.primaryColor,
                    },
                    title: "Connected",
                    headerTintColor: color.secondaryColor,
                    headerTitleAlign: "center",
                    headerLeft: () => {
                        return <OpenDrawer />;
                    },
                }}
            />
        </Stack.Navigator>
    );
};

const BottomTabNavigator = (props) => {
    const { navigation } = props;
    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator
            backBehavior={"history"}
            initialRouteName={props.route.params.nextScreen}
            tabBar={() => {
                return (
                    <CustomTab
                        currentTabScreen={props.route.params.nextScreen}
                        navigation={navigation}
                    />
                );
            }}
        >
            <Tab.Screen
                name="WorkoutStack"
                component={WorkoutStack}
                options={{
                    headerShown: false,
                    tabBarIcon: (tabInfo) => {
                        return (
                            <SvgRunning
                                fill={
                                    tabInfo.focused
                                        ? color.primaryColor
                                        : color.secondaryColor
                                }
                            />
                        );
                    },
                    tabBarLabel: () => null,
                }}
            />
            <Tab.Screen
                name="Weight"
                component={Weight}
                options={{
                    title: "Check your progress",
                    headerTitleAlign: "center",
                    headerShadowVisible: false,
                    headerTintColor: color.secondaryColor,
                    headerLeft: () => {
                        return <HeaderLeft fill={color.secondaryColor} />;
                    },
                    headerStyle: {
                        backgroundColor: color.primaryColor,
                    },
                    headerTitleStyle: {
                        ...fonts.secondaryFont,
                        color: color.secondaryColor,
                    },
                    tabBarIcon: (tabInfo) => {
                        return (
                            <Fork
                                fill={
                                    tabInfo.focused
                                        ? color.primaryColor
                                        : color.secondaryColor
                                }
                            />
                        );
                    },
                    tabBarLabel: () => null,
                }}
            />
            <Tab.Screen
                name="TrainingStrat"
                component={TrainingStrat}
                options={{
                    title: "Training Strat",
                    headerTitleAlign: "center",
                    headerShadowVisible: false,
                    headerLeft: () => {
                        return <HeaderLeft fill={color.secondaryColor} />;
                    },
                    headerTintColor: color.secondaryColor,
                    headerStyle: {
                        backgroundColor: color.primaryColor,
                    },
                    headerTitleStyle: {
                        ...fonts.secondaryFont,
                        color: color.secondaryColor,
                    },
                }}
            />

            <Tab.Screen
                name="Schedule"
                component={Schedule}
                options={{
                    title: "Schedule",
                    headerTitleAlign: "center",
                    headerShadowVisible: false,
                    headerLeft: () => {
                        return <HeaderLeft fill={color.secondaryColor} />;
                    },
                    headerTintColor: color.secondaryColor,
                    headerStyle: {
                        backgroundColor: color.primaryColor,
                    },
                    headerTitleStyle: {
                        ...fonts.secondaryFont,
                        color: color.secondaryColor,
                    },
                }}
            />
            <Tab.Screen
                name="MealPlan"
                component={MealPlan}
                options={{
                    title: "Meal Plan",
                    headerTitleAlign: "center",
                    headerShadowVisible: false,
                    headerLeft: () => {
                        return <HeaderLeft fill={color.textGrey} />;
                    },
                    headerTintColor: color.textGrey,
                    headerStyle: {
                        backgroundColor: color.secondaryColor,
                    },
                    headerTitleStyle: {
                        ...fonts.secondaryFont,
                        color: color.textGrey,
                    },
                }}
            />
            <Tab.Screen
                name="Excercise"
                component={Excercise}
                options={{
                    title: "Excercise",
                    headerTitleAlign: "center",
                    headerShadowVisible: false,
                    headerLeft: () => {
                        return <HeaderLeft fill={color.textGrey} />;
                    },
                    headerTintColor: color.textGrey,
                    headerStyle: {
                        backgroundColor: color.secondaryColor,
                    },
                    headerTitleStyle: {
                        ...fonts.secondaryFont,
                        color: color.textGrey,
                    },
                }}
            />
            <Tab.Screen
                name="Setting"
                component={SettingStack}
                options={{
                    headerShown: false,
                    title: "Setting",
                    headerTitleAlign: "center",
                    headerShadowVisible: false,
                    headerLeft: () => {
                        return <HeaderLeft fill={color.secondaryColor} />;
                    },
                    headerTintColor: color.secondaryColor,
                    headerStyle: {
                        backgroundColor: color.primaryColor,
                    },
                    headerTitleStyle: {
                        ...fonts.secondaryFont,
                        color: color.secondaryColor,
                    },
                }}
            />
            <Tab.Screen
                name="Tips"
                component={TipsStackScreen}
                options={{ headerShown: false }}
                // options={{
                //     title: "Tips",
                //     headerTitleAlign: "center",
                //     headerShadowVisible: false,
                //     headerLeft: () => {
                //         return <HeaderLeft fill={color.secondaryColor} />;
                //     },
                //     headerTintColor: color.secondaryColor,
                //     headerStyle: {
                //         backgroundColor: color.primaryColor,
                //     },
                //     headerTitleStyle: {
                //         ...fonts.secondaryFont,
                //         color: color.secondaryColor,
                //     },
                // }}
            />
            <Tab.Screen
                name="Running"
                component={RunningStackScreen}
                options={{ headerShown: false }}
                initialParams={navigation}
                // options={{
                //     title: "Running",
                //     headerTitleAlign: "center",
                //     headerShadowVisible: false,
                //     headerLeft: () => {
                //         return <HeaderLeft fill={color.secondaryColor} />;
                //     },
                //     headerTintColor: color.secondaryColor,
                //     headerStyle: {
                //         backgroundColor: color.primaryColor,
                //     },
                //     headerTitleStyle: {
                //         ...fonts.secondaryFont,
                //         color: color.secondaryColor,
                //     },
                // }}
            />

            {/* <Tab.Screen name="TrainingPlan" component={TrainingPlanStack} options={{
                headerShown: false, tabBarIcon: (tabInfo) => {
                    return <Running width={20} height={20} fill={tabInfo.focused ? color.primaryColor : color.secondaryColor} />
                }, tabBarLabel: () => null
            }} /> */}
        </Tab.Navigator>
    );
};

export default BottomTabNavigator;
