import React from 'react'
import { Text, View, StyleSheet,Image } from '@react-pdf/renderer';
import img from '../../../public/Images/poojaimg.png'
const styles = StyleSheet.create({
    FormateCon:{
        width:'100%',
        height:'100%',
        padding:7,
        fontSize:12,
    },
    latterPadFirst:{
     fontSize:10,
     flexDirection:'row',
     justifyContent:'space-between',
     alignItems:'center',
     color:'#187EC7'
    },
    logoNameBox:{
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center',
      marginTop:10,
    },
    nameText:{
 fontSize:24,
 color:'#167FDD',
 fontWeight:600
    },
    plainText:{
      fontSize:18,
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
      height:100
    },
    image: {
      width: '100%',
      height: '100%',
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
   paddingBottom:4
    },
    Address:{
      fontSize:12,
   textAlign:'center'


    }


})
const TopLatterPad = () => {
  return (
    <>
    <View style={styles.FormateCon} >
        <View style={styles.latterPadFirst}>
         <Text>|| shree ganeshaay namah ||</Text>
         <Text>|| shree subhadra maata namah ||</Text>
         <Text>|| shree bhairavanaath namah ||</Text>
        </View>
        <View style={styles.logoNameBox}>
        <View style={styles.imageContainer}>
          <Image style={styles.image}   src="https://www.shutterstock.com/image-vector/jewellery-dummy-vector-logo-template-600w-2165228765.jpg"
 />
        </View>
          <View style={styles.nameBox} >
<Text style={styles.nameText}>Agency Name</Text>
<Text style={styles.plainText}>PMI TESTING SERVICES</Text>

</View>
<View style={styles.InfoBox} >
<Text style={styles.textinfo}>Office: 022-67496465</Text>
<Text style={styles.textinfo}>Mob: 9633219478/9367154189</Text>
<Text style={styles.textinfo}>Email:your_email_id@gmail.com</Text>
</View>
        </View>
        <View style={styles.textContent}>
          <Text>Stailness Steel Duplex Steel, Nickel & Titanium, Brass Alloys, Carbon Steel, Alloy Steel Etc</Text>
        </View>
        <View style={styles.Address}>
          <Text>your Address, Mumbai - 400 004.</Text>
        </View>
    </View>
    </>
  )
}

export default TopLatterPad