import React, { useState, useEffect } from 'react'
import {
    StyleSheet,
    Text,
    ScrollView,
    View,
    TouchableOpacity,
    Image,
    FlatList
} from 'react-native'
import { getFurnitureList } from '../../utills/web-handler';

import { useNavigation } from '@react-navigation/native';

const FlashSale = () => {

    const navigation = useNavigation();

    const [products, setProducts] = useState([]);

    useEffect(() => {
        getFurnitureList((data) => {
            setProducts(data.data.products);
        })
    }, [])

    return (

        <View style={styles.container}>

            <View style={styles.headerContainer}>

                <Text style={styles.heading}>
                    Flash Sale
                </Text>

                <TouchableOpacity
                    onPress={() => navigation.navigate('Explore')}
                >

                    <Text style={styles.more}>
                        See More
                    </Text>

                </TouchableOpacity>

            </View>

            <FlatList
                data={products}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
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

export default FlashSale

const styles = StyleSheet.create({
    container: {
        marginTop: 24,

    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 8
    },
    heading: {
        fontSize: 14,
        fontFamily: 'Poppins-Bold',
        color: '#223263',
        letterSpacing: 0.5,
    },
    more: {
        fontSize: 14,
        fontFamily: 'Poppins-Bold',
        color: '#40BFFF',
        letterSpacing: 0.5,
    },
    btn: {
        marginRight: 12,
        borderWidth: 1,
        borderColor: '#EBF0FF',
        padding: 16,
        borderRadius: 5,
        flex: 1
    },
    img: {
        width: 109,
        height: 109,
        borderRadius: 5,
        marginBottom: 8,
    },
    Categname: {
        fontSize: 12,
        fontFamily: 'Poppins-Bold',
        letterSpacing: 0.5,
        maxWidth: 109,
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
    orignalPrice: {
        fontSize: 10,
        letterSpacing: 0.5,
        fontFamily: 'Poppins-Bold',
        color: '#9098B1',
        textDecorationLine: 'line-through',
    },
    discount: {
        fontSize: 10,
        letterSpacing: 0.5,
        fontFamily: 'Poppins-Bold',
        color: '#FB7181'
    },

})