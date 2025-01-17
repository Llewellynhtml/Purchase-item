import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AddItemForm from '../components/AddItemForm';
import ShoppingList from '../components/ShoppingList';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <AddItemForm />
      <ShoppingList />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
});

export default HomeScreen;
