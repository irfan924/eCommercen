import React, { useEffect, useState } from 'react'
import {
    StyleSheet,
    Text,
    View,
    FlatList,
    TouchableOpacity
} from 'react-native'

import { useNavigation } from '@react-navigation/native';
import { getCategoryList } from '../../utills/web-handler';

const AllCategories = () => {

    const navigation = useNavigation();

    const [categ, setCateg] = useState([])

    useEffect(() => {
        getCategoryList((res, error) => {
            try {
                setCateg(res.data)
            } catch (e) {
                console.log(error)
            }
        })
    }, []);

    return (

        <View style={styles.container}>

            <Text style={styles.heading}>
                All Categories
            </Text>

            <FlatList
                data={categ}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity
                            style={styles.content}
                            onPress={() => navigation.navigate('CategoryDetails', { itemId: item }) }
                        >

                            <Text style={styles.categ}>
                                {item.toUpperCase()}
                            </Text>

                        </TouchableOpacity>
                    )
                }}
            />

        </View>
    )
}

export default AllCategories

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    heading: {
        fontSize: 16,
        fontFamily: 'Poppins-Bold',
        letterSpacing: 0.5,
        color: '#223263',
        paddingHorizontal: 16,
        paddingVertical: 28,
        borderBottomColor: '#EBF0FF',
        borderBottomWidth: 1
    },
    content: {
        paddingHorizontal: 16,
        paddingVertical: 4,
        flexDirection: 'row'
    },
    categ: {
        padding: 8,
        backgroundColor: '#EBF0FF',
        fontSize: 14,
        fontFamily: 'Poppins-Regular',
        color: '#223263',
    }
})