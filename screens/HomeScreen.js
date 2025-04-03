import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home Screen</Text>
      <Button title="Withdraw" onPress={() => navigation.navigate('Withdraw')} />
      <Button title="Swap Coin" onPress={() => navigation.navigate('SwapCoin')} />
      <Button title="Boost" onPress={() => navigation.navigate('Boost')} />
      <Button title="Referral" onPress={() => navigation.navigate('Referral')} />
      <Button title="Earn" onPress={() => navigation.navigate('Earn')} />
      <Button title="More" onPress={() => navigation.navigate('More')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
