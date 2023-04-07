import React from 'react'
import { Text, View, StyleSheet,Image } from "@react-pdf/renderer";
const css = StyleSheet.create({
    Formate2End:{
        fontSize:9,
        flexDirection:"row"
    },
    Col_4:{
flexBasis:"34%",
borderBottomWidth:1,
borderColor:"#000",
borderStyle:"solid",
borderRightWidth:1,
padding:4,
justifyContent:"space-between",
flexDirection:"column"


    }

})
const Formate2EndPdf = ({data}) => {
  return (
    <>
<View style={css.Formate2End}>

    <View style={[css.Col_4,{gap:3}]}>
<Text>
INSTRUMENT TYPE/ID:-{data.instrumentValue}

</Text>
<Text>X- XRF ANALYER: OXFORD</Text>
<Text>MODEL N0:{data.modalNovalue} </Text>
<Text>SR.NO.811298.</Text>
    </View>
    <View style={css.Col_4}>
        <Text>WITNESSED BY:</Text>
        <Text>INSPECTION AGENCY:</Text>

        </View>
        <View style={css.Col_4}>
        <Text>{data.agencyName.toUpperCase()} TESTING SERVICEST</Text>
        <Text>Authorised sign. </Text>
        </View>
</View>

    </>
  )
}

export default Formate2EndPdf