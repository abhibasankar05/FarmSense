import React from 'react';
import { Page, Document, Text, View, StyleSheet } from '@react-pdf/renderer';

const formatDate = (isoDate) => {
    const date = new Date(isoDate);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
  
    return `${day}-${month}-${year}`;
  };
const styles = StyleSheet.create({
  page: {
    padding: 30,
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  section: {
    marginBottom: 20,
  },
  label: {
    fontWeight: 'bold',
  },
  content: {
    marginLeft: 10,
  },
  table: {
    display: 'table',
    width: 'auto',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#bfbfbf',
  },
  tableRow: {
    flexDirection: 'row',
  },
  tableCell: {
    width: '33.33%',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#bfbfbf',
    padding: 5,
    textAlign: 'center',
  },
});

const PdfDocument = ({ orderpdf }) => (
  <Document>
    <Page style={styles.page}>
      <View style={styles.header}>
        <Text>Invoice</Text>
        <Text>{orderpdf.orgname} Pvt Limited</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.label}>Organization Information:</Text>
        <Text></Text>
        <View style={styles.content}>
          <Text>Org ID: {orderpdf.orgid}</Text>
          <Text>Org Name: {orderpdf.orgname}</Text>
          <Text>Org Email: {orderpdf.orgemail}</Text>
          <Text>Org Phone: {orderpdf.orgnumber}</Text>
          <Text>Org Address: {orderpdf.orgaddress.area}</Text>
        </View>
      </View>
      <View style={styles.section}>
        <Text style={styles.label}>Farmer Details:</Text>
        <Text></Text>
        <View style={styles.content}>
          <Text>Farmer ID: {orderpdf.farmerid}</Text>
          <Text>Farmer Name: {`${orderpdf.farmername} ${orderpdf.farmermiddelname} ${orderpdf.farmerlastname}`}</Text>
          <Text>Farmer Address: {orderpdf.farmeraddress.area}</Text>
          <Text>Adhar Number: {orderpdf.farmeradharnumber}</Text>
          <Text>WhatsApp Number: {orderpdf.farmerwhatssappnumber}</Text>
          <Text>Alternate Number: {orderpdf.farmeralternatenumber}</Text>
        </View>
      </View>
      <View style={styles.section}>
        <Text style={styles.label}>Order Details:</Text>
        <Text></Text>
        <View style={styles.content}>
          <Text>Order ID: {orderpdf.orderid}</Text>
          <Text>Order Date: {formatDate(orderpdf.orderdate)}</Text>
          <Text>Price (Rs): {orderpdf.price}</Text>
          <Text>Total Amount (Rs): {orderpdf.totalammount}</Text>
          <Text>Order Status: {orderpdf.orderstatus}</Text>
          <Text>Payment Status: {orderpdf.paymentstatus}</Text>
        </View>
      </View>
      <View style={styles.section}>
        <Text style={styles.label}>Bill Details:</Text>
        <Text></Text>
        <View style={styles.table}>
          <View style={styles.tableRow}>
            <Text style={styles.tableCell}>Bill ID</Text>
            <Text style={styles.tableCell}>Date</Text>
            <Text style={styles.tableCell}>Net Weight</Text>
          </View>
          {orderpdf.bills.map((bill, index) => (
            <View style={styles.tableRow} key={index}>
              <Text style={styles.tableCell}>{bill.billid}</Text>
              <Text style={styles.tableCell}>{formatDate(bill.date)}</Text>
              <Text style={styles.tableCell}>{bill.netweight}</Text>
            </View>
          ))}
        </View>
      </View>
      <View style={styles.section}>
        <Text>Farmer's Signature: ________________________</Text>
      </View>
    </Page>
  </Document>
);

export default PdfDocument;