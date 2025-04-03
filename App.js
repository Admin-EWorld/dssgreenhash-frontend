import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import WithdrawScreen from './screens/WithdrawScreen';
import SwapCoinScreen from './screens/SwapCoinScreen';
import BoostScreen from './screens/BoostScreen';
import ReferralScreen from './screens/ReferralScreen';
import EarnScreen from './screens/EarnScreen';
import MoreScreen from './screens/MoreScreen';
import FAQScreen from './screens/FAQScreen';

const Stack = createStackNavigator();
const API_URL = 'http://localhost:5000'; // Update with your backend URL

// Utility function to fetch data
const fetchData = async (endpoint) => {
  try {
    const response = await fetch(`${API_URL}/${endpoint}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Withdraw" component={WithdrawScreen} />
        <Stack.Screen name="SwapCoin" component={SwapCoinScreen} />
        <Stack.Screen name="Boost" component={BoostScreen} />
        <Stack.Screen name="Referral" component={ReferralScreen} />
        <Stack.Screen name="Earn" component={EarnScreen} />
        <Stack.Screen name="More" component={MoreScreen} />
        <Stack.Screen name="FAQ" component={FAQScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
