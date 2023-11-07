import axios from 'axios'
import React, { useState, useEffect } from 'react'
import {
    StyleSheet,
    Text,
    View,
    StatusBar,
    Image,
    TouchableOpacity,
    ScrollView,
} from 'react-native'

import Icon from 'react-native-vector-icons/Ionicons'

import BackButton from '../components/BackButton'
import PrimaryButton from '../components/PrimaryButton'

import { useNavigation } from '@react-navigation/native'

const ProductDeatils = ({ route }) => {

    const itemId = route.params;

    const navigation = useNavigation();

    const [product, setProduct] = useState([])

    useEffect(() => {
        axios.get(`https://dummyjson.com/products/${itemId.itemId}`)
            .then((res) => {
                setProduct(res.data);
            })
            .catch(error => {
                console.log(error);
            })
    }, [])

    return (
        <View style={styles.container}>

            <StatusBar backgroundColor={'#EBF0FF'} />

            <BackButton
                onPress={() => navigation.goBack()}
            />

            <View style={[styles.imgbg, styles.shadow]}>
                {
                    product != null ?
                        <Image
                            source={{ uri: product != null ? product.thumbnail : null }}
                            resizeMode='center'
                            style={{ width: 300, height: 300 }}
                        />
                        : 'Lodaing'
                }
            </View>

            <View style={styles.content}>

                <View style={styles.heading}>
                    <Text style={styles.name}>
                        {
                            product ? product.title : 'Loading'
                        }
                    </Text>
                    <TouchableOpacity>
                        <Icon name='heart-outline' size={24} color='#9098B1' />
                    </TouchableOpacity>
                </View>

                <Text style={styles.price}>
                    {
                        product ? '$ ' + product.price : 'Loading'
                    }
                </Text>

                <ScrollView style={styles.descriptionView}>
                    <Text style={styles.desc}>
                        Description
                    </Text>
                    <Text style={styles.description}>
                        {
                            product ? product.description : 'Loading'
                        }
                    </Text>
                </ScrollView>

                <View style={styles.common}>

                    <Text style={styles.rating}>
                        Rating
                    </Text>

                    <Text style={{ ...styles.rating, color: '#FB7181' }}>
                        {
                            product ? product.rating : 'Loading'
                        }
                    </Text>

                </View>

                <View style={styles.btn}>
                    <PrimaryButton buttonName={'Add to Cart'} />
                </View>

            </View>

        </View>
    )
}

export default ProductDeatils

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        width: '100%',
        height: '100%'
    },
    imgbg: {
        flex: 1.5,
        backgroundColor: '#EBF0FF',
        borderBottomRightRadius: 30,
        borderBottomLeftRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 16,
    },
    shadow: {
        shadowColor: 'gray',
        shadowOffset: { width: 2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 10
    },
    content: {
        paddingHorizontal: 16,
        flex: 2,
    },
    name: {
        fontSize: 20,
        fontFamily: 'Poppins-Bold',
        letterSpacing: 0.5,
        flex: 3,
        color: '#223263'
    },
    heading: {
        flexDirection: 'row',
    },
    price: {
        fontSize: 20,
        color: '#40BFFF',
        fontFamily: 'Poppins-Bold',
        letterSpacing: 1,
        paddingBottom: 8,
        borderBottomColor: '#EBF0FF',
        borderBottomWidth: 1
    },
    descriptionView: {
        paddingVertical: 16,
        borderBottomColor: '#EBF0FF',
        borderBottomWidth: 1,
        maxHeight: 200,
    },
    desc: {
        fontSize: 16,
        fontFamily: 'Poppins-Bold',
        marginBottom: 8,
        letterSpacing: 1,
        color: '#223263'
    },
    description: {
        fontSize: 12,
        letterSpacing: 0.5,
        fontFamily: 'Poppins-Regular',
        color: '#9098B1',
        marginBottom: 24,
    },
    common: {
        paddingVertical: 16,
        borderBottomColor: '#EBF0FF',
        borderBottomWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    rating: {
        marginVertical: 4,
        fontSize: 16,
        color: '#223263',
        fontFamily: 'Poppins-Regular',
        letterSpacing: 1
    },
    btn: {
        flex: 1,
        justifyContent: 'center',
    },

})