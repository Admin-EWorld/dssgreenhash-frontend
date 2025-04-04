import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet, TextInput } from 'react-native';
import { fetchData } from '../utils/api'; // Adjust the import path as necessary

export default function WithdrawScreen() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const result = await fetchData('withdraw-data'); // Endpoint on your backend server
      setData(result);
    };

    getData();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Withdraw USDT</Text>
      {data && <Text>{JSON.stringify(data)}</Text>}
      <TextInput
        style={styles.input}
        placeholder="Enter your Address (TRX)"
      />
      <TextInput
        style={styles.input}
        placeholder="Amount"
        keyboardType="numeric"
      />
      <Button title="Withdraw" onPress={() => {}} />
      <Text style={styles.subtitle}>Minimal amount: 5 USDT</Text>
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
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: '80%',
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  subtitle: {
    fontSize: 16,
    marginTop: 20,
  },
});
