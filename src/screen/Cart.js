import { Button, Image, StyleSheet, Text, View } from 'react-native'
import { useDispatch, useSelector } from "react-redux";
import React from 'react'
import { addProduct, deleteProduct } from '../redux/reduxcer/CartReduxcer';

const Cart = () => {
    const listProduct = useSelector(state => state.cartItem.cartItem);

    const dispatch = useDispatch();
    return (
        <View>
        {listProduct.map(cartItem => (
          <View key={cartItem.id}>
            <Image style={{width:100,height:100}} source={{uri:cartItem.img}}/>
            <Text>{cartItem.name} : {cartItem.quantity}</Text>
            <Button title="Remove from Cart" onPress={() => dispatch(deleteProduct(cartItem))} />
          </View>
        ))}
      </View>  
    )
}

export default Cart

const styles = StyleSheet.create({})