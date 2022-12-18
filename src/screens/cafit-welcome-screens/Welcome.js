import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react';

// COMPONENT
import CustomButton from '../../components/CustomButton';

// CONSTANT
import color from '../../constants/colors/color';
import fonts from '../../constants/font-layout/font';

const Welcome = ({ navigation }) => {
    return (
        <View style={Styles.welcomeContainer}>
            <View style={Styles.welcomeHeaderContainer}>
                <View style={Styles.stepContainer}>
                    <Text
                        style={{ ...fonts.secondaryFont, ...Styles.stepText }}
                    >
                        Step 1 of 3
                    </Text>
                </View>
            </View>
            <View style={Styles.welcomeImageContainer}>
                <View styles={Styles.welcomeImgContainer}>
                    <Image
                        style={Styles.welcomeImg}
                        source={require('../../assets/images/welcome-image.png')}
                    />
                </View>
                <View style={Styles.headerContainer}>
                    <Text
                        style={{ ...fonts.primaryFont, ...Styles.headerText }}
                    >
                        Welcome to
                    </Text>
                    <Text
                        style={{ ...fonts.primaryFont, ...Styles.headerText }}
                    >
                        Capi Fitness Applications
                    </Text>
                </View>
                <View style={Styles.paraContainer}>
                    <Text
                        style={{ ...fonts.regularFont2x, ...Styles.paraText }}
                    >
                        Personalized workouts will help you gain strength, get
                        in better shape and embrace a healthy lifestyle.
                    </Text>
                </View>
            </View>
            <View style={Styles.customBottomContainer}>
                <View style={Styles.customBtnContainer}>
                    <CustomButton
                        title="Get Started"
                        color="white"
                        onPress={() => navigation.navigate('FitnessLevel')}
                    />
                </View>
                <View style={Styles.dotContainer}>
                    <View style={Styles.activeDot}></View>
                    <View style={Styles.dot}></View>
                    <View style={Styles.dot}></View>
                </View>
            </View>
        </View>
    );
};

const Styles = StyleSheet.create({
    customBtnContainer: {
        backgroundColor: '#FF9B70',
        width: '90%',
        borderRadius: 30,
        marginTop: 20,
        overflow: 'hidden',
        justifyContent: 'center',
    },
    welcomeContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        backgroundColor: 'white',
        padding: 10,
    },
    welcomeHeaderContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    welcomeImageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 2,
    },
    stepContainer: {
        // marginTop: 0,
        marginBottom: 66,
    },
    stepText: {
        color: color.primaryColor,
    },
    welcomeImg: {
        marginBottom: 23,
        transform: [{ scaleX: 1.1 }, { scaleY: 1.1 }],
    },
    headerContainer: {
        marginBottom: 23,
    },
    headerText: {
        textAlign: 'center',
        color: color.textGrey,
    },
    paraContainer: {
        paddingHorizontal: 41,
    },
    paraText: {
        textAlign: 'center',
        color: color.textGrey,
    },
    customBottomContainer: {
        width: '100%',
        justifyContent: 'flex-end',
        alignItems: 'center',
        flex: 1,
    },
    dotContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 15,
    },
    activeDot: {
        backgroundColor: color.primaryColor,
        height: 12,
        width: 12,
        borderRadius: 15 / 2,
        marginHorizontal: 10,
        opacity: 1,
    },
    dot: {
        backgroundColor: color.lightGrey,
        height: 12,
        width: 12,
        borderRadius: 15 / 2,
        marginHorizontal: 10,
        opacity: 0.5,
    },
});

export default Welcome;
