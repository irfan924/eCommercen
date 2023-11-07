import React from 'react'
import {
    StyleSheet,
    Text,
    View,
    TextInput,
} from 'react-native'

const ProductInput = ({onChangeText,value,placeholder,detail,numberOfLines}) => {
    return (
        <View >

            <View style={styles.container}>

                <Text style={styles.productName}>
                    {detail}
                </Text>

                <TextInput
                    placeholder={placeholder}
                    placeholderTextColor={'#223263'}
                    style={styles.input}
                    onChangeText={onChangeText}
                    value={value}
                    multiline={true}
                    numberOfLines={numberOfLines}
                />

            </View>

        </View>
    )
}

export default ProductInput

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
        marginBottom: 8
    },
    productName: {
        color: '#40BFFF',
        fontSize: 16,
        fontFamily: 'Poppins-Light',
        letterSpacing: 0.5,
        flex: 1
    },
    input:{
        borderWidth: 1,
        borderColor: '#EBF0FF',
        width: 220,
        paddingHorizontal: 8,
        borderRadius: 5 ,
        flex: 2
    }
})