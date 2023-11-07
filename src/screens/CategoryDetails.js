import axios from 'axios';
import React, { useState, useEffect } from 'react'
import {
    StyleSheet,
    Text,
    View,
    FlatList,
    TouchableOpacity,
    StatusBar,
    Image
} from 'react-native'

import Icon from 'react-native-vector-icons/Ionicons'

import { useNavigation } from '@react-navigation/native';

const CategoryDetails = ({ route }) => {

    const itemId = route.params;

    const navigation = useNavigation();

    const [category, setCategory] = useState([]);


    useEffect(() => {
        axios.get(`https://dummyjson.com/products/category/${itemId.itemId}`)
            .then((res) => {
                setCategory(res.data.products)
            })
            .catch((e) => {
                console.log(e);
            })
    }, [])

    return (

        <View style={styles.conatiner}>

            <StatusBar backgroundColor={'#EBF0FF'} />

            <View style={styles.header}>
                <TouchableOpacity
                    style={styles.backButton}
                    onPress={() => { navigation.goBack() }}
                >
                    <Icon name='chevron-back-outline' size={40} color='#40BFFF' />
                </TouchableOpacity>
                <Text style={styles.headerText}>
                    {itemId ? (itemId.itemId).toUpperCase() : 'Loading'}
                </Text>
            </View>

            <FlatList
                data={category}
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

export default CategoryDetails

const styles = StyleSheet.create({
    conatiner: {
        flex: 1,
        backgroundColor: '#fff'
    },
    header: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 45,
        backgroundColor: '#EBF0FF'
    },
    backButton: {
        position: 'absolute',
        left: 10
    },
    headerText: {
        fontSize: 16,
        color: '#000',
        fontFamily: 'Poppins-Bold',
        letterSpacing: 1
    },
    btn: {
        borderWidth: 1,
        borderColor: '#EBF0FF',
        padding: 16,
        borderRadius: 5,
        marginHorizontal: 8
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
