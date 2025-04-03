import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { fetchData } from '../utils/api'; // Adjust the import path as necessary

export default function MoreScreen() {
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
      <Text style={styles.title}>More Screen</Text>
      {data && <Text>{JSON.stringify(data)}</Text>}
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
