import React from 'react'
import { Text, View, StyleSheet,Image } from '@react-pdf/renderer';
import img from '../../../public/Images/poojaimg.png'

const TopLatterPad = ({latterPadFormNo}) => {

const formId=localStorage.getItem('FormateNO')
  const LaterPadData=JSON.parse(localStorage.getItem('LatterPadData'))||{}
  const Img=localStorage.getItem('base64Img')

      const Color_firstText=formId==2?'rgb(168, 16, 16)':'#187EC7'
      const Colorname=formId==2?'rgb(168, 16, 16)':'#167FDD'

  const styles = StyleSheet.create({
    FormateCon:{
        width:'100%',
        height:'100%',
        padding:7,
    },
    latterPadFirst:{
     fontSize:9,
     flexDirection:'row',
     justifyContent:'space-between',
     alignItems:'center',
     color:Color_firstText
    },
    logoNameBox:{
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center',
      marginTop:10,
    },
    nameText:{
 fontSize:25,
 color:Colorname,
 fontWeight:600
    },
    plainText:{
      fontSize:19,
      marginTop:5,
 fontWeight:500


    },
    InfoBox:{
fontSize:10,
    },
    nameBox:{
    textAlign:'center',
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center'
    },
    imageContainer: {
      width: 100,
      height:75
    },
    image: {
      width: '100%',
      height: '100%',
      objectFit:'fill'
    },
    textinfo:{
      marginBottom:4
    },
    textContent:{
   fontSize:13.5,
   borderBottomWidth:1,
   borderBottomStyle:'solid',
   width:'100%',
   textAlign:'center',
   paddingBottom:4,
   marginTop:6
    },
    Address:{
      fontSize:12,
   textAlign:'center'


    }
,
NewForm:{
  backgroundColor:'rgb(168, 16, 16)',
  color:'#fff',
  height:25,
  display:'flex',
  alignItems:'center',
  justifyContent:'center'
}

})

  return (
    <>
    <View style={styles.FormateCon} >
        <View style={styles.latterPadFirst}>
         <Text>|| {LaterPadData.FirstLinetext1} ||</Text>
         <Text>|| {LaterPadData.FirstLinetext2} ||</Text>
         <Text>|| {LaterPadData.FirstLinetext3} ||</Text>
        </View>
        <View style={styles.logoNameBox}>
        <View style={styles.imageContainer}>
          <Image style={styles.image}   src={Img}
 />
        </View>
          <View style={styles.nameBox} >
<Text style={styles.nameText}>{LaterPadData.Agencyname}</Text>
<Text style={styles.plainText}>{LaterPadData.textP}</Text>

</View>
<View style={styles.InfoBox} >
<Text style={styles.textinfo}>Office: {LaterPadData.officeNo}</Text>
<Text style={styles.textinfo}>Mob: {LaterPadData.mobileNo}</Text>
<Text style={styles.textinfo}>Email:{LaterPadData.email}</Text>
</View>
        </View>
        {
          formId!=2?<View style={styles.textContent}>
          <Text>{LaterPadData.textContent}</Text>
        </View>:null}
        {formId==2?<View style={[styles.Address,styles.NewForm]}>
          <Text>{LaterPadData.address}</Text>
        </View>:
        <View style={styles.Address}>
          <Text>{LaterPadData.address}</Text>
        </View>
        }
        
        
    </View>
    </>
  )
}

export default TopLatterPad