// ShoppingItem.js
import React, { useState } from 'react';
import { View, Text, Button, CheckBox, TextInput, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { deleteItem, togglePurchased, editItem } from '../slices/shoppingListSlice';

const ShoppingItem = ({ item }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(item.name);
  const [quantity, setQuantity] = useState(item.quantity);
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteItem(item.id));
  };

  const handleTogglePurchased = () => {
    dispatch(togglePurchased(item.id));
  };

  const handleEdit = () => {
    if (isEditing) {
      dispatch(editItem({ id: item.id, name, quantity }));
    }
    setIsEditing(!isEditing);
  };

  return (
    <View style={styles.container}>
      <CheckBox value={item.purchased} onValueChange={handleTogglePurchased} />
      {isEditing ? (
        <View style={styles.editContainer}>
          <TextInput
            style={styles.input}
            value={name}
            onChangeText={setName}
          />
          <TextInput
            style={styles.input}
            value={quantity}
            onChangeText={setQuantity}
            keyboardType="numeric"
          />
        </View>
      ) : (
        <Text style={item.purchased ? styles.purchasedText : null}>
          {item.name} - {item.quantity}
        </Text>
      )}
      <Button title={isEditing ? 'Save' : 'Edit'} onPress={handleEdit} />
      <Button title="Delete" onPress={handleDelete} color="red" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  editContainer: { flexDirection: 'row' },
  input: { borderWidth: 1, padding: 4, marginRight: 4 },
  purchasedText: { textDecorationLine: 'line-through', color: 'gray' },
});

export default ShoppingItem;
