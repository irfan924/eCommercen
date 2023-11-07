import React, { useState, useEffect } from 'react'
import {
    Image,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    FlatList
} from 'react-native'

import { getLaptopsList } from '../../utills/web-handler';

import { useNavigation } from '@react-navigation/native';

const RecomendedProducts = () => {

    const navigation = useNavigation();

    const [products, setProducts] = useState([]);

    useEffect(() => {
        getLaptopsList((res) => {
            setProducts(res.data.products)
        })
    }, [])


    return (
        <View style={styles.container}>

            <Image
                source={require('../Images/RecomendedBanner.png')}
                resizeMode='contain'
                style={styles.recomendedImg}
            />

            <FlatList
                data={products}
                numColumns={2}
                key={1}
                contentContainerStyle={styles.flatList}
                renderItem={({ item }) =>

                    <View>
                        <TouchableOpacity style={styles.btn}
                            onPress={() => {
                                navigation.navigate('ProductDeatils', { itemId: item.id })
                            }}
                        >

                            <Image
                                source={{ uri: item ? item.thumbnail : null }}
                                resizeMode='contain'
                                style={styles.img}
                            />

                            <Text style={styles.Categname} numberOfLines={2}>
                                {item ? item.title : 'loading'}
                            </Text>

                            <Text style={styles.price}>
                                $ {item ? item.price : 'loading'}
                            </Text>

                            <Text style={styles.rating}>
                                {item ? 'Rating (' + item.rating + ')' : 'loading'}
                            </Text>

                            <Text style={styles.discount}>
                                {item ? item.discountPercentage + '% Off' : 'loading'}
                            </Text>

                        </TouchableOpacity>
                    </View>

                }

            />

        </View>
    )
}

export default RecomendedProducts

const styles = StyleSheet.create({
    container: {
        marginBottom: 24
    },
    recomendedImg: {
        width: 368,
        height: 200,
        borderRadius: 5,
        marginBottom: 16,
    },
    rating: {
        fontSize: 12,
        fontFamily: 'Poppins-Bold',
        letterSpacing: 0.5,
        color: '#FFC833',
        marginTop: 4,
    },
    btn: {
        borderWidth: 1,
        borderColor: '#EBF0FF',
        padding: 16,
        borderRadius: 5,
        marginHorizontal: 8,
        flex: 1
    },
    img: {
        backgroundColor: '#EBF0FF',
        width: 140,
        height: 140,
        borderRadius: 5,
        marginBottom: 8,
    },
    Categname: {
        fontSize: 12,
        fontFamily: 'Poppins-Bold',
        letterSpacing: 0.5,
        maxWidth: 140,
        color: '#223263'
    },
    price: {
        fontSize: 12,
        fontFamily: 'Poppins-Bold',
        color: '#40BFFF',
        marginVertical: 16,
    },
    priceView: {
        flexDirection: 'row',
        gap: 8
    },
    discount: {
        fontSize: 10,
        letterSpacing: 0.5,
        fontFamily: 'Poppins-Bold',
        color: '#FB7181'
    },
    flatList: {
        gap: 10,
        alignSelf: 'center',
        paddingVertical: 16
    }

})