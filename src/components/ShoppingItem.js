import React, { useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet, Animated } from 'react-native';
import { CheckBox } from 'react-native-elements';
import { useDispatch } from 'react-redux';
import { deleteItem, togglePurchased, editItem } from '../slices/shoppingListSlice';

const ShoppingItem = ({ item }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(item.name);
  const [quantity, setQuantity] = useState(item.quantity);
  const dispatch = useDispatch();
  const fadeAnim = new Animated.Value(1); // Animation value for fade

  const handleDelete = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start(() => dispatch(deleteItem(item.id)));
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
    <Animated.View style={{ ...styles.container, opacity: fadeAnim }}>
      <CheckBox
        checked={item.purchased}
        onPress={handleTogglePurchased}
        containerStyle={styles.checkbox}
      />
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
        <Text style={[styles.text, item.purchased && styles.purchasedText]}>
          {item.name} - {item.quantity}
        </Text>
      )}
      <Button title={isEditing ? 'Save' : 'Edit'} onPress={handleEdit} />
      <Button title="Delete" onPress={handleDelete} color="red" />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    padding: 8,
    marginBottom: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  editContainer: { flexDirection: 'row' },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 4,
    marginRight: 4,
  },
  checkbox: {
    margin: 0,
    padding: 0,
  },
  text: { flex: 1, marginLeft: 8 },
  purchasedText: {
    textDecorationLine: 'line-through',
    color: 'gray',
  },
});

export default ShoppingItem;
