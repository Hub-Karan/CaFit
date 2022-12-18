import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableNativeFeedback,
} from 'react-native';
import React from 'react';

// CONSTANT
import fonts from '../constants/font-layout/font';
import color from '../constants/colors/color';
import { useNavigation } from '@react-navigation/native';

const MenuHeader = () => {
    const navigation = useNavigation();

    return (
        <View style={Styles.child1}>
            <TouchableNativeFeedback
                onPress={() =>
                    navigation.navigate('Drawer', { screenName: 'MyProfile' })
                }
            >
                <View style={Styles.userProfileContainer}>
                    <View style={Styles.userProfileImgContainer}>
                        <Image
                            source={require('../assets/images/user-profile-circle.png')}
                        />
                    </View>
                    <View>
                        <Text
                            style={{
                                ...fonts.secondaryFont,
                                color: color.secondaryColor,
                            }}
                        >
                            Capi Creative Design
                        </Text>
                        <Text
                            style={{
                                ...fonts.mediumFont,
                                color: color.secondaryColor,
                                opacity: 0.7,
                            }}
                        >
                            Profile
                        </Text>
                    </View>
                </View>
            </TouchableNativeFeedback>
        </View>
    );
};

const Styles = StyleSheet.create({
    child1: {
        flex: 1,
        backgroundColor: color.menuHeaderColor,
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingLeft: 25,
        paddingBottom: 25,
        paddingTop: 40,
    },
    userProfileContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    userProfileImgContainer: {
        marginRight: 15,
    },
});

export default MenuHeader;
