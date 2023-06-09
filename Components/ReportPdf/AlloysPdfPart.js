import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import { BiBorderRight } from 'react-icons/bi';
import PdfTable from './PDfTable';
const css = StyleSheet.create({
    Main_container:{
        width:"100%",
        fontSize:"12px",
      display: 'table',
      alignItems: "stretch",
        flexDirection:"row",
        flexWrap:"wrap",
        fontWeight:500
      
    },
    Infopage:{
        flexBasis:"45%",
         borderRight:"1px solid #000",
        borderBottom:"1px solid #000",
        padding:"5px",
        
    },
    reportno:{
        flexBasis:"30%",
         borderRight:"1px solid #000",
        borderBottom:"1px solid #000",
        padding:"5px",


         
    }
    ,
    Gradename:{
        flexBasis:"30%",
         borderBottom:"1px solid #000",
         
    }
    ,
    chemical_info:{
        flexBasis:"45%",
    }

    ,
    remark:{
flexBasis:"25%",
         borderRight:"1px solid #000",
         borderBottom:"1px solid #000",
    }
    ,
    date_con:{
        flexBasis:"25%",
        padding:"5px",
        borderBottom:"1px solid #000"
    },
    heading_info:{
 width:"100%",
 borderBottom:"1px solid #000",
 textAlign:"center"
 
    },
    heading_info_c:{
        width:"100%",
        textAlign:"center",
        borderRight:"1px solid #000",
        borderLeft:"1px solid #000",


    },
    gap_text:{
       paddingTop:"10px",
        paddingLeft:"10px",
    },
    page_no:{
        marginTop:20
    },
    marTop:{
        marginTop:5
    }


})

const AlloysPart=({data})=>{

    return(
     <View style={css.Main_container}>
<View style={css.reportno}>
<Text >
PMI REPORT NO: {data.reportNo}
</Text>
<Text >
Purchase Order: {data.poNo}
</Text>
<Text >
Stamped by:
</Text>
<Text >
Material Specification/Grade: 
{data.Gradename}
</Text>
</View>
<View style={css.Infopage}>
    <Text >Party Name:{data.partyname}</Text>
    <Text style={css.marTop}>Testing Agency :{data.agencyName}</Text>

    <Text style={css.marTop} >PMI Location :{data.locationName}
</Text>

</View>
<View style={css.date_con}>
    <Text>DATE:{data.date.split("T")[0]}</Text>
    <Text style={css.page_no}>Page No.6093</Text>
</View>
<View style={css.Gradename}>
<View style={css.heading_info}>
    <Text>Element</Text>
    </View>
    <Text style={css.gap_text}>Specified Goods:{data.Gradename}</Text>
</View><View style={css.chemical_info}>
    <View style={css.heading_info_c}>
    <Text>Alloy Content, Weight Percent</Text>
    </View>
    <PdfTable data={data.gradeDataC}  />
</View><View style={css.remark}>
<View style={css.heading_info}>

    <Text>Remark</Text>
    </View>
    <Text style={css.gap_text}>On Reported Element</Text>
</View>


     </View>
    )
}
export default AlloysPart