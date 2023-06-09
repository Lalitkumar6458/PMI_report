import React from 'react'
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
const css= StyleSheet.create({
    table: {
      display: 'table',
      width: 'auto',
      borderStyle: 'solid',
      borderWidth: 1,
      borderRightWidth: 0,
      borderBottomWidth: 0,
    },
    tableRow: {
      margin: 'auto',
      flexDirection: 'row',
    },
    tableColHeader: {
      width: 'auto',
      borderStyle: 'solid',
      borderBottomWidth: 1,
      borderRightWidth: 1,
    },
    tableCol: {
      width: 'auto',
      borderStyle: 'solid',
      borderBottomWidth: 1,
      borderRightWidth: 1,
    },
    tableCellHeader: {
      margin: 'auto',
      marginTop: 5,
      fontSize: 10,
      fontWeight: 500,
      textAlign: 'center',
    },
    tableCell: {
      margin: 'auto',
      marginTop: 5,
      fontSize: 10,
      textAlign: 'center',
    },
    TableSizeCon:{
      fontSize:"10px",
    }
  });
const SizeTable = () => {
    const data = [
        {srno:1,qty:"3px",size:"ALLEN CAP SCREW SIZE;M12,-120MM LONG","MO%":"3.05",'NI%':"52.94","W%":"-","CR%":"18.79","NB%":"5.30","TI%":"1.07","FE%":"BAL",Heatno:"Xehd",Remark:"Ok"},
        {srno:2,qty:"22PC",size:"FULL THREADED STUD BOLT SIZE; M 12,-150MM LONG","MO%":"3.05",'NI%':"52.94","W%":"-","CR%":"18.79","NB%":"5.30","TI%":"1.07","FE%":"BAL",Heatno:"Xehd",Remark:"Ok"},
        {srno:3,qty:"45PC",size:"shfgh SIZE; M 12,-150MM LONG","MO%":"3.05",'NI%':"52.94","W%":"-","CR%":"18.56","NB%":"5.90","TI%":"1.07","FE%":"BAL",Heatno:"yui",Remark:"Ok"},
       

      ];
      var dataKeys=Object.keys(data[0])
  return (
   <View style={css.TableSizeCon}>
     <View style={css.table}>
    {/* Header */}
    <View style={css.tableRow}>

        {
            Object.keys(data[0]).map((item)=>{
                return(
                    <View style={css.tableColHeader}>
                    <Text style={css.tableCellHeader}>{item}</Text>
                  </View>
                )
               
            })
        }
     
    </View>
                                  ''
    {/* Rows */}
    {data.map((row,index)=>{
      return(

        <View key={index} style={css.tableRow}>
        {
          dataKeys.map((item,ind)=>{
            return(
              <View style={css.tableCol} key={ind}>
              <Text style={css.tableCell}>{row[item]}</Text>
            </View> 
            )
          })
        }
        
      </View>
      )
     
})}
  </View>
   </View>
  )
}

export default SizeTable