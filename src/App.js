import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "./screens/onboarding-screens/HomeScreen";
import Welcome from "./screens/cafit-welcome-screens/Welcome";
import FitnessLevel from "./screens/cafit-welcome-screens/FitnessLevel";
import PersonalDetails from "./screens/cafit-welcome-screens/PersonalDetails";
import Menu from "./screens/menu-screens/Menu";
import Home from "./screens/home/Home";
import Workout from "./screens/workout-screens/Workout";
import WorkoutSession from "./screens/workout-screens/WorkoutSession";
import Weight from "./screens/weight/Weight";
import Schedule from "./screens/schedule/Schedule";
import Excercise from "./screens/excercise-screens/Excercise";
import TrainingPlan from "./screens/training-plan-screens/TrainingPlan";
import WaterSetting from "./screens/training-plan-screens/WaterSetting";
import MealPlan from "./screens/meal-plan/MealPlan";
import Gear from "./screens/gear-screens/Setting";
import TrainingStrat from "./screens/training-strat-screens/TrainingStrat";
import Tips from "./screens/tips-screens/Tips";
import TipsScreen from "./screens/tips-screens/TipsScreen";
import Running from "./screens/running-screens/Running";
import RunningSetting from "./screens/running-screens/RunningSetting";
import Support from "./screens/support-screens/Support";
import Drawer from "./navigation/Drawer/Drawer";
import WeightDrawer from "./navigation/Drawer/weight-drawer/WeightDrawer";

import BottomTabNavigator from "./navigation/BottomTabNavigator";

import color from "./constants/colors/color";
import fonts from "./constants/font-layout/font";
import Setting from "./screens/gear-screens/Setting";
import HeaderLeft from "./components/HeaderLeft";
import Social from "./screens/gear-screens/Social";
import OpenDrawer from "./components/OpenDrawer";

import { NavigationRef } from "./constants/Ref";

