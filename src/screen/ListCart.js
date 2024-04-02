import { Button, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useDispatch, useSelector } from "react-redux";
import React from 'react'
import { addProduct } from '../redux/reduxcer/CartReduxcer';

const ListCart = ({ prd,navigation}) => {
    const listProduct = useSelector(state => state.cartItem.cartItem);

    const dispatch = useDispatch();
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.btn} onPress={()=>navigation.navigate('Cart')}>
                <Text>Open Cart</Text>
            </TouchableOpacity>

            <View style={styles.item}>
                <View>

                {
                    prd.map(prd => (
                        <View key={prd.id}>
                            <Image style={{ width: 100, height: 100 }} source={{ uri: prd.img }} />
                            <Text>{prd.name}</Text>
                            <TouchableOpacity
                            styles={styles.btn}
                            onPress={() => { dispatch(addProduct(prd)), console.log(prd); }}>
                                <Text style={{color:"black"}}>Add to cart</Text>
                            </TouchableOpacity>
                            {/* <Button title="Add to Cart" onPress={() => { dispatch(addProduct(prd)), console.log(prd); }} /> */}
                        </View>
                    ))
                }
                </View>
            </View>
        </View>
    )
}

export default ListCart

const styles = StyleSheet.create({
    container:{
        alignItems:'center',
        margin:10
    },
    item: {
        backgroundColor: 'gray',
        padding:10,
        margin:10,
        width:200,
        height:500,
        alignItems:'center'
    },
    btn:{
        width:100,
        height:40,
        backgroundColor:'red',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:10
    }
})