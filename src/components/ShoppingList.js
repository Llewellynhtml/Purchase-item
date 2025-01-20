import React from 'react';
import { FlatList, StyleSheet, View, Animated } from 'react-native';
import { useSelector } from 'react-redux';
import ShoppingItem from './ShoppingItem';

const ShoppingList = () => {
  const shoppingList = useSelector((state) => state.shoppingList);

  const renderItem = ({ item }) => {
    return (
      <Animated.View style={styles.item}>
        <ShoppingItem item={item} />
      </Animated.View>
    );
  };

  return (
    <FlatList
      data={shoppingList}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
      contentContainerStyle={styles.list}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    padding: 16,
    backgroundColor: '#fff',
  },
  item: {
    marginBottom: 8,
  },
});

export default ShoppingList;