const App = () => {
    const Stack = createNativeStackNavigator();
    const Tab = createBottomTabNavigator();
    return (
        <NavigationContainer ref={NavigationRef}>
            <Stack.Navigator initialRouteName="Homescreen">
                <Stack.Screen
                    name="HomeScreen"
                    component={HomeScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Drawer"
                    component={Drawer}
                    options={{ headerShown: false }}
                />
                {/* <Stack.Screen name="WeightDrawer" component={WeightDrawer} /> */}

                <Stack.Screen
                    name="Welcome"
                    component={Welcome}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="FitnessLevel"
                    component={FitnessLevel}
                    options={{
                        title: "Step 2 of 3",
                        headerTitleAlign: "center",
                        headerStyle: {
                            backgroundColor: color.navigationHeaderColor,
                        },
                        headerTintColor: color.secondaryColor,
                        headerTitleStyle: {
                            color: color.primaryColor,
                            fontSize: 20,
                            fontWeight: "bold",
                        },
                    }}
                />
                <Stack.Screen
                    name="PersonalDetails"
                    component={PersonalDetails}
                    options={{
                        title: "Step 3 of 3",
                        headerTitleAlign: "center",
                        headerStyle: {
                            backgroundColor: color.navigationHeaderColor,
                        },
                        headerTintColor: color.secondaryColor,
                        headerTitleStyle: {
                            color: color.primaryColor,
                            fontSize: 20,
                            fontWeight: "bold",
                        },
                    }}
                />

                <Stack.Screen
                    name="Menu"
                    component={Menu}
                    options={{
                        headerStyle: {
                            backgroundColor: color.menuHeaderColor,
                        },
                        title: null,
                        headerTintColor: color.secondaryColor,
                        headerShadowVisible: false,
                    }}
                />
                <Stack.Screen
                    name="Support"
                    component={Support}
                    options={{
                        headerStyle: {
                            backgroundColor: color.primaryColor,
                        },
                        title: "Support",
                        headerTitleAlign: "center",
                        headerTintColor: color.secondaryColor,
                        headerShadowVisible: false,
                    }}
                />
                <Stack.Screen
                    name="Home"
                    component={Home}
                    options={{
                        title: "Capi Fitness Application",
                        headerTitleAlign: "left",
                        headerStyle: {
                            backgroundColor: color.primaryColor,
                        },
                        headerTintColor: color.secondaryColor,
                        headerTitleStyle: {
                            ...fonts.secondaryFont,
                            color: color.secondaryColor,
                        },
                    }}
                />
                {/* <Stack.Screen
                    name="Weight"
                    component={Weight}
                    options={{
                        title: "Check your progress",
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
                /> */}
                {/* <Stack.Screen
                    name="TrainingPlan"
                    component={TrainingPlan}
                    options={{
                        title: "Meal Plan",
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
                /> */}
                <Stack.Screen
                    name="WaterSetting"
                    component={WaterSetting}
                    options={{
                        title: "Water Setting",
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
                {/* <Stack.Screen
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
                /> */}

                {/* <Stack.Screen
                    name="Excercise"
                    component={Excercise}
                    options={{
                        title: "Excercise",
                        headerTitleAlign: "center",
                        headerShadowVisible: false,
                        headerTintColor: color.textGrey,
                        headerStyle: {
                            backgroundColor: color.secondaryColor,
                        },
                        headerTitleStyle: {
                            ...fonts.secondaryFont,
                            color: color.textGrey,
                        },
                    }}
                /> */}
                {/* <Stack.Screen
                    name="MealPlan"
                    component={MealPlan}
                    options={{
                        title: "Meal Plan",
                        headerTitleAlign: "center",
                        headerShadowVisible: false,
                        headerTintColor: color.textGrey,
                        headerStyle: {
                            backgroundColor: color.secondaryColor,
                        },
                        headerTitleStyle: {
                            ...fonts.secondaryFont,
                            color: color.textGrey,
                        },
                    }}
                /> */}
                {/* <Stack.Screen
                    name="Setting"
                    component={Setting}
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
                /> */}
                {/* <Stack.Screen
                    name="TrainingStrat"
                    component={TrainingStrat}
                    options={{
                        title: "Training Strat",
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
                /> */}
                {/* <Stack.Screen
                    name="Tips"
                    component={TipsScreen}
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
                /> */}
                {/* <Stack.Screen
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
                /> */}
                {/* <Stack.Screen
                    name="Running"
                    component={Running}
                    options={{
                        title: "Running",
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
                /> */}
                {/* <Stack.Screen
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
                /> */}

                {/* <Stack.Screen name="Workout" component={Workout} options={{
          title: "Workout", headerTitleAlign: "center", headerStyle: {
            backgroundColor: color.secondaryColor
          },
          headerShadowVisible: false,
          headerTintColor: color.grey,
          headerTitleStyle: {
            ...fonts.secondaryFont,
            color: "black",

          }
        }} /> */}
                {/* <Stack.Screen
                    name="BottomTabNavigator"
                    component={BottomTabNavigator}
                    options={{ headerShown: false }}
                /> */}
                {/* <Stack.Screen name="WorkoutSession" component={WorkoutSession} options={{
          title: "Workout", headerTitleAlign: "center", headerStyle: {
            backgroundColor: color.secondaryColor
          },
          headerStyle: {
            backgroundColor: color.primaryColor
          },
          headerShadowVisible: false,
          headerTintColor: color.secondaryColor,
          headerTitleStyle: {
            ...fonts.secondaryFont,
            color: color.secondaryColor,

          }
        }} /> */}
                {/* options={{
          title: "Workout", headerTitleAlign: "center", headerStyle: {
            backgroundColor: color.secondaryColor
          },
          headerShadowVisible: false,
          headerTintColor: color.grey,
          headerTitleStyle: {
            ...fonts.secondaryFont,
            color: "black",

          }
        }} */}
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
