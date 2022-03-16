import {
    View,
    Text,
    StyleSheet,
    FlatList,
    ScrollView,
    TouchableOpacity,
    TouchableNativeFeedback,
} from "react-native";
import React, { useState, useEffect } from "react";

import color from "../../constants/colors/color";
import fonts from "../../constants/font-layout/font";

import WaterMeter from "../../components/svg-components/WaterMeter";
import Gear from "../../components/svg-components/Gear";
import Circle from "../../components/svg-components/Circle";
import Cups from "../../components/svg-components/Cups";
import CustomButton from "../../components/CustomButton";
import Clock from "../../components/svg-components/Clock";
import Battery from "../../components/svg-components/Battery";
import Meter from "../../components/svg-components/Meter";
import Heart from "../../components/svg-components/Heart";
import Map from "../../components/svg-components/Map";
import ProgressLine from "../../components/svg-components/ProgressLine";
import SvgHeartMeter from "../../components/svg-components/SvgHeartMeter";

import data, { calendarMonth } from "../../constants/data/calendarData";
import runningData, { runningInfo } from "../../constants/data/runningData";
import Pause from "../../components/svg-components/Pause";
import Lock from "../../components/svg-components/Lock";
import RunningTabSection, {
    RunningLineSection,
} from "../../components/RunningTabSection";

// const Running = () => {
//     const todayDate = new Date();
//     const [date, setDate] = useState({});

//     useEffect(() => {
//         const date = todayDate.getDate();
//         const day = todayDate.getDay();
//         const newDay = data[day].full_name;
//         const month = todayDate.getMonth();
//         const newMonth = calendarMonth[month];
//         setDate({ date, newDay, newMonth });
//     }, [data]);

//     const renderRunningList = ({ item, index }) => {
//         return (
//             <View>
//                 <Text
//                     style={{ ...fonts.regularBoldFont, color: color.textGrey }}
//                 >
//                     {item}
//                 </Text>
//             </View>
//         );
//     };

//     const renderRunningInfo = ({ item, index }) => {
//         return (
//             <View
//                 style={{
//                     justifyContent: "center",
//                     alignItems: "center",
//                     paddingVertical: 10,
//                 }}
//             >
//                 <Text
//                     style={{
//                         ...fonts.regularBoldFont4x,
//                         color: color.textGrey,
//                     }}
//                 >
//                     {item.count}
//                 </Text>
//                 <Text>{item.units}</Text>
//             </View>
//         );
//     };

//     return (
//         <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
//             <View style={Styles.runningContainer}>
//                 <View style={{ alignItems: "center", marginVertical: 38 }}>
//                     <Text
//                         style={{
//                             ...fonts.secondaryFont,
//                             color: color.textGrey,
//                         }}
//                     >
//                         {date.newDay}, {date.newMonth?.slice(0, 3)} {date.date}
//                     </Text>
//                 </View>
//                 <View>
//                     <FlatList
//                         data={runningData}
//                         renderItem={renderRunningList}
//                         numColumns={4}
//                         columnWrapperStyle={{
//                             justifyContent: "space-between",
//                             alignItems: "center",
//                             marginHorizontal: 20,
//                             borderBottomWidth: 1,
//                             paddingBottom: 10,
//                         }}
//                     />
//                 </View>
//                 <View>
//                     <FlatList
//                         data={runningInfo}
//                         renderItem={renderRunningInfo}
//                         numColumns={4}
//                         columnWrapperStyle={{
//                             justifyContent: "space-between",
//                             alignItems: "center",
//                             marginHorizontal: 20,
//                             paddingHorizontal: 15,
//                             borderBottomWidth: 1,
//                         }}
//                     />
//                 </View>
//             </View>
//         </ScrollView>
//     );
// };

