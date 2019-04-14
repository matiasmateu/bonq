import React from "react";
import { View, StyleSheet } from "react-native";
import { Container, Header, Text, Grid, Col, H1, Body, List, ListItem, Thumbnail, Content, Left, Right, Button } from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import DavidImage from '../../assets/david.png'

const EventsView = (accounts) => {
    let IconComponent = Ionicons;
    const accountList = accounts.accounts
    return (
            <Container>
            <Header />
            <H1 style={styles.h1}>Events</H1>
            <Grid style={styles.grid}>
              <Col style={styles.columns}>
                <View style={styles.iconsTop1}>
                  <IconComponent name={`ios-search`} size={30} color={'white'} />
                </View>
                <Text style={styles.primaryText}>Seach</Text>
              </Col>
              <Col style={styles.columns}>
                <View style={styles.iconsTop2}>
                  <IconComponent name={`ios-calendar`} size={30} color={'white'} />
                </View>
                <Text style={styles.primaryText}>Scheduled</Text>
              </Col>
              <Col style={styles.columns}>
                <View style={styles.iconsTop3}>
                  <IconComponent name={`ios-checkbox-outline`} size={30} color={'white'} />
                </View>
                <Text style={styles.primaryText}>Accepted</Text>
              </Col>
            </Grid>
            <Content>
            <List>
              <ListItem thumbnail>
                <Left>
                  <Thumbnail square source={DavidImage} />
                </Left>
                <Body>
                  <Text>David</Text>
                  <Text note numberOfLines={1}>Payment Request Received</Text>
                </Body>
                <Right>
                <Text>-21,00</Text>
                </Right>
              </ListItem>
              <ListItem thumbnail>
                <Left>
                  <Thumbnail square source={DavidImage} />
                </Left>
                <Body>
                  <Text>David</Text>
                  <Text note numberOfLines={1}>Payment Request Received</Text>
                </Body>
                <Right>
                <Text>-11,00</Text>
                </Right>
              </ListItem>
              <ListItem thumbnail>
                <Left>
                  <Thumbnail square source={DavidImage} />
                </Left>
                <Body>
                  <Text>David</Text>
                  <Text note numberOfLines={1}>Payment Request Received</Text>
                </Body>
                <Right>
                <Text>-6,00</Text>
                </Right>
              </ListItem>
              <ListItem thumbnail>
                <Left>
                  <Thumbnail square source={DavidImage} />
                </Left>
                <Body>
                  <Text>David</Text>
                  <Text note numberOfLines={1}>Payment Request Received</Text>
                </Body>
                <Right>
                <Text>-5,00</Text>
                </Right>
              </ListItem>
              <ListItem thumbnail>
                <Left>
                  <Thumbnail square source={DavidImage} />
                </Left>
                <Body>
                  <Text>David</Text>
                  <Text note numberOfLines={1}>Payment Request Received</Text>
                </Body>
                <Right>
                <Text>-4,00</Text>
                </Right>
              </ListItem>
              <ListItem thumbnail>
                <Left>
                  <Thumbnail square source={DavidImage} />
                </Left>
                <Body>
                  <Text>David</Text>
                  <Text note numberOfLines={1}>Payment Request Received</Text>
                </Body>
                <Right>
                <Text>-10,00</Text>
                </Right>
              </ListItem>
              <ListItem thumbnail>
                <Left>
                  <Thumbnail square source={DavidImage} />
                </Left>
                <Body>
                  <Text>David</Text>
                  <Text note numberOfLines={1}>Payment Request Received</Text>
                </Body>
                <Right>
                <Text>-8,00</Text>
                </Right>
              </ListItem>
            </List>
            </Content>
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
          paddingLeft: 15,
          paddingTop: 10,
        },
        iconsTop2: {
          backgroundColor: '#2196f3',
          borderRadius: 50,
          height: 50,
          width: 50,
          paddingLeft: 12,
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

export default EventsView;