import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
const css = StyleSheet.create({
    alloysCon:{
        display:"flex",
        fontSize:"12px",
        flexDirection:"row",
        borderBottom:"1px solid #000"
    },
    col_4:{
        borderRight:"1px solid #000",
        textAlign:"center",
        flexGrow:1,
    }

})

const AlloysPart=()=>{

    return(
        <View style={css.alloysCon}>
            <View style={css.col_4}>
            <Text style={css.text_h}>Element </Text>
            <View style={css.alloys_box}>
                <View style={css.underBox}>
<Text>Specified
Goods</Text>
                </View>
                <View style={css.underBox}>
                    <Text> In-718</Text>
                    </View>
            </View>
            </View>
            <View style={css.col_4}>
                <Text>Alloy Content, Weight Percent</Text>
                <view style={css.alloystable}>

                </view>
                </View>
                <View style={css.col_4}>
                <Text>Remark</Text>
                <View style={css.remark_css}>
                    <Text>On Reported Element</Text>
                </View>
                </View>
        </View>
    )
}
export default AlloysPart