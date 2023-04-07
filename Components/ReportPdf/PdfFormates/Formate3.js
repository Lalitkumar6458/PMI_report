import React from 'react'
import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";
const css = StyleSheet.create({
    mainFormateCon:{
        fontSize:9,

    },
    top_heading:{
        flexDirection:"row",
        borderWidth:1,
        borderColor:"#000",
        borderStyle:"solid",
        borderLeftWidth:0,
        borderRightWidth:0,
    },
    top_view1:{
     flexBasis:"80%",
     flexDirection:"column",
     gap:2,
     borderRightWidth:1,
     borderColor:"#000",
     borderStyle:"solid",
    },
    pageText:{
 textAlign:"center",
    },
    InfoBox:{
        flexDirection:"row",
width:"100%",
borderBottomWidth:1,
borderColor:"#000",
borderStyle:"solid",

    },
    text_top1:{
     
        borderBottomWidth:1,
        borderColor:"#000",
        borderStyle:"solid",
        padding:2,
        
    },
    pageView:{
        flexBasis:"20%",
        display:"flex",
        alignContent:"center",
        justifyContent:"center"
    },

    box1:{
     borderRightWidth:1,
        borderColor:"#000",
        borderStyle:"solid",
        flexBasis:"25%",
        flexDirection:"column",
        gap:2,
    },
    textinfo:{
        borderBottomWidth:1,
        borderColor:"#000",
        borderStyle:"solid",
        padding:2,
    }

})
const Formate3 = ({data}) => {
  return (
   <>
   <View style={css.mainFormateCon}>
    <View style={css.top_heading}>
        <View style={css.top_view1}>
<Text style={css.text_top1}>POSITIVE MATERIAL IDENTIFICTION REPORT</Text>
<Text style={[css.text_top1, {borderBottomWidth:0}]}>BULK MATERIAL(AT VENDOR WORK)</Text>
        </View>
        <View style={css.pageView}>

        <Text style={css.pageText}>PAGE:1 OF 1</Text>
        </View>
    </View>
    <View style={css.InfoBox}>
        <View style={css.box1}>
<Text style={css.textinfo}>PMI Report No</Text>
<Text style={css.textinfo}>Date</Text>

<Text style={css.textinfo}>P.O.NO</Text>

<Text style={css.textinfo}>P.O Date</Text>
<Text style={[css.textinfo,{borderBottomWidth:0}]}>Lot No.</Text>


        </View>
        <View style={css.box1}>
        <Text style={css.textinfo}>{data.reportNo}</Text>
<Text style={css.textinfo}>{data.date}</Text>

<Text style={css.textinfo}>{data.poNo}</Text>

<Text style={css.textinfo} >-</Text>
<Text  style={[css.textinfo,{borderBottomWidth:0}]}>-</Text>
            </View>
            <View style={css.box1}>
            <Text style={css.textinfo}>Client</Text>
<Text style={css.textinfo}>Vendor</Text>

<Text style={css.textinfo}>Bluk Item Types(As per reqstn.)</Text>

<Text style={css.textinfo}>SPECIFIED GRADE</Text>
<Text style={[css.textinfo,{borderBottomWidth:0}]}>PMI Location</Text>
            </View>
            <View style={css.box1}>
            <Text style={css.textinfo}>{data.partyname}</Text>
<Text style={css.textinfo}>-</Text>

<Text style={css.textinfo}>SS Sheet & Pipe</Text>

<Text style={css.textinfo}>{data.Gradename}</Text>
<Text style={[css.textinfo,{borderBottomWidth:0}]}>{data.locationName}</Text>
            </View>
    </View>
   </View>
   </>
  )
}

export default Formate3