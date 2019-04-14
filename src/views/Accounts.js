import React from "react";
import { View, StyleSheet } from "react-native";
import { Container, Header, Text, Grid, Col, H1, Body, List, ListItem, Thumbnail, Content, Left, Right, Button } from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AccountImage from '../../assets/account.png'
import CommonAccountImage from '../../assets/commonaccount.png'
import NewAccountImage from '../../assets/newaccount.png'
import InviteImage from '../../assets/invite.png'

const AccountsView = (accounts) => {
  let IconComponent = Ionicons;
  const accountList = accounts.accounts
  return (
    <Container>
      <Header />
      <H1 style={styles.h1}>Accounts</H1>
      <Grid style={styles.grid}>
        <Col style={styles.columns}>
          <View style={styles.iconsTop1}>
            <IconComponent name={`ios-qr-scanner`} size={30} color={'white'} />
          </View>
          <Text style={styles.primaryText}>Scan</Text>
        </Col>
        <Col style={styles.columns}>
          <View style={styles.iconsTop2}>
            <IconComponent name={`ios-arrow-down`} size={30} color={'white'} />
          </View>
          <Text style={styles.primaryText}>Request</Text>
        </Col>
        <Col style={styles.columns}>
          <View style={styles.iconsTop3}>
            <IconComponent name={`ios-arrow-up`} size={30} color={'white'} />
          </View>
          <Text style={styles.primaryText}>Pay</Text>
        </Col>
      </Grid>
      <Grid style={styles.grid}>
        <Text style={styles.secondaryText}>Total:    {accountList[0].state} €</Text>
      </Grid>
      <List>
        <ListItem thumbnail>
          <Left>
            <Thumbnail square source={AccountImage} />
          </Left>
          <Body>
            <Text note numberOfLines={1}>bunq account</Text>
            <Text>1344.05€</Text>
            <Text note numberOfLines={1}>bunq card(08/22)</Text>
          </Body>
        </ListItem>
        <ListItem thumbnail>
          <Left>
            <Thumbnail square source={CommonAccountImage} />
          </Left>
          <Body>
          <Text note numberOfLines={1}>shared bunq account</Text>
            <Text>0€</Text>
          </Body>
        </ListItem>
        <ListItem thumbnail>
          <Left>
            <Thumbnail square source={NewAccountImage} />
          </Left>
          <Body>
            <Text note numberOfLines={2}>Add a new account. It can be your private account or it can be a shared one</Text>
          </Body>
        </ListItem>
      </List>
      <List style={styles.invite}>
        <ListItem thumbnail>
          <Left>
            <Thumbnail square source={InviteImage} />
          </Left>
          <Body>
            <Text>Invite for friends to bunq</Text>
            <Text note numberOfLines={1}>and both will receive 10 €</Text>
          </Body>
        </ListItem>
      </List>
      <Grid style={styles.grid}>
        <View style={styles.center}>
          <Text style={styles.linkText}>VISTA ARCHIVADA</Text>
        </View>
      </Grid>
    </Container>
  );
}

const styles = StyleSheet.create({
  columns: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
  },
  grid: {
    marginTop: 24,
    marginLeft: 24,
    marginRight: 24
  },
  h1: {
    fontWeight: "bold",
    marginTop: 24,
    marginLeft: 24,
    marginBottom: 24,
  },
  iconsTop1: {
    backgroundColor: '#2de0c7',
    borderRadius: 50,
    height: 50,
    width: 50,
    paddingLeft: 12,
    paddingTop: 10,
  },
  iconsTop2: {
    backgroundColor: '#2196f3',
    borderRadius: 50,
    height: 50,
    width: 50,
    paddingLeft: 15,
    paddingTop: 10,
  },
  iconsTop3: {
    backgroundColor: '#ff7819',
    borderRadius: 50,
    height: 50,
    width: 50,
    paddingLeft: 15,
    paddingTop: 10,
  },
  primaryText: {
    marginTop: 12
  },
  secondaryText: {
    color: 'gray'
  },
  linkText: {
    color: 'blue'
  },
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  invite:{
    backgroundColor:'#f6f6f8',
    borderRadius:20,
    marginTop:24,
    marginLeft: 15,
    marginRight:15,
  }
});

export default AccountsView;