import React from 'react'
import { Text, View, StyleSheet,Image } from "@react-pdf/renderer";
import img from '../../public/Images/poojaimg.png'
const ReportEnd = ({data}) => {
  return (
  <>
  <View style={css.reprotLastCon}>
    <View style={css.Row_box}>
        <View style={css.col_8}>
          <View style={css.modal_auth}>
            <View style={css.two_box} >
            <View style={css.machine_info}>
            <Text>Instrument ID:{data.instrumentValue}
</Text>
<Text>Models No.: {data.modalNovalue}</Text>
</View>
<View style={css.Witnesstext}>
            <Text>Witnessed By:</Text>
            </View>
            </View>
          
           
            <View style={css.modal_Notes}>
                
            <Text>Notes: 1. The above report The above report relates only to the sample 
analyzed.</Text>
<Text>2. No part of the report may be alerted, adjusted without the knowledge of 
PMI Analytical Services.
</Text>

            </View>
          </View>
    
            </View>
        
        <View style={css.col_4}>
        <Image
  style={css.image}
  src="https://image.shutterstock.com/image-photo/tiny-floating-house-on-lake-600w-1980476267.jpg"
/> 
<Text>Operator Signature & Stamp</Text>
        </View>
    </View>
  </View>
  </>
  )
}
const css = StyleSheet.create({
    reprotLastCon:{
        fontSize:10,
    },
    Row_box:{
        display:"flex",
        alignItems:"center",
        flexDirection:"row",
        marginTop:20,
        borderWidth:1,
        borderStyle:"solid",
        borderColor:"#000",
        borderLeftWidth:0,
        borderRightWidth:0

    },
    col_8:{
        display:"flex",
        alignItems:"center",
        flexDirection:"row",
        flexBasis:"70%",
        borderRightWidth:1,
        borderStyle:"solid",
        borderColor:"#000",
    
    },
    col_4:{
        flexBasis:"30%",
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
   
    },
    two_box:{
        display:"flex",
        alignItems:"center",
        flexDirection:"row",
        borderBottomWidth:1,
        borderStyle:"solid",
        borderColor:"#000",
    },
    Witnesstext:{
        flexBasis:"50%",
        padding:5,

    },
    machine_info:{
        flexBasis:"50%",
        borderRightWidth:1,
        borderStyle:"solid",
        borderColor:"#000",
  padding:5,

    },
    modal_auth:{
       

    },
    modal_Notes:{
  padding:5,

    },
    image: {
        width: 60,
        height: 40,
      }
    

})
export default ReportEnd