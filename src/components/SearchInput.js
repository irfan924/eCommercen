import React from 'react'
import {
    StyleSheet,
    TouchableOpacity,
    View,
    TextInput
} from 'react-native'

import Icon from 'react-native-vector-icons/Ionicons'


const SearchInput = ({onPress,onChangeText,value,ref}) => {
    return (
        <View style={styles.container}>

            <TouchableOpacity onPress={onPress}>

                <Icon name='search-outline' size={24} color='#40BFFF' />

            </TouchableOpacity>

            <TextInput

                placeholder='Search Product'
                placeholderTextColor={'#9098B1'}
                style={styles.input}
                onChangeText={onChangeText}
                value={value}
                ref={ref}
            />

        </View>
    )
}

export default SearchInput

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#EBF0FF',
        paddingLeft: 16,
        gap: 8,
        borderRadius: 4
    },
    input: {
        fontFamily: 'Poppins-Light',
        fontSize: 16,
        width: '60%'
    }
})