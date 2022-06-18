import React from "react";
import { Page, Text, View, Document,StyleSheet,Font } from '@react-pdf/renderer';
import font from "../fonts/Roboto-Regular.ttf"
Font.register({ family: 'Roboto', src: font })

const styles = StyleSheet.create({
    page:{
      paddingTop: '10mm',
      paddingBottom: '10mm',
        paddingLeft: '5mm',
        paddingRight: '5mm',
        fontFamily: 'Roboto',
    },
    wrapper: {
        display: 'flex',
        width: '100%',
        justifyContent: 'space-around',
        flexDirection: "row",
        fontSize: 12,
        fontFamily: 'Roboto',
    },
    columnA: {
        width: '15%',
        textAlign: 'center',
        display: 'flex',
        flexDirection: "column",
        fontFamily: 'Roboto',
    },
    columnN: {
        width: '9%',
        textAlign: 'center',
        display: 'flex',
        flexDirection: "column",
        fontFamily: 'Roboto',
    },
    cell: {
        width: '100%',
        border: '1px solid lightgray',
        height: '10mm',
        paddingTop: '2mm',
        paddingBottom: '2mm',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        display: 'flex',
        marginBottom: '1mm',
        fontFamily: 'Roboto',
        fontSize: 12,
    },
    cellModel:{
        width: '100%',
        border: '1px solid lightgray',
        height: '10mm',
        maxLines: 2,
        textOverflow: 'ellipsis',
        overflow: 'hidden',
        paddingRight: '1mm',
        backgroundColor: '#e6ebed',
        textAlign: 'left',
        paddingLeft: '2mm',
        display: 'flex',
        fontSize: 12,
        marginBottom: '1mm',
        fontFamily: 'Roboto',
    },
    columnHeadersModel:{
        width: '100%',
        border: '1px solid lightgray',
        height: '10mm',
        paddingTop: '2mm',
        paddingBottom: '2mm',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        backgroundColor: '#e6ebed',
        textAlign: 'center',
        paddingLeft: '2mm',
        display: 'flex',
        marginBottom: '1mm',
        fontFamily: 'Roboto',
    },
    columnHeaders:{
        width: '100%',
        border: '1px solid lightgray',
        height: '10mm',
        paddingTop: '2mm',
        paddingBottom: '2mm',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        backgroundColor: '#e6ebed',
        textAlign: 'center',
        paddingLeft: '2mm',
        display: 'flex',
        marginBottom: '1mm',
        fontFamily: 'Roboto',
    },
    pageNumber: {
        position: 'absolute',
        fontSize: 8,
        bottom: '5mm',
        left: 0,
        right: 0,
        textAlign: 'center',
        color: 'grey',
    },
    pdfDate:{
        position: 'absolute',
        fontSize: 8,
        top: '2,5mm',
        right: '5mm',
        textAlign: 'center',
        color: 'grey',
    },
    pdfName:{
        position: 'absolute',
        fontSize: 8,
        top: '2,5mm',
        left: '5mm',
        textAlign: 'center',
        color: 'grey',
    }
});
let date = new Date();
const currDateTime = date.toLocaleString();

export default function PDFFile(props) {
    return (
    <Document author={'KB'}>
        <Page orientation={"landscape"} style={styles.page} wrap>
            <Text style={styles.pdfName} fixed>Price Checker</Text>
            <Text style={styles.pdfDate} fixed>{`${currDateTime}`}</Text>

            <View style={styles.wrapper}>

                <View style={styles.columnA}>
                <Text style={styles.columnHeadersModel} fixed>Model</Text>
                    {props.data.houseLock.map((item, index) => {return (
                        <Text style={styles.cellModel}>{item.model}</Text>);})}
                    <Text style={styles.cellModel}>Model Long name some very long model name Model Long name some very long model name</Text>
                </View>

                <View style={styles.columnN}>
                    <Text style={styles.columnHeaders} fixed>HouseLock</Text>
                    {props.data.houseLock.map((item, index) => {return (
                        <Text style={styles.cell}>{item.priceHouseLock}</Text>);})}
                </View>

                <View style={styles.columnN}>
                    <Text style={styles.columnHeaders} fixed>Kremin</Text>
                    {props.data.kremin.map((item, index) => {return (
                        <Text style={styles.cell}>{item.priceKremin}</Text>);})}
                </View>

                <View style={styles.columnN}>
                    <Text style={styles.columnHeaders} fixed>topZamok</Text>
                    {props.data.topZamok.map((item, index) => {return (
                        <Text style={styles.cell}>{item.priceTopZamok}</Text>);})}
                </View>

                <View style={styles.columnN}>
                    <Text style={styles.columnHeaders} fixed>zamokUkr</Text>
                    {props.data.zamokUkr.map((item, index) => {return (
                        <Text style={styles.cell}>{item.priceZamokUkr}</Text>);})}
                </View>

                <View style={styles.columnN}>
                    <Text style={styles.columnHeaders} fixed>ua740</Text>
                    {props.data.ua740.map((item, index) => {return (
                        <Text style={styles.cell}>{item.price740}</Text>);})}
                </View>

                <View style={styles.columnN}>
                    <Text style={styles.columnHeaders} fixed>kupiZamok</Text>
                    {props.data.kupiZamok.map((item, index) => {return (
                        <Text style={styles.cell}>{item.priceKupiZamok}</Text>);})}
                </View>

                <View style={styles.columnN}>
                    <Text style={styles.columnHeaders} fixed>ukrLock</Text>
                    {props.data.ukrLock.map((item, index) => {return (
                        <Text style={styles.cell}>{item.priceUkrLock}</Text>);})}
                </View>

                <View style={styles.columnN}>
                    <Text style={styles.columnHeaders} fixed>zamochniki</Text>
                    {props.data.zamochniki.map((item, index) => {return (
                        <Text style={styles.cell}>{item.priceZamochniki}</Text>);})}
                </View>

                <View style={styles.columnN}>
                    <Text style={styles.columnHeaders} fixed>svitZamkiv</Text>
                    {props.data.svitZamkiv.map((item, index) => {return (
                        <Text style={styles.cell}>{item.priceSvitZamkiv}</Text>);})}
                </View>
            </View>

            <Text style={styles.pageNumber} render={({ pageNumber, totalPages }) => (
                `${pageNumber} / ${totalPages}`
            )} fixed />


        </Page>
    </Document>
    );

}
