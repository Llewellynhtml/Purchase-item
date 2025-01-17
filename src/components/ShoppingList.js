import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { useSelector } from 'react-redux';
import ShoppingItem from '../components/ShoppingItem';

const ShoppingList = () => {
  const shoppingList = useSelector((state) => state.shoppingList);

  return (
    <FlatList
      data={shoppingList}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View style={styles.item}>
          <ShoppingItem item={item} />
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  item: { margin: 8 },
});

export default ShoppingList;
