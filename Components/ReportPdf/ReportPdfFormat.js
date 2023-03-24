import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import AlloysPart from './AlloysPdfPart';
// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4',
    padding:"10px 10px",
    width:"100%"
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  },
  section_main:{
    border:"1px solid #000",
    width:"100%",
    height:"95vh"
  },
  blank_space:{
    height:"150px",
    width:"100%",
    border:"1px solid #000",

  },
  heading_box:{
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
    border:"1px solid #000",
    fontSize:"10px",
    padding:"2px"
  },
  detailsBox:{
    display:"flex",
    flexDirection:"row",
    fontSize:"11px",
    width:"100%"
  },
  col_4:{
border:"1px solid #000",
height:"70px",
flexGrow: 1,
padding:"5px",
display:"flex",
gap:"5px"

  }

});

// Create Document Component
const MyDocument = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section_main}>
<View style={styles.blank_space}>

</View>
<View style={styles.reportDetailbox}>
<View style={styles.heading_box}> <Text >POSITIVE MATERIAL IDENTIFICTION REPORT</Text></View>
<View style={styles.detailsBox}>
  <View style={styles.col_4}>
   <Text>PMI REPORT NO:-MPT-00749997. </Text>
   <Text>Purchase Order: </Text>

   <Text>Material Specification/Grade:
Inconel-718 </Text>

  </View>
  <View style={styles.col_4}>
    <Text>Party Name: Address:K.C. IMPEX</Text>
    <Text>Testing Agency :pooja PMI TESTING</Text>
    <Text>PMI Location : Mumbai -400 004 (India)</Text>
  </View>
  <View style={styles.col_4}>
  <Text> DATE:29/10/2022</Text>
    <Text >Page No.6093</Text>
  </View>
</View>
<AlloysPart/>
</View>


      </View>
    </Page>
  </Document>
);
export default MyDocument