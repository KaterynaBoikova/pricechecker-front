import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Font,
} from "@react-pdf/renderer";
import font from "../Assets/fonts/Roboto-Regular.ttf";
import removeUAH from "./helper";
Font.register({ family: "Roboto", src: font });

const styles = StyleSheet.create({
  page: {
    paddingTop: "10mm",
    paddingBottom: "10mm",
    paddingLeft: "5mm",
    paddingRight: "5mm",
    fontFamily: "Roboto",
  },
  wrapper: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    flexDirection: "row",
    fontSize: 12,
    fontFamily: "Roboto",
  },
  columnA: {
    width: "20%",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    fontFamily: "Roboto",
  },
  columnN: {
    width: "8.5%",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    fontFamily: "Roboto",
  },
  cell: {
    width: "100%",
    border: "1px solid #02353c",
    height: "10mm",
    paddingTop: "2mm",
    paddingBottom: "2mm",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    display: "flex",
    marginBottom: "1mm",
    fontFamily: "Roboto",
    fontSize: 12,
  },
  cellModel: {
    width: "100%",
    border: "1px solid #02353c",
    height: "10mm",
    maxLines: 2,
    textOverflow: "ellipsis",
    overflow: "hidden",
    paddingRight: "1mm",
    backgroundColor: "#e9e9e9",
    textAlign: "left",
    paddingLeft: "2mm",
    display: "flex",
    fontSize: 12,
    marginBottom: "1mm",
    fontFamily: "Roboto",
  },
  columnHeadersModel: {
    width: "100%",
    border: "1px solid #02353c",
    height: "10mm",
    paddingTop: "2mm",
    paddingBottom: "2mm",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    backgroundColor: "#e9e9e9",
    textAlign: "center",
    display: "flex",
    marginBottom: "1mm",
    fontFamily: "Roboto",
  },
  columnHeaders: {
    width: "100%",
    border: "1px solid #02353c",
    height: "10mm",
    paddingTop: "2mm",
    paddingBottom: "2mm",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    backgroundColor: "#c1e5f6",
    textAlign: "center",
    display: "flex",
    marginBottom: "1mm",
    fontFamily: "Roboto",
  },
  pageNumber: {
    position: "absolute",
    fontSize: 8,
    bottom: "5mm",
    left: 0,
    right: 0,
    textAlign: "center",
    color: "grey",
  },
  pdfDate: {
    position: "absolute",
    fontSize: 8,
    top: "2,5mm",
    right: "5mm",
    textAlign: "center",
    color: "grey",
  },
  pdfName: {
    position: "absolute",
    fontSize: 8,
    top: "2,5mm",
    left: "5mm",
    textAlign: "center",
    color: "grey",
  },
});
let date = new Date();
const currDateTime = date.toLocaleString();

export default function PDFFile(props) {
  return (
    <Document author={"KB"}>
      <Page orientation={"landscape"} style={styles.page} wrap>
        <Text style={styles.pdfName} fixed>
          Price Checker, prices in UAH
        </Text>
        <Text style={styles.pdfDate} fixed>{`${currDateTime}`}</Text>

        <View style={styles.wrapper}>
          <View style={styles.columnA}>
            <Text style={styles.columnHeadersModel} fixed>
              Model
            </Text>
            {props.data.houseLock.map((item, index) => {
              return (
                <Text style={styles.cellModel} key={index}>
                  {item.model}
                </Text>
              );
            })}
          </View>

          <View style={styles.columnN}>
            <Text style={styles.columnHeaders} fixed>
              HouseLock
            </Text>
            {props.data.houseLock.map((item, index) => {
              return (
                <Text style={styles.cell} key={index}>
                  {removeUAH(item.priceHouseLock)}
                </Text>
              );
            })}
          </View>

          <View style={styles.columnN}>
            <Text style={styles.columnHeaders} fixed>
              Kremin
            </Text>
            {props.data.kremin.map((item, index) => {
              return (
                <Text style={styles.cell} key={index}>
                  {removeUAH(item.priceKremin)}
                </Text>
              );
            })}
          </View>

          <View style={styles.columnN}>
            <Text style={styles.columnHeaders} fixed>
              TopZamok
            </Text>
            {props.data.topZamok.map((item, index) => {
              return (
                <Text style={styles.cell} key={index}>
                  {removeUAH(item.priceTopZamok)}
                </Text>
              );
            })}
          </View>

          <View style={styles.columnN}>
            <Text style={styles.columnHeaders} fixed>
              ZamokUkr
            </Text>
            {props.data.zamokUkr.map((item, index) => {
              return (
                <Text style={styles.cell} key={index}>
                  {removeUAH(item.priceZamokUkr)}
                </Text>
              );
            })}
          </View>

          <View style={styles.columnN}>
            <Text style={styles.columnHeaders} fixed>
              ua740
            </Text>
            {props.data.ua740.map((item, index) => {
              return (
                <Text style={styles.cell} key={index}>
                  {removeUAH(item.price740)}
                </Text>
              );
            })}
          </View>

          <View style={styles.columnN}>
            <Text style={styles.columnHeaders} fixed>
              KupiZamok
            </Text>
            {props.data.kupiZamok.map((item, index) => {
              return (
                <Text style={styles.cell} key={index}>
                  {removeUAH(item.priceKupiZamok)}
                </Text>
              );
            })}
          </View>

          <View style={styles.columnN}>
            <Text style={styles.columnHeaders} fixed>
              UkrLock
            </Text>
            {props.data.ukrLock.map((item, index) => {
              return (
                <Text style={styles.cell} key={index}>
                  {removeUAH(item.priceUkrLock)}
                </Text>
              );
            })}
          </View>

          <View style={styles.columnN}>
            <Text style={styles.columnHeaders} fixed>
              Zamochniki
            </Text>
            {props.data.zamochniki.map((item, index) => {
              return (
                <Text style={styles.cell} key={index}>
                  {removeUAH(item.priceZamochniki)}
                </Text>
              );
            })}
          </View>

          <View style={styles.columnN}>
            <Text style={styles.columnHeaders} fixed>
              SvitZamkiv
            </Text>
            {props.data.svitZamkiv.map((item, index) => {
              return (
                <Text style={styles.cell} key={index}>
                  {removeUAH(item.priceSvitZamkiv)}
                </Text>
              );
            })}
          </View>
        </View>

        <Text
          style={styles.pageNumber}
          render={({ pageNumber, totalPages }) =>
            `${pageNumber} / ${totalPages}`
          }
          fixed
        />
      </Page>
    </Document>
  );
}
