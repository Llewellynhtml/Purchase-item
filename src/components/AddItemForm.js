import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { addItem } from '../slices/shoppingListSlice';

const AddItemForm = () => {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('');
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (name && quantity) {
      dispatch(addItem({ id: Date.now().toString(), name, quantity, purchased: false }));
      setName('');
      setQuantity('');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Item Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Quantity"
        value={quantity}
        onChangeText={setQuantity}
        keyboardType="numeric"
      />
      <Button title="Add Item" onPress={handleAdd} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { margin: 16 },
  input: { borderWidth: 1, padding: 8, marginBottom: 8 },
});

export default AddItemForm;
