import {
    View,
    Text,
    StyleSheet,
    TextInput,
    KeyboardAvoidingView,
    Keyboard,
} from 'react-native';
import React from 'react';

// CONSTANT
import color from '../../constants/colors/color';
import fonts from '../../constants/font-layout/font';

// SCREEN
import Running from '../running-screens/Running';

// COMPONENT
import CustomButton from '../../components/CustomButton';

const Support = () => {
    return (
        <KeyboardAvoidingView
            style={{ flexGrow: 1 }}
            behavior="height"
            onTouchStart={() => Keyboard.dismiss()}
        >
            <View style={Styles.supportMainContainer}>
                <View style={{ flex: 0.8, padding: 20 }}>
                    <View>
                        <Text
                            style={{
                                ...fonts.regularBoldFont4x,
                                color: color.textGrey,
                            }}
                        >
                            What do you need from us ?
                        </Text>
                        <View style={Styles.emailContainer}>
                            <TextInput
                                placeholder="Email"
                                keyboardType="email-address"
                                placeholderTextColor={color.textGrey}
                                style={{
                                    ...fonts.regularBoldFont4x,
                                    color: color.textGrey,
                                }}
                            />
                        </View>
                        <View style={Styles.problemContainer}>
                            <TextInput
                                placeholder="Enter your problem"
                                placeholderTextColor={color.textGrey}
                                multiline={true}
                                height={'100%'}
                                textAlignVertical="top"
                                style={{
                                    ...fonts.regularBoldFont4x,
                                    color: color.textGrey,
                                }}
                            />
                        </View>
                    </View>
                </View>
                <View style={{ flex: 0.2, justifyContent: 'center' }}>
                    <View style={Styles.viewBtnContainer}>
                        <CustomButton title="Send" color="white" />
                    </View>
                </View>
            </View>
        </KeyboardAvoidingView>
    );
};

const Styles = StyleSheet.create({
    supportMainContainer: {
        flex: 1,
        backgroundColor: color.secondaryColor,
    },
    emailContainer: {
        borderWidth: 1,
        borderRadius: 10,
        marginVertical: 20,
        paddingHorizontal: 10,
    },
    problemContainer: {
        borderWidth: 1,
        borderRadius: 10,
        marginVertical: 20,
        paddingHorizontal: 10,
        height: 200,
    },
    viewBtnContainer: {
        backgroundColor: color.primaryColor,
        width: '90%',
        alignSelf: 'center',
        borderRadius: 30,
        overflow: 'hidden',
    },
});

export default Support;
