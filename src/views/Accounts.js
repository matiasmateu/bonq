import React from "react";
import { View, StyleSheet } from "react-native";
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, Grid, Col,H1 } from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';

const AccountsView = (accounts) => {
  let IconComponent = Ionicons;
  const accountList = accounts.accounts
  console.log(accountList[0])
  return (
    <Container>
    <Header />
    <H1 style={styles.h1}>Accounts</H1>
    <Grid style={styles.grid}>
      <Col style={styles.columns}>
        <View style={styles.iconsTop1}>
          <IconComponent name={`ios-qr-scanner`} size={20} color={'white'}  />
        </View>
        <Text style={styles.primaryText}>Scan</Text>
      </Col>
      <Col style={styles.columns}>
        <View style={styles.iconsTop2}>
          <IconComponent name={`ios-arrow-down`} size={20} color={'white'}/>
        </View>  
        <Text style={styles.primaryText}>Request</Text>
      </Col>
      <Col style={styles.columns}>
        <View style={styles.iconsTop3}>
          <IconComponent name={`ios-arrow-up`} size={20} color={'white'} />
        </View>
        <Text style={styles.primaryText}>Send</Text>
      </Col>
    </Grid>
    <Grid style={styles.grid}>
      <Text style={styles.secondaryText}>Total:    {accountList[0].state} €</Text>
    </Grid>
    <Grid style={styles.grid}>
      <Col style={{backgroundColor:'gray'}}>
      
      </Col>
      <Col style={{backgroundColor:'yellow'}}>
      
      </Col>
    </Grid>
    <Grid style={styles.grid}>
      <Col style={{backgroundColor:'yellow'}}>
      
      </Col>
      <Col style={{backgroundColor:'gray'}}>
      
      </Col>
    </Grid>
    <Grid style={styles.grid}>
      <Col style={{backgroundColor:'gray'}}>
      
      </Col>
      <Col style={{backgroundColor:'yellow'}}>
      
      </Col>
    </Grid>
    
    <Grid style={styles.grid}>
      <Text style={styles.primaryText}>VISTA ARCHIVADA</Text>
    </Grid>

      
  </Container>
 
  );
}

const styles = StyleSheet.create({
  columns: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height:50,
  },
  grid:{
    marginTop:24,
    marginLeft:24, 
    marginRight:24
  },
  h1:{ 
    fontWeight:"bold",
    marginTop:24, 
    marginLeft:24 
  },
  iconsTop1:{
    backgroundColor:'#2de0c7', 
    padding:15,
    borderRadius: 70, 
  },
  iconsTop2:{
    backgroundColor:'#2196f3', 
    padding:15,
    borderRadius: 70, 
  },
  iconsTop3:{
    backgroundColor:'#ff7819', 
    padding:15,
    borderRadius: 70, 
  },
  primaryText:{
    marginTop:12
  },
  secondaryText:{
    color:'gray'
  }
});

export default AccountsView;