import React, { useState, useEffect } from 'react'
import {
    StyleSheet,
    Text,
    ScrollView,
    View,
    TouchableOpacity,
    FlatList,
    ActivityIndicator
} from 'react-native'
import { getCategoryList } from '../../utills/web-handler';

import { useNavigation } from '@react-navigation/native';

const Category = () => {

    const navigation = useNavigation();

    const [category, setCategory] = useState([]);

    useEffect(() => {
        getCategoryList((res) => {
            setCategory(res.data)
        })
    }, [])

    const handleCateg = () => {
        navigation.navigate('AllCategories')
    }

    return (

        <View style={styles.container}>

            <View style={styles.headerContainer}>

                <Text style={styles.heading}>
                    Category
                </Text>

                <TouchableOpacity
                    onPress={handleCateg}
                >

                    <Text style={styles.more}>
                        More Category
                    </Text>

                </TouchableOpacity>

            </View>

            {
                category ?
                    <FlatList
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        data={category}
                        renderItem={({ item, index }) =>
                            <TouchableOpacity
                                style={styles.btn}
                                onPress={() => navigation.navigate('CategoryDetails', { itemId: item }) }
                            >
                                <Text style={styles.Categname}>
                                    {item.toUpperCase()}
                                </Text>
                            </TouchableOpacity>
                        }
                    />
                    : <ActivityIndicator size="small" color="#0000ff" />
            }
         

        </View>

    )
}

export default Category

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
        backgroundColor: '#EBF0FF',
        padding: 8,
        borderRadius: 2,
        marginRight: 8
    },
    Categname: {
        fontSize: 16,
        fontFamily: 'Poppins-Regular',
        letterSpacing: 0.5,
        color: '#000'
    },
})