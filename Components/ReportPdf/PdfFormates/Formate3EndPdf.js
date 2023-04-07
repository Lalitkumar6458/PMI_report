import React from 'react'
import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";
const css = StyleSheet.create({
    FormateEnd3Con:{
        fontSize:9,
        flexDirection:"row",
        borderBottomWidth:1,
        borderColor:"#000",
        borderStyle:"solid",
        // position:"absolute",
        // bottom:0,
        // left:0,
        // right:0,

    }
    ,noteAndOther:{
flexBasis:"70%",
borderRightWidth:1,
borderColor:"#000",
borderStyle:"solid",
    },
    StampAndsign:{
        flexBasis:"30%",
        alignItems:"center",
        justifyContent:"flex-end",
        paddingBottom:5


    },
    modalandInstrument:{
        flexDirection:"row",
        borderBottomWidth:1,
        borderColor:"#000",
        borderStyle:"solid",
        alignItems:"stretch"

    },
    modalAndsrno:{
        borderRightWidth:1,
borderColor:"#000",
borderStyle:"solid",
flexDirection:'column',
flexBasis:"40%",
gap:2,
    }
    ,textEnd:{
        borderBottomWidth:1,
        borderColor:"#000",
        borderStyle:"solid",
        padding:4,
    },
    WitneshAndagency:{
        width:"100%",
        flexBasis:"60%",
 flexDirection:"column",

    },
    Textwithness:{
        borderBottomWidth:1,
        borderColor:"#000",
        borderStyle:"solid",
        height:30,
        padding:3

    },
    noteBox:{
        padding:3,
        flexDirection:"row"

    },
    notetext:{
        
    },notetextBox:{
        flexBasis:"90%"
    }


})
const Formate3EndPdf = () => {

    const NotesText=[{
        id:1,
        text:" The above report The above report relates only to the sample analyzed."
    },
    {
        id:2,
        text:" No part of the report may be alerted, adjusted without the knowledge of PMI Analytical Services."
    }]
  return (
    <>
    <View style={css.FormateEnd3Con}>


<View style={css.noteAndOther}>
<View style={css.modalandInstrument}>
<View style={css.modalAndsrno}>
<Text style={css.textEnd}>MODEL N0:-X-MET8000</Text>
<Text  style={css.textEnd}>INSTRUMENT TYPE/ID:-X-MET8000</Text>
<Text style={[css.textEnd,{borderBottomWidth:0}]}>SR.NO.811298</Text>

</View>
<View style={css.WitneshAndagency}>
    <Text style={css.Textwithness}>WITNESSED BY:
</Text>
    <Text style={[css.Textwithness,{borderBottomWidth:0}]}>INSPECTION AGENCY:</Text>

</View>
</View>
<View style={css.noteBox}>
<Text>Notes:</Text><View style={css.notetextBox}>

    {

NotesText.map((item)=>{

    return(
        <Text key={item.id} style={css.notetext}>{item.id}.{item.text}</Text>
    )
})
    }
  

    </View> 

</View>

</View>
<View style={css.StampAndsign}>
<Text>Operator Signature & Stamp</Text>
</View>
    </View>
    </>
  )
}

export default Formate3EndPdf