const Running = ({ navigation }) => {
    const [screenTab, setScreenTab] = useState("Heart");

    return (
        <View style={Styles.trainingPlanContainer}>
            <View style={Styles.upperSection}></View>

            <View style={Styles.cardMainContainer}>
                <View style={Styles.cardContainer}>
                    <TouchableNativeFeedback
                        onPress={() => setScreenTab("Clock")}
                    >
                        <View style={Styles.iconWrapper}>
                            {screenTab === "Clock" ? (
                                <>
                                    <Clock width={20} fill={"black"} />
                                    <View style={Styles.iconSeparator} />
                                </>
                            ) : (
                                <>
                                    <Clock width={20} fill={color.textGrey} />
                                    <View style={Styles.iconSeparator} />
                                </>
                            )}
                        </View>
                    </TouchableNativeFeedback>

                    <TouchableNativeFeedback
                        onPress={() => setScreenTab("Density")}
                    >
                        <View style={Styles.iconWrapper}>
                            {screenTab === "Density" ? (
                                <>
                                    <Battery width={20} fill={"black"} />
                                    <View style={Styles.iconSeparator} />
                                </>
                            ) : (
                                <>
                                    <Battery width={20} fill={color.textGrey} />
                                    <View style={Styles.iconSeparator} />
                                </>
                            )}
                        </View>
                    </TouchableNativeFeedback>

                    <TouchableNativeFeedback
                        onPress={() => setScreenTab("Speed")}
                    >
                        <View style={Styles.iconWrapper}>
                            {screenTab === "Speed" ? (
                                <>
                                    <Meter width={20} fill={"black"} />
                                    <View style={Styles.iconSeparator} />
                                </>
                            ) : (
                                <>
                                    <Meter width={20} fill={color.textGrey} />
                                    <View style={Styles.iconSeparator} />
                                </>
                            )}
                        </View>
                    </TouchableNativeFeedback>

                    <TouchableNativeFeedback
                        onPress={() => setScreenTab("Length")}
                    >
                        <View style={Styles.iconWrapper}>
                            {screenTab === "Length" ? (
                                <>
                                    <Map width={20} fill={"black"} />
                                    <View style={Styles.iconSeparator} />
                                </>
                            ) : (
                                <>
                                    <Map width={20} fill={color.textGrey} />
                                    <View style={Styles.iconSeparator} />
                                </>
                            )}
                        </View>
                    </TouchableNativeFeedback>

                    <TouchableNativeFeedback
                        onPress={() => setScreenTab("Heart")}
                    >
                        <View style={Styles.iconWrapper}>
                            {screenTab === "Heart" ? (
                                <Heart width={20} fill={"black"} />
                            ) : (
                                <Heart width={20} fill={color.textGrey} />
                            )}
                            {/* <View style={Styles.iconSeparator} /> */}
                        </View>
                    </TouchableNativeFeedback>
                </View>
                <View style={Styles.cardInfoContainer}>
                    <View
                        style={{
                            // alignItems: "center",
                            flex: 2,
                            justifyContent: "center",
                        }}
                    >
                        {screenTab === "Cloc" ? (
                            <RunningTabSection title="Time" isDefault={true} />
                        ) : (
                            <RunningTabSection
                                title={screenTab}
                                svgComponent={screenTab}
                            />
                        )}
                    </View>
                    <View style={{ flex: screenTab === "Clock" ? 0.2 : 0.4 }}>
                        {screenTab === "Clock" ? (
                            <ProgressLine width={"100%"} />
                        ) : (
                            <RunningLineSection title={screenTab} />
                        )}
                    </View>
                </View>
            </View>
            <View style={Styles.bottomSection}>
                <View
                    style={{ justifyContent: "center", alignItems: "center" }}
                >
                    <TouchableOpacity
                        onPress={() => navigation.navigate("RunningSetting")}
                        style={{ alignItems: "center" }}
                    >
                        <Gear width={20} height={20} />
                        <Text
                            style={{
                                ...fonts.regularBoldFont,
                                color: color.textGrey,
                            }}
                        >
                            Setting
                        </Text>
                    </TouchableOpacity>
                </View>
                <TouchableNativeFeedback>
                    <View style={Styles.pauseContainer}>
                        <View>
                            <Pause />
                        </View>
                    </View>
                </TouchableNativeFeedback>
                <View
                    style={{ justifyContent: "center", alignItems: "center" }}
                >
                    <Lock width={20} height={20} />
                    <Text
                        style={{
                            ...fonts.regularBoldFont,
                            color: color.textGrey,
                        }}
                    >
                        Unlock
                    </Text>
                </View>
            </View>
        </View>
    );
};

const Styles = StyleSheet.create({
    trainingPlanContainer: {
        flex: 1,
        backgroundColor: color.secondaryColor,
        alignItems: "center",
    },
    cardMainContainer: {
        borderRadius: 8,
        width: "80%",
        height: "80%",
        elevation: 2,
        zIndex: 99,
        backgroundColor: color.secondaryColor,
        borderRadius: 19,
        zIndex: 99,
        marginTop: -90,
    },
    cardContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        // paddingHorizontal: 30,
        paddingVertical: 15,
        height: 70,
        backgroundColor: "#F8F6F9",
        borderTopLeftRadius: 19,
        borderTopRightRadius: 19,
        // borderWidth: 1,
    },

    cardInfoContainer: {
        flex: 10,
        justifyContent: "center",
    },
    iconWrapper: {
        flex: 1,
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
    },
    iconSeparator: {
        // flex: 1,
        backgroundColor: color.textGrey,
        height: "100%",
        width: 1,
        opacity: 0.8,
        // borderColor: color.primaryColor,
        position: "absolute",
        right: 0,
    },
    upperSection: {
        height: 100,
        backgroundColor: color.primaryColor,
        width: "100%",
    },
    bottomSection: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "80%",
        flex: 1,
    },
    pauseContainer: {
        backgroundColor: color.primaryColor,

        height: 40,
        width: "50%",
        borderRadius: 30,
        justifyContent: "center",
        alignItems: "center",
    },
});

export default Running;
