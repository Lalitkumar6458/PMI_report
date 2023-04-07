import { Document, Page, View, Text, StyleSheet } from '@react-pdf/renderer';
const data23 = [
   {
    Ni:"11-14",
    Cr:"2max",
    Mn:0.23,
    Co:"2-3",
    Cu:"23",
    Fe:"BAL",
    MO:34,
   }
    // Add more rows as needed
  ];
  const PdfTable=({data})=>{
    const styles = StyleSheet.create({
        table: {
          display: 'table',
          width: '100%',
          margin: 'auto',
        //   marginBottom: 10,
          borderStyle: 'solid',
          borderWidth: 1,
          borderRightWidth: 0,
          borderBottomWidth: 0,
          borderColor:"#000",
         

        },
        tableRow: {
          flexDirection: 'row',
        },
        tableColHeader: {
            width:"40px",
          backgroundColor: '#FFFFFF',
          padding: 2,
          borderStyle: 'solid',
          borderWidth: 1,
          borderLeftWidth: 0,
          borderTopWidth: 0,
          fontSize:"10px",
          borderColor:"#000",

        },
        tableCol: {
         width:"40px",
          backgroundColor: '#FFFFFF',
          padding: 2,
          borderStyle: 'solid',
          borderWidth: 1,
          borderColor:"#000",
          borderLeftWidth: 0,
          borderTopWidth: 0,
          fontSize:"10px",

        },
      });
    return(
        <View style={styles.table}>
      <View style={styles.tableRow}>
        {Object.keys(data[0]).map(colHeader => (
          <View key={colHeader} style={styles.tableColHeader}>
            <Text>{colHeader.toUpperCase()}</Text>
          </View>
        ))}
      </View>
      {data.map(row => (
        <View key={row.id} style={styles.tableRow}>
          {Object.values(row).map((col, index) => (
            <View key={index} style={styles.tableCol}>
              <Text>{col}</Text>
            </View>
          ))}
        </View>
      ))}
    </View>
    )
  }
  export default PdfTable