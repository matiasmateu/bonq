import React from 'react';
import { createBottomTabNavigator } from "react-navigation";
import Ionicons from 'react-native-vector-icons/Ionicons';
import AccountsContainer from '../containers/Accounts';
import Events from '../views/Events';
import Cards from '../views/Cards';
import Together from '../views/Together';
import Profile from '../views/Profile'

export const TabNavigator = createBottomTabNavigator(
  {
  Accounts: AccountsContainer,
  Events: Events,
  Cards: Cards,
  Together: Together,
  Profile: Profile,
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = Ionicons;
        let iconName;
        if (routeName === 'Accounts') {
          iconName = `ios-wallet`;
        } else if (routeName === 'Events') {
          iconName = `ios-reorder`;
        } else if (routeName === 'Profile') {
          iconName = `ios-person`;
        } else if (routeName === 'Cards') {
          iconName = `ios-card`;
        } else if (routeName === 'Together') {
          iconName = `ios-chatboxes`;
        }
        return <IconComponent name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'blue',
      inactiveTintColor: 'gray',
    },
  }
);