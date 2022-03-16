import { View, Text,StyleSheet,FlatList,ScrollView} from 'react-native'
import React from 'react'

import color from "../../constants/colors/color"
import fonts from "../../constants/font-layout/font"
import RightArrows from '../../components/svg-components/RightArrow'
import TipsList from '../../components/TipsList'

const TipsScreen = ({navigation}) => {
  return (
      <ScrollView contentContainerStyle={{flexGrow:1}}>
    <View style={Styles.tipsMainContainer}>
        <TipsList title={"About Training"} onPress={()=> navigation?.navigate("TipsDetail",{title:"About Training"})}/>
        <TipsList title={"How to weight loss"} onPress={()=> navigation?.navigate("TipsDetail",{title:"How to weight loss"})}/>
        <TipsList title={"Introducing About meal plan"} onPress={()=> navigation?.navigate("TipsDetail",{title:"Introducing About meal plan"})}/>
        <TipsList title={"Water and Food"} onPress={()=> navigation?.navigate("TipsDetail",{title:"Water and Food"})}/>
        <TipsList title={"How many times a day to eat"} onPress={()=> navigation?.navigate("TipsDetail",{title:"How many times a day to eat"})}/>
        <TipsList title={"Become Stronger"} onPress={()=> navigation?.navigate("TipsDetail",{title:"Become Stronger"})}/>
        <TipsList title={"Shoes to Training"} onPress={()=> navigation?.navigate("TipsDetail",{title:"Shoes to Training"})}/>
        <TipsList title={"Appeal Tips"} onPress={()=> navigation?.navigate("TipsDetail",{title:"Appeal Tips"})}/>
    </View>
      </ScrollView>
  )
}


const Styles = StyleSheet.create({
    tipsMainContainer:{
        flex:1,
        backgroundColor: color.secondaryColor,
        paddingHorizontal:20,
        paddingVertical:10
    }
})

export default TipsScreen