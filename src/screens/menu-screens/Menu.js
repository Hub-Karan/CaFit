import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableNativeFeedback,
    ScrollView,
    Dimensions,
    FlatList,
} from 'react-native';
import React from 'react';

// COMPONENT
import MenuCard from '../../components/MenuCard';
import MenuHeader from '../../components/MenuHeader';

// CONSTANT
import color from '../../constants/colors/color';
import fonts from '../../constants/font-layout/font';
import data from '../../constants/data/menuData';

const { width: windowWidth, height: windowHeight } = Dimensions.get('window');

const Menu = ({ navigation }) => {
    const renderItem = ({ item }) => {
        return item.screenName === 'Empty' ? (
            <View style={{ flex: 0.3, aspectRatio: 1 }} />
        ) : (
            <TouchableNativeFeedback
                onPress={() => {
                    if (item.screenName === 'Home') {
                        return navigation.navigate('Home');
                    } else if (item.screenName === 'Support') {
                        return navigation.navigate('Support');
                    }
                    navigation.navigate('Drawer', {
                        // screen: "BottomTab",
                        screenName: item.screenName,
                    });
                }}
            >
                <View style={Styles.menuContainer}>
                    {/* <View> */}
                    {item.imageUrl}
                    {/* </View> */}
                    {/* <View> */}
                    <Text
                        numberOfLines={1}
                        ellipsizeMode="tail"
                        style={{
                            ...fonts.regularBoldFont,
                            paddingHorizontal: 4,
                            color: color.textGrey,
                            opacity: 0.8,
                            marginVertical: 7,
                        }}
                    >
                        {item.title}
                    </Text>
                    {/* </View> */}
                </View>
            </TouchableNativeFeedback>
        );
    };

    return (
        <View style={{ flex: 1, backgroundColor: color.secondaryColor }}>
            <FlatList
                ListHeaderComponent={<MenuHeader />}
                contentContainerStyle={Styles.flatlistContent}
                data={data}
                renderItem={renderItem}
                numColumns={3}
                columnWrapperStyle={Styles.columnWrapper}
                ItemSeparatorComponent={() => (
                    <View style={Styles.wrapperView} />
                )}
            />
            {/* <ScrollView contentContainerStyle={{ flexGrow: 1 }} >
                <View style={Styles.menuContainer}>
                    <View style={Styles.child1}>
                        <View style={Styles.userProfileContainer}>
                            <View style={Styles.userProfileImgContainer}>
                                <Image source={require("../../assets/user-profile-circle.png")} />
                            </View>
                            <View>
                                <Text style={{ ...fonts.secondaryFont, color: color.secondaryColor }}>
                                    Capi Creative Design
                                </Text>
                                <Text style={{ ...fonts.mediumFont, color: color.secondaryColor }}>
                                    Profile
                                </Text>
                            </View>
                        </View>
                    </View>

                    <View style={Styles.child2}>
                        <MenuCard text="Home" imageUrl={require("../../assets/menu/home.png")} onPress={() => navigation.navigate("Home")} />
                        <MenuCard text="Weight" imageUrl={require("../../assets/menu/weight-scale.png")} />
                        <MenuCard text="Training Plan" imageUrl={require("../../assets/menu/list-2.png")} />
                        <MenuCard text="Training Strats" imageUrl={require("../../assets/menu/chart-bars.png")} />
                        <MenuCard text="Meal Plan" imageUrl={require("../../assets/menu/cutlery.png")} />
                        <MenuCard text="Schedule" imageUrl={require("../../assets/menu/calendar-grid.png")} />
                        <MenuCard text="Running" imageUrl={require("../../assets/menu/athletics.png")} />
                        <MenuCard text="Excercises" imageUrl={require("../../assets/menu/stretching.png")} />
                        <MenuCard text="Tips" imageUrl={require("../../assets/menu/bulb.png")} />
                        <MenuCard text="Settings" imageUrl={require("../../assets/menu/gear.png")} />
                        <MenuCard text="Support" imageUrl={require("../../assets/menu/alert-que.png")} />
                    </View>
                </View >
            </ScrollView> */}
        </View>
    );
};

const Styles = StyleSheet.create({
    menuContainer: {
        flex: 0.3,
        aspectRatio: 1,
        backgroundColor: color.secondaryColor,
        elevation: 5,
        borderRadius: 11,
        justifyContent: 'center',
        alignItems: 'center',
        // borderWidth: 2
    },
    flatlistContent: {
        paddingBottom: 15,
    },
    columnWrapper: {
        paddingTop: 15,
        justifyContent: 'space-between',
        marginHorizontal: 10,
    },
    // wrapperView: {
    //     marginHorizontal: 20
    // }

    // menuContainer: {
    //     flex: 1,
    //     backgroundColor: color.secondaryColor
    // },
    // child1: {
    //     flex: 1,
    //     backgroundColor: color.menuHeaderColor,
    //     justifyContent: "center",
    //     alignItems: 'flex-start',
    //     paddingLeft: 25,
    //     paddingBottom: 25,
    //     paddingTop: 40
    // },
    // child2: {
    //     backgroundColor: 'white',
    //     paddingVertical: 21,
    //     justifyContent: "flex-start",
    //     alignItems: "center",
    //     flexDirection: "row",
    //     flexWrap: "wrap",
    //     flex: 3,
    //     marginHorizontal: windowWidth * 0.01

    // },
    // userProfileContainer: {
    //     flexDirection: "row",
    //     alignItems: "center"
    // },
    // userProfileImgContainer: {
    //     marginRight: 15
    // },
});

export default Menu;
