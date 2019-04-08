import React from "react";
import { Button, View, Text } from "react-native";
import AccountsView from '../views/Accounts'
import customData from '../../data.json';


class AccountsContainer extends React.Component {
  
  render() {
    const accounts = customData.Accounts
    return (
      <AccountsView accounts={accounts}/>
    );
  }
}

export default AccountsContainer;