import { Document, Page, Text, View, StyleSheet,Table, TableCell, TableHeader, TableBody } from '@react-pdf/renderer';
import AlloysPart from './AlloysPdfPart';
import PdfTable from './PDfTable';
import DynamicTable from './SizeTable';
import SizeTable from './SizeTable';
import CustomTablePDF from './CustomTable';
import Router,{useRouter} from "next/router";
import ReportEnd from './ReportEnd';
import Formate2 from './PdfFormates/Formate2';
import Formate2EndPdf from './PdfFormates/Formate2EndPdf';
import Formate3 from './PdfFormates/Formate3';
import Formate3EndPdf from './PdfFormates/Formate3EndPdf';
// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding:"10px 10px",
    width:"100%",
    position:"relative"
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
    // border:"1px solid #000",

  },
  heading_box:{
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
    fontSize:"10px",
    padding:"2px",
    borderStyle: "solid",
    borderColor:"#000",
    borderWidth: 1,
    borderLeft:0,
    borderRight:0,
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

  },
  testHeading:{
    width:"100%",
    textAlign:"center",
    fontSize:13,
    borderTopWidth:1,
    borderColor:"#000",
    borderStyle:"solid"
  }

});

StyleSheet.create({
  '@global': {
    body: {
      fontFamily: 'Arial',
    },
  },
});









// Create Document Component
const MyDocument = ({formateNo}) => {
  // const router=useRouter()
  // const{query}=router
  // var getData=JSON.parse(query.data)
const ReportData=JSON.parse(localStorage.getItem("ReportAllDAta"))
console.log(ReportData.reportAddedData,"ReportData")
var tableData=ReportData.reportAddedData
const columns=[

]
var title=""
var witdh="5"
var SizeWidth="33"
var chemicalWidth=5
var classname=""
var lengthData=Object.keys(tableData[0]).filter((x)=>x != "srno"&&x != "size"&&x != "qty"&&x != "remark"&&x != "heatNo"&&x != "key").length
if(Object.keys(tableData[0]).includes("heatNo")){
  SizeWidth="33"
  chemicalWidth=35/lengthData
}else{
  SizeWidth="38"
  chemicalWidth=40/lengthData
}
function pushColumn(title,value,width,index){
  var val={
    title: title.toUpperCase(),
    value:value,
    width: width,
    style:{borderRight:0},
    className: classname,
  }
  if(value != 'key'){
    if(value=="srno"){
      columns.splice(0, 0, val);
    }else if(value == "qty"){
      columns.splice(1, 0, val);

    }else if(value === "size"){
      columns.splice(1, 0, val);

    }else if (value==="heatNo"){
        var ind=Object.keys(tableData[0]).length-3
        console.log("ind",ind)
      columns.splice(ind, 0, val);

    }
      else{
  columns.push(val)
}
  
}
}
console.log(" tableData[0]", tableData[0])
for(let i in tableData[0]){
  if(i == "srno"|| i == "qty"){

    if(i == "srno"){
    pushColumn(i,i,"6",0)

    }else{
    pushColumn(i,i,"6",1)
    }

  }else if(i == "size"){
    pushColumn("Size (Description)",i,SizeWidth,2)
  }else if(i != "remark"&&i!="heatNo"&&i != "size"&&i != "qty"&& i != "srno"){
    pushColumn(i,i,chemicalWidth)
  }
  else if(i == "remark"||i=="heatNo"){
    pushColumn(i,i,"10")
  }
  else{
    
  }
 
}

console.log("ReportData",ReportData,"getData")
  return(
<Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section_main}>
<View style={styles.blank_space}>

</View>
<View style={styles.testHeading}><Text>TEST REPORT</Text></View>
<View style={styles.reportDetailbox}>

{
  formateNo===1?(<View>
    <View style={styles.heading_box}> <Text >POSITIVE MATERIAL IDENTIFICTION REPORT</Text></View>
    <AlloysPart data={ReportData}/>
    <CustomTablePDF fields={columns} data={ReportData.reportAddedData} />
    <ReportEnd data={ReportData}/>
    </View>):null
}

  {
     formateNo===2?(<View>
      <View style={styles.heading_box}> <Text >POSITIVE MATERIAL IDENTIFICTION REPORT</Text></View> 
      <Formate2 data={ReportData} />
      <CustomTablePDF fields={columns} data={ReportData.reportAddedData} />
       <Formate2EndPdf data={ReportData} />
      </View>):null

  }
{
  formateNo===3?(<View>
    <Formate3 data={ReportData}/>
    <CustomTablePDF fields={columns} data={ReportData.reportAddedData} />
    <Formate3EndPdf data={ReportData}/>
    </View>):null
}


</View>



      </View>
    </Page>
  </Document>
  )
}
  

export default MyDocument