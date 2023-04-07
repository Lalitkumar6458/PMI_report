function checkStrEmpty(str) {
    return !(str && str.length > 1 && str.split(" ").join("").length > 0);
    }
    
    import { Text, View, StyleSheet } from "@react-pdf/renderer";
    import React from "react";
     
    function CustomTablePDF(props) {
    const { fields = [], data = [] } = props;
    console.log("props",props)
    let tableCol = {
        borderStyle: BORDER_STYLE,
        borderColor: BORDER_COLOR,
        borderBottomColor: "#000",
        borderWidth: 1,
        borderLeftWidth: 0,
        borderTopWidth: 0,
        // flex:"auto"
    };
    return (
        <View style={styles.table}>
            <View style={[styles.tableRow, styles.headerBg]}>
                {fields.map((_item, _idx) => (
                    <View
                        key={_idx}
                        style={[tableCol, { width: _item.width + "%" }]}
                    >
                        <Text
                            style={[
                                styles.tableCellHeader,
                                { textAlign: "center" }
                            ]}
                        >
                            {_item.title}
                        </Text>
                    </View>
                ))}
            </View>
    
            {data.map(
                (item, idx) =>
                    item && (
                        <View key={idx} style={styles.tableRow}>
                            {fields.map((_item, _idx) => {
                                let val = item[_item.value] || "";
                                let value_alt =
                                    (_item.value_alt &&
                                        item[_item.value_alt]) ||
                                    "";

                                    return (
                                        <View
                                            style={[
                                                styles.tableCol,
                                                { width: _item.width + "%" }
                                            ]}
                                        >
                                            <Text
                                                style={[
                                                    styles.tableCell,
                                                    item.style ? item.style : {}
                                                ]}
                                            >
                                                {val}
                                            </Text>
                                        </View>
                                    );
                            
                            })}
                        </View>
                    )
            )}
        </View>
    );
    }
    const BORDER_COLOR = "#000";
const BORDER_STYLE = "solid";
const styles = StyleSheet.create({
headerBg: {
    // backgroundColor: "#aaa"
    borderBottom:0,
},
table: {
    display: "table",
    width: "100%",
    
   
},
tableRow: {
    margin: "auto",
    flexDirection: "row",
    borderStyle: BORDER_STYLE,
    borderColor: BORDER_COLOR,
    borderWidth: 1,
    borderTopWidth:0,
    borderLeft:0,
    borderRight:0,
    width:"100%"
},

tableCellHeader: {
    // margin: 2,
    padding:2,
    fontSize: 10,
    fontWeight: "bold"
    // fontFamily: "CustomRoboto",
},
tableCell: {
    margin: 0,
    padding:2,
    fontSize: 9,
    borderStyle: BORDER_STYLE,
    borderColor: BORDER_COLOR,
    borderRightWidth:1,
    height:25,
    textAlign:"center",
 
    // fontFamily: "CustomRoboto",
},
textCenter: {
    textAlign: "center"
},
border_none:{
    borderRightWidth:0
}
});

    export default CustomTablePDF