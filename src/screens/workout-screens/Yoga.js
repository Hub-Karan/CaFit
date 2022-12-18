import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
} from 'react-native';
import React, { useState } from 'react';

// REACT NATIVE VIDEO
import Video from 'react-native-video';

// CONSTANT
import color from '../../constants/colors/color';
import fonts from '../../constants/font-layout/font';

// SVG
import Star from '../../assets/icons/svg-components/Star';
import Like from '../../assets/icons/svg-components/Like';
import Redirect from '../../assets/icons/svg-components/Redirect';
import PlayButton from '../../assets/svg/play-button.svg';

const Yoga = () => {
    const [paused, setPaused] = useState(true);

    return (
        <View style={Styles.yogaMainContainer}>
            <View style={{ height: '33%' }}>
                <Video
                    source={{
                        uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
                    }}
                    style={{ flex: 1 }}
                    paused={paused}
                    posterResizeMode="cover"
                    poster="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/English_Cocker_Spaniel_4.jpg/800px-English_Cocker_Spaniel_4.jpg"
                    resizeMode="cover"
                />
                <View style={Styles.playBtnContainer}>
                    {paused ? (
                        <View
                            style={{
                                backgroundColor: color.textGrey,
                                borderRadius: 50,
                            }}
                        >
                            <TouchableOpacity
                                onPress={() => setPaused(!paused)}
                            >
                                <PlayButton width={60} height={60} />
                            </TouchableOpacity>
                        </View>
                    ) : (
                        <View
                            style={{ flex: 1, width: '100%', height: '100%' }}
                        >
                            <TouchableOpacity
                                onPress={() => setPaused(!paused)}
                            >
                                <PlayButton
                                    style={{ opacity: 0 }}
                                    width={300}
                                    height={50}
                                />
                            </TouchableOpacity>
                        </View>
                    )}
                </View>
            </View>

            <View style={Styles.feedbackContainer}>
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-around',
                    }}
                >
                    <View style={{ marginRight: 5 }}>
                        <Star height={16} width={16} fill={'#FF9B70'} />
                    </View>
                    <View style={{ marginRight: 5 }}>
                        <Star height={16} width={16} fill={'#FF9B70'} />
                    </View>
                    <View style={{ marginRight: 5 }}>
                        <Star height={16} width={16} fill={'#FF9B70'} />
                    </View>
                    <View style={{ marginRight: 5 }}>
                        <Star height={16} width={16} fill={'#FF9B70'} />
                    </View>
                    <Star height={16} width={16} fill={color.textGrey} />
                </View>
                <View
                    style={{
                        flexDirection: 'row',
                    }}
                >
                    <View style={{ marginRight: 20 }}>
                        <Like
                            width={20}
                            height={20}
                            fill={color.secondaryColor}
                        />
                    </View>
                    <View style={{ marginRight: 5 }}>
                        <Redirect
                            width={20}
                            height={20}
                            fill={color.secondaryColor}
                        />
                    </View>
                </View>
            </View>

            <View style={{ flex: 4, paddingHorizontal: 20 }}>
                <View>
                    <Text
                        style={{
                            ...fonts.regularBoldFont4x,
                            color: color.textGrey,
                            marginBottom: 5,
                        }}
                    >
                        Tips
                    </Text>
                </View>
                <ScrollView>
                    <View>
                        <Text
                            style={{
                                ...fonts.regularFont2x,
                                color: color.textGrey,
                            }}
                        >
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Illo iusto excepturi obcaecati, repellendus
                            blanditiis officia quibusdam officiis sit facilis
                            ullam? Necessitatibus cumque, ex dolorem dolorum
                            voluptatum qui! Deleniti ex culpa, obcaecati magnam
                            eius ut non quasi voluptate soluta ipsum blanditiis
                            cupiditate numquam quos mollitia at itaque maxime
                            molestias, provident sed adipisci tenetur!
                            Architecto, doloremque quas ipsum vero eius
                            consequatur? Deserunt voluptatibus incidunt ea
                            libero voluptate ducimus necessitatibus quam. Quod
                            fugiat minus molestias iusto provident saepe tenetur
                            laudantium maxime magni? Ullam tempore laborum
                            soluta consequuntur consequatur unde fuga vitae
                            velit, dignissimos sequi cumque eum, animi id
                            praesentium quis optio earum voluptatibus fugit
                            molestiae repudiandae ipsa dolorum quasi. Possimus,
                            nostrum quas laboriosam voluptatibus perferendis
                            deserunt nihil, quae ipsum repudiandae est atque
                            eius, ipsa magnam. Cupiditate, necessitatibus?
                            Aliquam nemo voluptatem cumque natus. Eum in
                            necessitatibus obcaecati eligendi exercitationem
                            ipsam dolorum fuga commodi doloremque molestiae
                            provident sint, eaque ratione voluptatibus error
                            maiores consequuntur libero laudantium expedita iste
                            labore nostrum optio incidunt corrupti. Quasi
                            incidunt veritatis aperiam voluptatum in animi
                            beatae atque blanditiis repellat vel, reiciendis
                            fugit accusantium molestiae ut impedit soluta
                            obcaecati velit architecto! Veritatis dolor ex, vel
                            quisquam ratione eius quas consequatur earum illum
                            expedita, minus dolore assumenda officiis magnam
                            porro omnis mollitia iste! Expedita voluptatem illo
                            velit. Ab libero est dolorum quidem ipsum ullam iure
                            sint eius tenetur ipsam, provident recusandae,
                            architecto, nemo magnam molestiae expedita. Numquam
                            rem neque, eius deleniti ex debitis, nisi iure
                            possimus est asperiores, quos perspiciatis? Itaque
                            nihil architecto doloremque aut totam. Ut incidunt
                            adipisci porro animi fugit aliquam voluptatum aut
                            sequi praesentium minima repellat, qui quod modi
                            quis! Ipsum reprehenderit deleniti nihil eaque
                            cumque eligendi nulla! Ut sint, labore laborum
                            assumenda veniam animi ducimus quibusdam aperiam
                            nemo esse dolor, voluptatum at facilis voluptate
                            doloremque delectus? Perferendis assumenda quae
                            minus perspiciatis a temporibus velit est aperiam,
                            incidunt magnam.
                        </Text>
                    </View>
                </ScrollView>
            </View>
        </View>
    );
};

const Styles = StyleSheet.create({
    yogaMainContainer: {
        flex: 1,
        backgroundColor: color.secondaryColor,
    },
    feedbackContainer: {
        flex: 0.3,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        marginTop: 5,
    },
    playBtnContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: 70,
        left: 170,
    },
});

export default Yoga;
