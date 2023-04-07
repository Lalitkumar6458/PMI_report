import React from "react";
import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";
const css = StyleSheet.create({
  formate2Con: {
    fontSize: 11,
    flexDirection: "row",
    borderBottomWidth:1,
    borderColor:"#000",
    borderStyle:"solid",
    

  },
  Col_6: {
    flexBasis: "50%",
    flexDirection:"column",
    gap:2,
    borderRightWidth:1,
    borderColor:"#000",
    borderStyle:"solid",
    
    
  },
  text_1:{
    borderBottomWidth:1,
    borderColor:"#000",
    borderStyle:"solid",
    padding:2,


  },
  text_1_last:{
    padding:2,
  },
  GradeName:{
    borderBottomWidth:0
  }

});
const Formate2 = () => {
  return (
    <>
      <View style={css.formate2Con}>
        <View style={css.Col_6}>
          <Text style={css.text_1}>PMI REPORT NO:-MPT-00749997.</Text>
          <Text style={css.text_1}>DATE:-25/01/2023</Text>
          <Text style={[css.text_1,css.GradeName]}>SPECIFIED GRADE:- SS 316/316L</Text>
      

        </View>
        <View style={css.Col_6}>
          <Text  style={css.text_1}>M/S:- UNNATI METALS & ALLOYS </Text>
       
            <Text  style={css.text_1}>LOCATION:-MUMBAI </Text>
            <Text  style={css.text_1}>PO NO: VMC/005R1/22-23.DT-01.01.23 </Text>
         
          <Text style={css.text_1_last} >CLIENT NAME:-</Text>
        </View>
      </View>
    </>
  );
};

export default Formate2;
