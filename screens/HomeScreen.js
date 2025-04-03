import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { fetchData } from '../utils/api'; // Adjust the import path as necessary

export default function HomeScreen({ navigation }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const result = await fetchData('your-endpoint'); // Replace 'your-endpoint' with your actual endpoint
      setData(result);
    };

    getData();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home Screen</Text>
      {data && <Text>{JSON.stringify(data)}</Text>}
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
